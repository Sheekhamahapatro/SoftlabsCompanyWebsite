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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## AI Chatbot

The website includes an AI chatbot powered by **OpenAI (ChatGPT)**. Add your API key to `.env.local`:

```env
OPENAI_API_KEY=sk-your-openai-api-key
```

Get your key from [platform.openai.com](https://platform.openai.com/api-keys). The chatbot uses `gpt-4o-mini` for fast, cost-effective responses.

---

## Complaint / Query Register

The website includes a **Complaint Register** at `/complaint-register` where customers can submit complaints or queries. Submissions are sent to **Stingo** CRM via the Push Lead API.

### Stingo Integration

To enable Stingo integration, add these to your `.env.local`:

```env
STINGO_PUSH_API_UID=your_push_api_uid
STINGO_AUTH_KEY=your_auth_key
```

Get these values from your Stingo account: **Master Tools → Other Party Import**.

Without these env vars, complaints are logged to the server console but not pushed to Stingo.

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# SoftlabsCompanyWebsite" 
