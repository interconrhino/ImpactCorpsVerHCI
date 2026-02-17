This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Traffic Route Logging (Google Sheets)

This app includes a redirect + log route:

- `GET /r/:pageKey/:urlId`
- Example: `https://impactcorps.org/r/h/1`

Supported page keys:

- `h` -> `/`
- `j` -> `/join`
- `c` -> `/contact`
- `p` -> `/ourprogram`
- `a` -> `/aboutus`

For each request, the app appends one row to Google Sheets with:

- `page_key`
- `url_id`
- `timestamp_utc` (ISO UTC)

Important behavior:

- If Google Sheets write fails, the user is still redirected.

### Google Sheets Setup

1. Create a sheet tab named `logs`.
2. Add header row:
   - `page_key`, `url_id`, `timestamp_utc`
3. Create a Google Cloud service account with Sheets API enabled.
4. Share the sheet with the service account email as Editor.
5. Set env vars:

```env
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SHEET_NAME=logs
```

Use the service account JSON field `private_key` for `GOOGLE_SHEETS_PRIVATE_KEY`.
Do not use `private_key_id`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
