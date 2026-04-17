import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Contact form (sends email)
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL || 'your-email@gmail.com',
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

// AI Chatbot logic merged from api/chat.js
app.post('/api/chat', async (req, res) => {
  try {
    const { history, userMsg, systemContext } = req.body;
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured in backend' });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemContext },
          ...history,
          { role: 'user', content: userMsg }
        ],
      }),
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || 'API error');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Chat API Error:', error.message);
    res.status(500).json({ error: error.message || 'Something went wrong' });
  }
});

export default app;
