const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'elaina.robel40@ethereal.email',
            pass: 'TVvjYC5Vng2KWSyYNP'
        }
    });
    const info = await transporter.sendMail({
        from: '"Max Mustermann" <max@mustermann.com>',
        to: 'bar@example.com',
        subject: 'Hello subject',
        html: '<h2>Sending emails with Node.js</h2>'
    });
    res.json(info);
};

const sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'lucas.kienast@yahoo.com', // Change to your recipient
        from: 'lucas.kienast@hotmail.de', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    const info = await sgMail.send(msg);
    res.json(info);
};

module.exports = sendEmail;