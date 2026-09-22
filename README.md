# SplitMate

SplitMate is a lightweight, responsive bill-splitting calculator that helps groups quickly calculate tips, totals, and individual shares.

## Features

- Instant Kenyan Shilling bill, tip, total, and per-person calculations
- Preset and custom tip percentages
- Adjustable group sizes from 1 to 50 people
- Optional per-person round-up with the exact amount shown
- Copyable summaries and native device sharing with clipboard fallback
- Accessible light and dark themes with saved preference
- Inline validation and responsive layouts for mobile, tablet, and desktop
- No accounts, database, external services, or bill history

## Screenshots

Add current desktop and mobile screenshots here after deployment.

## Tech stack

- React 19
- TypeScript
- TanStack Start and TanStack Router
- Tailwind CSS 4
- Lucide React

## Getting started

Node.js 20 or newer is recommended.

### Installation

```sh
git clone <repository-url>
cd splitmate
npm install
```

### Run locally

```sh
npm run dev
```

Open the local URL shown in the terminal.

### Build

```sh
npm run build
```

To inspect the production build locally:

```sh
npm run preview
```

## Deployment

SplitMate is frontend-only and can be deployed to Vercel, Netlify, or another static-compatible host. Install dependencies and use `npm run build` as the build command.

## Project structure

```text
src/
  components/       Interface sections and calculator controls
  hooks/            Theme preference hook
  routes/           Application routes and metadata
  types/            Shared calculator types
  utils/            Currency formatting and calculation logic
public/              Public favicon and crawler configuration
```

## Future improvements

- Named participant lists
- Lightweight custom or uneven splits
- Additional currencies
- Installable progressive web app support

## License

This project is available under the MIT License.
