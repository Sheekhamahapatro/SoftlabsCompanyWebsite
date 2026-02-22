import { NextResponse } from "next/server";

const STINGO_PUSH_URL =
  "https://www.stingosales.com/stapi/v2/pushlead-endpoint.php";

interface ComplaintBody {
  name: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  description: string;
}

/**
 * Maps complaint data to Stingo Push Lead API format.
 * Required fields: mobile, email, firstname, company, address, city, state, lead_from
 * @see https://www.stingosales.com/index.php?page=stingo-api
 */
function toStingoLeadPayload(body: ComplaintBody) {
  const complaintText = [
    `Subject: ${body.subject}`,
    `Category: ${body.category}`,
    `Description: ${body.description}`,
  ].join("\n\n");

  return {
    mobile: body.phone.replace(/\D/g, "").slice(-10) || body.phone,
    email: body.email,
    firstname: body.name,
    company: "Complaint/Query - Softlabs Infotech Website",
    address: complaintText,
    city: "N/A",
    state: body.category || "General",
    lead_from: "website_complaint_register",
  };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ComplaintBody;

    const { name, email, phone, category, subject, description } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !subject?.trim() || !description?.trim()) {
      return NextResponse.json(
        { error: "Name, email, phone, subject, and description are required." },
        { status: 400 }
      );
    }

    const pushApiUid = process.env.STINGO_PUSH_API_UID;
    const authKey = process.env.STINGO_AUTH_KEY;

    if (!pushApiUid || !authKey) {
      console.warn(
        "STINGO_PUSH_API_UID or STINGO_AUTH_KEY not set. Complaint logged but not pushed to Stingo."
      );
      // Still return success - complaint was received; admin can add env vars later
      const payload = toStingoLeadPayload(body);
      console.log("[Complaint Register]", JSON.stringify(payload, null, 2));
      return NextResponse.json({
        success: true,
        message: "Complaint registered successfully.",
      });
    }

    const stingoPayload = toStingoLeadPayload(body);
    const url = `${STINGO_PUSH_URL}?push_api_uid=${encodeURIComponent(pushApiUid)}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        AuthKey: authKey,
      },
      body: JSON.stringify(stingoPayload),
    });

    const text = await res.text();
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    if (!res.ok) {
      console.error("[Stingo API error]", res.status, data);
      return NextResponse.json(
        {
          error: "Failed to submit complaint to our system. Please try again or contact us directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Complaint registered successfully.",
    });
  } catch (err) {
    console.error("[Complaints API]", err);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
