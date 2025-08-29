import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {  
        user: process.env.GOOGLE_LOGIN, 
        pass: process.env.GOOGLE_APP_PASSWORD }
});

await transporter.verify();
console.log("Server is ready!");

app.post("/send",async(req, res)=> {
    try { 
        const { email, subject, message } = req.body;
    await transporter.sendMail({
        from: `"Filipino Food Finder Submission" <${process.env.GOOGLE_LOGIN}>`,
        to: process.env.GOOGLE_LOGIN,
        replyTo: email,
        subject,
        text: message,
    });
    res.json({success: true}); }
    catch (err) {
        console.error("Error sending message:", err);
}});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));