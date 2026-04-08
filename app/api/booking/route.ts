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

    const { data: emailData, error } = await resend.emails.send({
      from: "info@langtangoutdoorinitiative.com",
      to: "077bct025.namga@sagarmatha.edu.np",
      replyTo: email,
      subject: `New Booking Request from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0;padding:0;background:#f0f4f8;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:40px 0;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

                    <!-- Header -->
                    <tr>
                      <td style="background:#060d14;border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
                        <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#01baf0;">
                          Langtang Outdoor Initiative
                        </p>
                        <h1 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;">
                          New Booking Request
                        </h1>
                        <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.4);">
                          Someone submitted a booking via your website
                        </p>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="background:#ffffff;padding:36px 40px;">

                        <!-- Greeting -->
                        <p style="margin:0 0 24px;font-size:15px;color:#374151;">
                          Hi team, you have a new booking request from <strong>${firstName} ${lastName}</strong>. Here are the details:
                        </p>

                        <!-- Section: Personal Info -->
                        <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Personal Info</p>
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">

                          <tr>
                            <td style="padding:0 0 12px;">
                              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:10px;border:1px solid #e5e7eb;">
                                <tr>
                                  <td style="padding:14px 18px;">
                                    <p style="margin:0 0 2px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Full Name</p>
                                    <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">${firstName} ${lastName}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:0 0 12px;">
                              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:10px;border:1px solid #e5e7eb;">
                                <tr>
                                  <td style="padding:14px 18px;">
                                    <p style="margin:0 0 2px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Email</p>
                                    <p style="margin:0;font-size:15px;font-weight:600;color:#01baf0;">${email}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:0 0 12px;">
                              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:10px;border:1px solid #e5e7eb;">
                                <tr>
                                  <td style="padding:14px 18px;">
                                    <p style="margin:0 0 2px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Phone / WhatsApp</p>
                                    <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">${phone}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:0 0 0;">
                              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:10px;border:1px solid #e5e7eb;">
                                <tr>
                                  <td style="padding:14px 18px;">
                                    <p style="margin:0 0 2px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Country</p>
                                    <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">${country}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                        </table>

                        <!-- Section: Trip Details -->
                        <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Trip Details</p>
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">

                          <tr>
                            <td style="padding:0 0 12px;">
                              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:10px;border:1px solid #e5e7eb;">
                                <tr>
                                  <td style="padding:14px 18px;">
                                    <p style="margin:0 0 2px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Trip</p>
                                    <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">${trip}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:0 0 12px;">
                              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:10px;border:1px solid #e5e7eb;">
                                <tr>
                                  <td style="padding:14px 18px;">
                                    <p style="margin:0 0 2px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Start Date</p>
                                    <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">${startDate}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:0 0 12px;">
                              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:10px;border:1px solid #e5e7eb;">
                                <tr>
                                  <td style="padding:14px 18px;">
                                    <p style="margin:0 0 2px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Duration</p>
                                    <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">${duration}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:0 0 12px;">
                              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:10px;border:1px solid #e5e7eb;">
                                <tr>
                                  <td style="padding:14px 18px;">
                                    <p style="margin:0 0 2px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Group Size</p>
                                    <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">${groupSize}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:0 0 12px;">
                              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:10px;border:1px solid #e5e7eb;">
                                <tr>
                                  <td style="padding:14px 18px;">
                                    <p style="margin:0 0 2px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Accommodation</p>
                                    <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">${accommodation}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:0 0 0;">
                              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:10px;border:1px solid #e5e7eb;">
                                <tr>
                                  <td style="padding:14px 18px;">
                                    <p style="margin:0 0 2px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Fitness Level</p>
                                    <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">${fitnessLevel}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                        </table>

                        ${
                          addons && addons.length > 0
                            ? `
                        <!-- Section: Add-ons -->
                        <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Add-ons</p>
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                          <tr>
                            <td>
                              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:10px;border:1px solid #e5e7eb;">
                                <tr>
                                  <td style="padding:14px 18px;">
                                    <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">${addons.join(
                                      ", "
                                    )}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        `
                            : ""
                        }

                        ${
                          specialRequests
                            ? `
                        <!-- Section: Notes -->
                        <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Notes / Special Requests</p>
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:0;">
                          <tr>
                            <td>
                              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:10px;border:1px solid #e5e7eb;">
                                <tr>
                                  <td style="padding:14px 18px;">
                                    <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;">${specialRequests}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        `
                            : ""
                        }

                        <!-- Reply CTA -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                          <tr>
                            <td align="center">
                              <a href="mailto:${email}"
                                style="display:inline-block;background:#01baf0;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:10px;letter-spacing:0.02em;">
                                Reply to ${firstName}
                              </a>
                            </td>
                          </tr>
                        </table>

                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;border-top:1px solid #e5e7eb;">
                        <p style="margin:0;font-size:11px;color:#9ca3af;">
                          This email was sent from the booking form at
                          <a href="https://langtangoutdoorinitiative.com" style="color:#01baf0;text-decoration:none;">langtangoutdoorinitiative.com</a>
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>

          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    console.log("Email sent:", emailData);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
