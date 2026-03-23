import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, phone, interest, message } = body;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "namkhagyasto999@gmail.com",
    subject: `New Inquiry from ${firstName} ${lastName}`,
    html: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
