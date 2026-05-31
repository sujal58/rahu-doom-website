import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Rahu Doom Website <onboarding@resend.dev>",
      to: ["rahudoom@gmail.com"],
      replyTo: email,
      subject: `New Enquiry from ${name} — Rahu Doom`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #A4161A; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Website Enquiry</h2>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${service || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 12px; background: #fff3f3; border-left: 4px solid #A4161A; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #666;">
                Reply directly to this email to respond to ${name}.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json({ error: error.message, detail: error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Contact form error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
