import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { name, email, eventDate, eventLocation, message } = await request.json();

        // Validate input - only name and email are required
        if (!name || !email) {
            return NextResponse.json(
                { error: "Imię i email są wymagane" },
                { status: 400 }
            );
        }

        // Create transporter with Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: "sforzaquartet@gmail.com",
            replyTo: email,
            subject: `Nowa wiadomość z formularza kontaktowego od ${name}`,
            html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${eventDate ? `<p><strong>Data wydarzenia:</strong> ${eventDate}</p>` : ""}
        ${eventLocation ? `<p><strong>Miejsce wydarzenia:</strong> ${eventLocation}</p>` : ""}
        ${message ? `<p><strong>Wiadomość:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
      `,
            text: `
Nowa wiadomość z formularza kontaktowego

Imię i nazwisko: ${name}
Email: ${email}
${eventDate ? `Data wydarzenia: ${eventDate}` : ""}
${eventLocation ? `Miejsce wydarzenia: ${eventLocation}` : ""}
${message ? `\nWiadomość:\n${message}` : ""}
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json(
            { error: "Nie udało się wysłać wiadomości. Spróbuj ponownie później." },
            { status: 500 }
        );
    }
}
