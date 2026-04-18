import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

// Flexible routing for Vercel rewrites
const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running', time: new Date().toISOString() });
});

// Contact form (sends email)
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Contact request from: ${email}`);
  
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
      to: process.env.RECEIVER_EMAIL || 'priyansusamantsinghar@gmail.com',
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email Error:', error.message);
    res.status(500).json({ success: false, error: error.message || 'Failed to send email' });
  }
});

// AI Chatbot logic
router.post('/chat', async (req, res) => {
  const { history, userMsg, systemContext } = req.body;
  const apiKey = process.env.GROQ_API_KEY;

  console.log('Chat request received. API Key configured:', !!apiKey);

  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY is not configured in Vercel environment variables.' });
  }

  try {
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

    const data = await response.json();

    if (!response.ok) {
        console.error('Groq API Error Detail:', data);
        return res.status(response.status).json({ 
            error: data.error?.message || `Groq specialized error: ${response.status}` 
        });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Core Chat API Error:', error.message);
    res.status(500).json({ error: `Server Internal Error: ${error.message}` });
  }
});

// Mount the router at both /api and root as Vercel can pass either depending on rewrites
app.use('/api', router);
app.use('/', router);

export default app;
