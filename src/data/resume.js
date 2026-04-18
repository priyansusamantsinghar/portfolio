export const resumeData = {
  name: "Priyanshu Samantsinghar",
  title: "Junior Software Developer",
  email: "priyansusamantsinghar@gmail.com",
  phone: "+91-865-862-3702",
  github: "https://github.com/priyansusamantsinghar",
  linkedin: "https://www.linkedin.com/in/priyansu7781",

  about: `I'm a Computer Science graduate from Siksha 'O' Anusandhan (ITER), Odisha, currently working as a Junior Software Developer at Oasys Tech Solution. I'm passionate about building dynamic, responsive web applications with a strong focus on frontend development using React.js, Next.js, and Tailwind CSS. I also have hands-on experience with MERN stack, NPM package development, API integration, and cloud basics (AWS). I enjoy solving real-world problems with clean, maintainable code.`,

  education: [
    {
      institution: "Siksha 'O' Anusandhan (ITER)",
      degree: "B.Tech in Computer Science & Engineering",
      score: "CGPA: 7.12",
      period: "2021–2025",
      location: "Odisha, India",
    },
    {
      institution: "Mothers Public School (CBSE)",
      degree: "Class XII",
      score: "Percentage: 81.6%",
      period: "2021",
      location: "Bhubaneswar, Odisha",
    },
    {
      institution: "Carmel English Medium School (CBSE)",
      degree: "Class X",
      score: "Percentage: 90%",
      period: "2019",
      location: "Khordha, Odisha",
    },
  ],

  experience: [
    {
      role: "Junior Software Developer",
      company: "Oasys Tech Solution",
      period: "Nov 2025 – Present",
      bullets: [
        "Addressed critical VAPT (Vulnerability Assessment and Penetration Testing) issues, significantly improving product security and compliance standards.",
        "Authored comprehensive API documentation using Postman, ensuring smooth developer onboarding.",
        "Collaborated on an Admin Dashboard providing detailed visualizations of user activity, system performance, and usage analytics.",
        "Integrated APIs in a Government website and created developer-facing documentation.",
      ],
    },
    {
      role: "Developer Intern",
      company: "Tatwa Technologies",
      period: "January 2025 – May 2025",
      bullets: [
        "Developed a dynamic and responsive web application using React.js, delivering an optimized frontend experience across various devices and screen sizes.",
        "Developed and published modular NPM packages for APIs, forming the basis for developer-friendly JavaScript SDKs, simplifying integration across multiple programming environments.",
      ],
    },
  ],

  skills: {
    Languages: ["Java", "Python", "C", "JavaScript"],
    "Web Development": ["HTML", "CSS", "Node.js", "Express.js", "Tailwind CSS", "React.js", "Next.js"],
    Databases: ["MongoDB", "SQL"],
    Tools: ["VS Code", "Git", "GitHub", "Chrome DevTools", "Postman", "Jira"],
    "AI Tools": ["Claude AI", "ChatGPT", "Cursor AI"],
    Cloud: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS IAM (Basics)"],
  },

  projects: [
    {
      name: "Event Management System",
      tech: "MERN Stack",
      period: "April 2025",
      description:
        "Developed a web-based Event Management System enabling users to book, manage, and view event tickets. Features user authentication, ticket generation, and QR code integration. Designed and implemented responsive UI using Tailwind CSS and Vite for optimized performance.",
    },
    {
      name: "Mail Client",
      tech: "JavaScript, React.js, Redux Toolkit, .NET",
      period: "Mar 2025",
      description:
        "Designed and developed a collaborative email management system with advanced features to enhance productivity and streamline communication. Automated email notifications to efficiently update attendees on event changes and announcements.",
    },
  ],

  certifications: [
    "Problem Solving (Basic), Java (Basic), Python (Basic) – HackerRank",
    "AMCAT Certified Data Processing Specialist – SHL",
    "AMCAT Certified Software Development Trainee – SHL",
  ],
};

export const RESUME_CONTEXT = `
You are Priyanshu Samantsinghar's personal portfolio assistant. You know everything about Priyanshu from his resume. Answer questions about him in first person or third person depending on context. Be concise, friendly, and professional.

Here is Priyanshu's complete profile:

NAME: Priyanshu Samantsinghar
TITLE: Junior Software Developer
EMAIL: priyansusamantsinghar@gmail.com
PHONE: +91-865-862-3702
GITHUB: https://github.com/priyansusamantsinghar
LINKEDIN: https://www.linkedin.com/in/priyansu7781

EDUCATION:
- B.Tech Computer Science & Engineering from Siksha 'O' Anusandhan (ITER), 2021–2025, CGPA: 7.12
- Class XII from Mothers Public School (CBSE), 2021, Bhubaneswar — 81.6%
- Class X from Carmel English Medium School (CBSE), 2019, Khordha — 90%

WORK EXPERIENCE:
1. Junior Software Developer at Oasys Tech Solution (Nov 2025–Present)
   - Addressed VAPT issues improving security and compliance
   - Wrote comprehensive API documentation using Postman
   - Built Admin Dashboard with user activity, system performance, and usage analytics visualizations
   - Integrated APIs into Government website and wrote developer docs

2. Developer Intern at Tatwa Technologies (January 2025–May 2025)
   - Built dynamic responsive React.js web application
   - Developed and published modular NPM packages for APIs and JavaScript SDKs

SKILLS:
- Languages: Java, Python, C, JavaScript
- Web Dev: HTML, CSS, Node.js, Express.js, Tailwind CSS, React.js, Next.js
- Databases: MongoDB, SQL
- Tools: VS Code, Git, GitHub, Chrome DevTools, Postman, Jira
- AI Tools: Claude AI, ChatGPT, Cursor AI
- Cloud: AWS (EC2, S3, Lambda, IAM – Basics)

PROJECTS:
1. Event Management System (MERN, April 2025) — Booking, ticket generation, QR code, user auth, Tailwind CSS + Vite
2. Mail Client (React.js, Redux Toolkit, .NET, Mar 2025) — Collaborative email management, automated notifications

CERTIFICATIONS:
- Problem Solving, Java, Python (Basic) – HackerRank
- AMCAT Certified Data Processing Specialist – SHL
- AMCAT Certified Software Development Trainee – SHL

Answer ONLY questions about Priyanshu. If asked something unrelated, politely redirect to topics about his profile, skills, or experience. Keep answers concise (2–4 sentences max unless more detail is requested).
`;
