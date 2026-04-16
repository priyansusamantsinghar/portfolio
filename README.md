# Priyanshu Samantsinghar — Portfolio

A modern developer portfolio built with **React 19** + **Tailwind CSS 4**, featuring an AI chatbot powered by the Anthropic API.

## ✨ Features

- **Hero** — Typing animation, GitHub & LinkedIn links, quick stats card
- **Experience** — Timeline layout with role details
- **Skills** — Categorized skill badges with color coding
- **Projects** — Project cards with tech stack tags
- **Contact** — Email + social links
- **AI Chatbot** — Ask anything about Priyanshu, powered by Claude

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

## 🤖 Setting Up the AI Chatbot

The chatbot uses the **Anthropic Claude API** directly from the browser.

1. Get your API key from [console.anthropic.com](https://console.anthropic.com)
2. Open the portfolio and click the **chat bubble** (bottom right) or **"Ask AI →"** button
3. Click the **🔑 key icon** in the chat header
4. Paste your API key and click **Save**

The key is stored in `localStorage` so you only need to do this once.

> **Note:** For production, move the API call to a backend to keep your key secure.

## 🛠 Tech Stack

- **React 19** — Latest React with concurrent features
- **Tailwind CSS 4** — Utility-first CSS with `@tailwindcss/vite`
- **Vite 6** — Lightning fast build tool
- **Anthropic Claude API** — Powers the AI chatbot

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Chatbot.jsx
├── data/
│   └── resume.js        ← All your data lives here
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Customization

All personal data is in `src/data/resume.js`. Update:
- `resumeData` — your info, experience, skills, projects
- `RESUME_CONTEXT` — the prompt given to the AI chatbot

---

Built by Priyanshu Samantsinghar
