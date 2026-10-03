import { NextResponse } from "next/server";
import { validateContact, type ContactInput } from "@/lib/validation";

/**
 * Contact form endpoint. Validates input server-side.
 * TODO (deployment): forward the message via an email provider
 * (e.g. Resend, SES or the university SMTP) using environment credentials.
 */
export async function POST(request: Request) {
  let body: Partial<ContactInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "અમાન્ય વિનંતી." }, { status: 400 });
  }

  // Bots fill hidden fields; pretend success so they don't retry.
  if (body.website) return NextResponse.json({ ok: true });

  const errors = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  return NextResponse.json({ ok: true });
}
