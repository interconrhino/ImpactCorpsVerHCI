# ImpactCorps Landing + Join Us Form (Next.js + Airtable)

## Overview
Build a simple two-page website to introduce ImpactCorps and capture interest from prospective participants. Pages: Landing (`/`) and Join Us (`/join`). Form submissions are stored in Airtable.

## Goals
- Present ImpactCorps mission, vision, problem, approach, and solution clearly.
- Capture program interest with a short form.
- Make the site fast, responsive, and easy to maintain.

## Non-Goals
- Payments, authentication, or user accounts.
- Application review workflow or back-office UI.
- Complex content management.

## Target Users
- Under-resourced students interested in impact careers and AI tools.
- Community members who want to explore the program.

## Reference
- Founders Pledge visual reference: https://www.founderspledge.com/

## Information Architecture
- Landing page (`/`)
  - Hero + CTA (Join Us)
  - Mission
  - Vision
  - Problem
  - Approach & Solution
  - Core Competencies
  - Program Features
  - Theory of Change
  - Secondary CTA (Join Us)
- Join Us (`/join`)
  - Short intro
  - Interest form
  - Success confirmation state

## Content (from ImpaectCorps Summary)
### Mission
To empower under-resourced students to become AI-fluent changemakers to shape more impactful careers and futures.

### Vision
A world where the human capacity to care and do good is:
- Enhanced, not eroded, by increased use of AI.
- Accessible even to those with the least resources.

### Problem
Under-resourced students face barrirs to pursuing impactful careers:
- Career opportunity cost: time spent on impact can feel like time lost from stable, high-paying careers (big tech, finance, consulting).
- Financial constraints: near-term income needs and long-term salary concerns.
- Awareness gap: limited networks and understanding of high-impact career pathways.

### Approach & Solution
ImpactCorps helps students become AI-fluent changemakers by building three core competencies:
- Care: center their "why" around care for others.
- Human agency: self-determine and act on challenges they want to tackle.
- AI fluency: use available AI tools resourcefully to achieve goals.

We train and reward students to make social impact by using AI to tackle challenges in their communities.

### Program Features
- Student-sourced social problems: participants define problems based on lived experience.
- Learning-by-building: solve real problems using AI with step-by-step guidance.
- Impact-based financial reward: rewards proportional to adoption and social impact value.

### Theory of Change
- Output: open-sourced solutions that tackle community challenges and make direct impact.
- Outcome: AI-fluent changemakers with care, human agency, and AI fluency.
- Impact: accelerated, impact-biased careers driven by care and AI-enabled capacity.

## Functional Requirements
- Landing page renders all content sections above with strong hierarchy and clear CTAs.
- Join Us page includes a form with validation and success state.
- Form submission posts to a Next.js API route which writes to Airtable.
- On success, show an inline confirmation message and optionally clear the form.
- On error, show a friendly error message and preserve inputs.

## Form Fields
Required:
- Name (single line text)
- Email (email format)
- School (single line text)
- Self-identified demographics (multi-select): BIPOC, Low income
- Willingness to participate in program without financial rewards (yes/no)

Optional:
- Social problem in mind (long text)


## Airtable Schema (suggested)
Table: `Interest`
Columns:
- Name (Single line text)
- Email (Email)
- School (Single line text)
- Demographics (Multiple select: BIPOC, Low income)
- SocialProblem (Long text)
- ProceedWithoutRewards (Single select: Yes, No)
- SubmittedAt (Date/time)
- Source (Single line text, default: "ImpactCorps Site")

## Technical Requirements
- Framework: Next.js (App Router).
- Form: client component with basic validation.
- API route: `app/api/interest/route.ts` handles POST.
- Airtable: use API key + base ID + table name in env vars.
  - `AIRTABLE_API_KEY`
  - `AIRTABLE_BASE_ID`
  - `AIRTABLE_TABLE_NAME` (default "Interest")
- No network calls directly from the client to Airtable.
- Basic accessibility (labels, focus states, error messaging).

## Success Metrics
- Form submission conversion rate from landing page.
- Completion rate (started vs submitted).
- Unique submissions.

## Open Questions
- Any preferred copy tone beyond the above content?
- Should the form include phone number or graduation year?
