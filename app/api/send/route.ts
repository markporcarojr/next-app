import WelcomeTemplate from "../../../emails";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const { data, error } = await resend.emails.send({
    from: "Mark <mark@apiary-tool.com>",
    to: "markporcarojr@gmail.com",
    subject: "Resend Test Email",
    react: WelcomeTemplate({ name: "Mark" }),
  });

  if (error) {
    return NextResponse.json(error);
  }
  return NextResponse.json({ data });
}
