import mailer from "nodemailer"
import { Credentials } from "../api/send-email/route";
import dotenv from "dotenv"

dotenv.config();

export async function sendMail(data: Credentials){
  const transporter = mailer.createTransport({
    host: "smtp.mail.ovh.net",
    port: 465,
    secure: true, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: `"${data.firstname} ${data.lastname}" <${data.email}>`,
      to: process.env.EMAIL,
      subject: "NOUVELLE DEMANDE",
      text: `Message de ${data.firstname} ${data.lastname} :\n\n${data.message}\n\nEmail : ${data.email}\nPlan : ${data.plan}`
    });

    console.log("Mail envoyé !");
  } catch (err) {
    console.error("Erreur d'envoi :", err);
  }
}