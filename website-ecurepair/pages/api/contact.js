export default async function handler(req, res) {
  const noreply = "noreply@ecurepair.nl";
  const pass = "K55x7%6pm";
  const reply = "t.a.crielaard@gmail.com";
  const SMTPHost = "65.108.41.135";
  const SMTPPort = 465;

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: SMTPHost,
    port: SMTPPort,
    secure: true,
    auth: {
      user: noreply,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: "SSLv3",
    },
  });

  const mailData = {
    from: noreply,
    replyTo: req.body.email,
    to: reply,
    subject: `Nieuw bericht van ${req.body.name}: ${req.body.subject}`,
    html: `<p>Naam: ${req.body.name}</p><p>E-mail: ${
      req.body.email
    }</p><p>Telefoonnummer: ${
      req.body.tel ?? "Niet opgegeven"
    }</p><p>Onderwerp: ${req.body.subject}</p><p>Bericht: ${req.body.text}</p>`,
  };

  const acknowledgeMailData = {
    from: noreply,
    replyTo: reply,
    to: req.body.email,
    subject: `Bericht verzonden`,
    html: `<p>Naam: ${req.body.name}</p><p>E-mail: ${
      req.body.email
    }</p><p>Telefoonnummer: ${
      req.body.tel ?? "Niet opgegeven"
    }</p><p>Onderwerp: ${req.body.subject}</p><p>Bericht: ${req.body.text}</p>`,
  };

  try {
    await transporter.sendMail(mailData);
    await transporter.sendMail(acknowledgeMailData);
    res.status(201).json({ data: "Je bericht is verzonden!" });
  } catch (err) {
    console.log(err);
    res.status(201).json({ data: "Er is een fout opgetreden." });
  }
}
