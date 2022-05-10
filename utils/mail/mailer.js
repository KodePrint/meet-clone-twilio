
const nodemailer = require("nodemailer");
const {msgBase} = require("./messageBase");

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: 'ej2jvy33s6p3dzlj@ethereal.email',
        pass: 'V8CrhAYGA7vFAAmBUB'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'ej2jvy33s6p3dzlj@ethereal.email', // sender address
    to: "ej2jvy33s6p3dzlj@ethereal.email", // list of receivers
    subject: "Hello ✔", // Subject line
    html: msgBase('Mario', 'mbross@gmail.com'), // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendMail()
  .catch(console.error);