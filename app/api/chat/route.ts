import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: "Please enter a message." }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { reply: "AI is currently unavailable. Please try again later." },
        { status: 503 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are Softlabs AI assistant. Help users with IT services, cybersecurity, infrastructure, and support queries.",
        },
        { role: "user", content: message },
      ],
      max_tokens: 256,
      temperature: 0.6,
    });

    const reply = completion.choices[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json(
        { reply: "I couldn't generate a reply right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("CHAT API ERROR:", error);

    if (error instanceof OpenAI.APIError && error.status === 429) {
      return NextResponse.json(
        { reply: "We're temporarily out of AI quota. Please try again in a few minutes." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { reply: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
