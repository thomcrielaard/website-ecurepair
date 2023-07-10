export default async function handler(req, res) {
  const noreply = "noreply@abspompspecialist.nl";
  const pass = "Ln1*8x04w";
  const reply = "info@abspompspecialist.nl";
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
    subject: `Nieuw reparatieverzoek van ${req.body.name}`,
    html: `<p>Merk: ${req.body.brand ?? "Niet opgegeven"}</p>
    <p>Model: ${req.body.model ?? "Niet opgegeven"}</p>
    <p>Type: ${req.body.type ?? "Niet opgegeven"}</p>
    <p>Onderdeelnummer: ${req.body.number ?? "Niet opgegeven"}</p>
    <p>Kenteken: ${req.body.license ?? "Niet opgegeven"}</p>
    <p>Fout / Foutcode: ${req.body.errorcode}</p>
    <p>Omschrijving klacht / Overige opmerkingen: ${
      req.body.description ?? "Niet opgegeven"
    }</p>
    <p>Naam: ${req.body.name}</p>
    <p>Contactpersoon: ${req.body.contactperson ?? "Niet opgegeven"}</p>
    <p>E-mail: ${req.body.email}</p>
    <p>Telefoonnummer: ${req.body.phone ?? "Niet opgegeven"}</p>
    <p>BTW nummer: ${req.body.btw ?? "Niet opgegeven"}</p>
    `,
  };

  const acknowledgeMailData = {
    from: noreply,
    replyTo: reply,
    to: req.body.email,
    subject: `Bericht verzonden`,
    html: `<p>Je reparatieverzoek is verzonden! De details zijn als volgt:</p>
    <p>Merk: ${req.body.brand ?? "Niet opgegeven"}</p>
    <p>Model: ${req.body.model ?? "Niet opgegeven"}</p>
    <p>Type: ${req.body.type ?? "Niet opgegeven"}</p>
    <p>Onderdeelnummer: ${req.body.number ?? "Niet opgegeven"}</p>
    <p>Kenteken: ${req.body.license ?? "Niet opgegeven"}</p>
    <p>Fout / Foutcode: ${req.body.errorcode}</p>
    <p>Omschrijving klacht / Overige opmerkingen: ${
      req.body.description ?? "Niet opgegeven"
    }</p>
    <p>Naam: ${req.body.name}</p>
    <p>Contactpersoon: ${req.body.contactperson ?? "Niet opgegeven"}</p>
    <p>E-mail: ${req.body.email}</p>
    <p>Telefoonnummer: ${req.body.phone ?? "Niet opgegeven"}</p>
    <p>BTW nummer: ${req.body.btw ?? "Niet opgegeven"}</p>
    `,
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
