import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      trip,
      startDate,
      duration,
      groupSize,
      accommodation,
      fitnessLevel,
      specialRequests,
      addons,
    } = data;

    const message = `
New Booking Request

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Country: ${country}

Trip: ${trip}
Start Date: ${startDate}
Duration: ${duration}
Group Size: ${groupSize}
Accommodation: ${accommodation}
Fitness Level: ${fitnessLevel}

Add-ons: ${addons?.join(", ")}

Notes:
${specialRequests}
    `;

    await resend.emails.send({
      from: "Booking <onboarding@resend.dev>", // change to your domain later
      to: ["namkhagyasto999@gmail.com", "thuptenlama78@gmail.com"], // YOUR EMAIL
      subject: "New Booking Request",
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
