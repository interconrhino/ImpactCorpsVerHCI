import { NextResponse } from "next/server";

import { appendTrafficLogToGoogleSheets } from "@/app/lib/google-sheets";

const PAGE_DESTINATIONS: Record<string, string> = {
  h: "/",
  j: "/join",
  c: "/contact",
  p: "/ourprogram",
  a: "/aboutus",
};

const URL_ID_REGEX = /^[A-Za-z0-9_-]{1,120}$/;
const LOGGING_TIMEOUT_MS = 1000;

type RouteContext = {
  params: Promise<{
    pageKey: string;
    urlId: string;
  }>;
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const isAbortError = (error: unknown) =>
  (error instanceof DOMException && error.name === "AbortError") ||
  (error instanceof Error && error.name === "AbortError");

export async function GET(request: Request, context: RouteContext) {
  const { pageKey, urlId } = await context.params;
  const normalizedPageKey = pageKey.toLowerCase();
  const targetPath = PAGE_DESTINATIONS[normalizedPageKey];

  if (!targetPath) {
    return NextResponse.json({ error: "Invalid page key." }, { status: 400 });
  }
  if (!URL_ID_REGEX.test(urlId)) {
    return NextResponse.json({ error: "Invalid url id." }, { status: 400 });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), LOGGING_TIMEOUT_MS);

  try {
    await appendTrafficLogToGoogleSheets({
      pageKey: normalizedPageKey,
      urlId,
      timestampUtc: new Date().toISOString(),
    }, { signal: controller.signal });
  } catch (error) {
    if (isAbortError(error)) {
      console.warn("Traffic logging timed out; redirecting anyway.", {
        pageKey: normalizedPageKey,
        urlId,
        timeoutMs: LOGGING_TIMEOUT_MS,
      });
    } else {
      console.error("Traffic logging failed; redirecting anyway.", {
        pageKey: normalizedPageKey,
        urlId,
        error,
      });
    }
  } finally {
    clearTimeout(timeoutId);
  }

  return NextResponse.redirect(new URL(targetPath, request.url), 302);
}
