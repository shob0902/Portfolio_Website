# 💼 Personal Portfolio Website with AI Chatbot 🤖

A modern, responsive personal portfolio website with an integrated AI chatbot that provides information about the developer — **Shobhit Shourya**. The AI assistant can answer questions based on your resume content such as education, skills, projects, and contact info.

---

## 🚀 Features

- 🌐 Fully responsive, dark-themed website
- 🧠 Built-in AI chatbot (custom JavaScript logic)
- 📜 Interactive "About Me", "Courses", and "Projects" sections
- 🧰 Tab-based experience, education, and skills showcase
- 🖼️ Scroll-reveal animations for smooth transitions
- 🖱️ AI chatbot auto-reveals on hover or click

---

## 🛠️ Tech Stack

| Component  | Tech Used                          |
|------------|------------------------------------|
| Frontend   | HTML, CSS, JavaScript              |
| Styling    | Custom CSS with responsive layout  |
| AI Chatbot | JavaScript (local logic + fetch from resume) |
| Assets     | Font Awesome, Static Images        |

---

## 🧠 AI Chatbot

The chatbot works without a backend or external AI API. Instead, it:
- Loads and parses a text-based resume (`shobhit_resume_data.txt`)
- Matches user questions with specific resume sections using regex
- Returns preformatted and contextually relevant answers
- Can answer questions like:
  - _"Tell me about your projects"_
  - _"What are your technical skills?"_
  - _"How can I contact you?"_

You can extend it to use OpenAI or Gemini APIs for smarter responses.

---

## 🗂️ Project Structure

│
├── index.html # Main portfolio page
├── shobhitcss.css # All styles for layout and chatbot
├── ai_agent.js # Chatbot logic and scroll animations
├── shobhit_resume_data.txt# Resume data used by chatbot
├── images/ # Portfolio, background, icons

📌 Future Scope
Integrate OpenAI GPT or Gemini Pro for real-time AI answers

Add contact form with backend support

Deploy on Netlify, Vercel, or GitHub Pages

Add analytics to track chatbot usage

👤 About Me
I’m Shobhit Shourya, a passionate software developer blending AI and web development to build useful tools and experiences.

📧 Email: shouryashobhit1@gmail.com
