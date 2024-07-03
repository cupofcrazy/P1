# P2 — Next.js and Sanity Studio Repo

This repo combines includes [Next.js](https://nextjs.org/) and [Sanity Studio](https://www.sanity.io/studio), a platform for structured content, to create a full-stack application. It's structured to support a website (`site`) and its content management system (`studio`).

## Project Structure

- `app/`: Contains the Next.js application code, divided into `site` for the frontend and `studio` for the Sanity Studio backend.
- `components/`: Reusable React components like `header.tsx`, `footer.tsx`, and more.
- `lib/`: Shared libraries and utilities, particularly for Sanity integration.
- `utils/`: Utility functions and helpers.
- `sanity.cli.ts`: Configuration for Sanity CLI commands.
- `sanity.config.ts`: Sanity Studio configuration.
- `studio/`: Sanity Studio specific files and schemas.

## Getting Started

To get the development server running:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
