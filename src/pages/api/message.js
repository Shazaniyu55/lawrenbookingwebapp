import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config(); // Load environment variables from .env file

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {fullName, email, message, phone, city , } = req.body;
        //console.log(fullName, email, message, phone, city)
      // Create a transporter for sending the email
       // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      // Specify your email service provider
      service: 'Gmail', // e.g., 'gmail', 'hotmail', etc.
      auth: {
          user: 'shazaniyu@gmail.com', // Your email address
          pass: 'qkyfkijphqdixilh' // Your email password
      },
      tls:{
          rejectUnauthorized:false
      }
  });


  let mailOptionsRecipient = {
      from: 'shaazaniyu@gmail.com',
      to: email,
      subject: 'Thank you for contacting us!',
      text: `Dear ${fullName},\n\nWe received your email request! Someone from our team will get back to you as soon as possible.

      Our Customer Support Team is available every day from 8 AM until 8 PM.\n\nBest regards,\nThe Fabian Family Team`
  };

  let mailOptions = {
      from: 'shaazaniyu@gmail.com', // Sender address
      to: ' shazaniyu@gmail.com , lawrencefabian297@yahoo.com', // List of recipients
      subject: 'Lawrencegebäudereinigung Family ', // Subject line
      // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
      // HTML body with a picture and CSS styles
      html: `
          <style>
              /* CSS styles */
              body {
                  font-family: Arial, sans-serif;
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  border: 1px solid #ccc;
                  border-radius: 5px;
              }
              
          </style>
          <div class="container">
              <p>Name: ${fullName}</p>
              <p>Email: ${email}</p>
              <p>Phone: ${phone}</p>
              <p>City: ${city}</p>
              <p>Message: ${message}</p>
          </div>
      `
  };
  

   // Send email to recipient
   transporter.sendMail(mailOptionsRecipient, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Recipient message sent: %s', info.messageId);
  });

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      res.send(`    
      Email sent successfully!`);
  });

    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}