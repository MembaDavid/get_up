// app/api/contact/route.ts
import { ContactEmail } from "@/components/email_template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {username, email, message}= await request.json();
    

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // must be verified in Resend
      to: ["davidmemba2@gmail.com"], // your receiving email
      subject: "New Contact Form Message",
    //   react: ContactEmail({name: username, emails: email, messages: message}), // use your email template component
        text: `New message from: \n ${username} \n (${email}):\n\n${message}`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
