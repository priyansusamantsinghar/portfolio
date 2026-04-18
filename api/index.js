import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import fetch from 'node-fetch';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();

// Trust proxy for Vercel deployment (so rate limiter gets correct IP)
app.set('trust proxy', 1);

// Security Middlewares
app.use(helmet()); 

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 50 requests per windowMs
  message: { error: 'Too many requests from this IP, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiter to all routes
app.use(limiter);

app.use(cors());
app.use(express.json());

// Request logger for Vercel Debugging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Flexible routing for Vercel rewrites
const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running', time: new Date().toISOString() });
});

// Contact form (sends email)
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  console.log(`[CONTACT] Message from ${name} (${email})`);
  
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    console.error('[CONTACT] Email configuration missing (EMAIL_USER or EMAIL_PASS)');
    return res.status(500).json({ 
      success: false, 
      error: 'Server email configuration is missing. Please set EMAIL_USER and EMAIL_PASS.' 
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass }
    });

    const mailOptions = {
      from: user, // Best practice to send from the authenticated user
      to: process.env.RECEIVER_EMAIL || 'priyansusamantsinghar@gmail.com',
      replyTo: email, // Set the sender's email as replyTo
      subject: `Portfolio Contact: ${name}`,
      text: `You have a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #7c3aed;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('[CONTACT] Email sent successfully');
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('[CONTACT] Detailed Error:', error);
    res.status(500).json({ success: false, error: 'Failed to send email. Ensure App Password is used for Gmail.' });
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

// Error handler for all other routes starting with /api
app.use('/api/*', (req, res) => {
  res.status(404).json({ 
    error: 'API Endpoint Not Found', 
    path: req.originalUrl,
    message: 'Ensure you are calling a valid endpoint such as /api/chat or /api/contact' 
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('SERVER ERROR:', err);
  res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

export default app;
