# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Softlabs Infotech company website built with **Next.js 16.1** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**. Single-service architecture — no database, no Docker, no external services required.

### Running the dev server

```bash
OPENAI_API_KEY=sk-placeholder npm run dev
```

The `OPENAI_API_KEY` env var is required even for dev because the OpenAI client is instantiated at module level in `app/api/chat/route.ts`. A placeholder value is sufficient for all non-chatbot functionality. The dev server starts on port 3000.

### Lint / Build / Test

- **Lint:** `npm run lint` — ESLint with `eslint-config-next`. Exits non-zero due to existing warnings/errors in the codebase (2 errors, 10 warnings). These are pre-existing and not caused by agent changes.
- **Build:** `OPENAI_API_KEY=sk-placeholder npm run build` — requires the placeholder env var (see above).
- **Tests:** No automated test framework is configured in this project.

### Optional integrations

- **OpenAI chatbot** (`/api/chat`): Set a real `OPENAI_API_KEY` in `.env.local` to enable. Without it, the chatbot returns 503 gracefully.
- **Stingo CRM** (`/api/complaints`): Set `STINGO_PUSH_API_UID` and `STINGO_AUTH_KEY` in `.env.local`. Without them, complaints are logged to console but not forwarded — the form still works and returns success.
