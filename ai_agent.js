let resumeText = "";

// Load resume data on page load
fetch('shobhit_resume_data.txt')
  .then(response => response.text())
  .then(text => { resumeText = text; });

function findRelevantAnswer(question) {
  question = question.toLowerCase();
  // Education
  if (question.includes('education') || question.includes('college') || question.includes('school')) {
    const match = resumeText.match(/Education[\s\S]+?\n\n/);
    return match ? match[0].trim() : "I am currently pursuing B.Tech at VIT Vellore. I completed my schooling at DPS Bhopal.";
  }
  // Skills
  if (question.includes('skills') || question.includes('languages') || question.includes('tech') || question.includes('programming')) {
    const match = resumeText.match(/Technical Skills[\s\S]+?\n\n/);
    return match ? match[0].trim() : "I am skilled in Java, Python, JavaScript, TypeScript, SQL, React, and more.";
  }
  // Projects
  if (question.includes('project') || question.includes('portfolio') || question.includes('work done')) {
    const match = resumeText.match(/Projects[\s\S]+?Leadership/);
    return match ? match[0].trim() : "I have built several projects including a portfolio website, CleanIT app, and Scribl note app. Want to know more?";
  }
  // CleanIT
  if (question.includes('cleanit')) {
    const match = resumeText.match(/CleanIT[\s\S]+?GitHub/);
    return match ? match[0].replace(/GitHub.*/, '').trim() : "CleanIT is a hostel room cleaning service app I built using TypeScript and Expo.";
  }
  // Scribl
  if (question.includes('scribl')) {
    const match = resumeText.match(/Scribl[\s\S]+?GitHub/);
    return match ? match[0].replace(/GitHub.*/, '').trim() : "Scribl is a note-making app I built using JavaScript and React.";
  }
  // Java
  if (question.includes('java')) {
    const match = resumeText.match(/Java[^\n]+/i);
    return match ? match[0] : "Yes, I have experience with Java.";
  }
  // Certificates
  if (question.includes('certificate') || question.includes('certification') || question.includes('internship')) {
    const match = resumeText.match(/Certifications & Courses[\s\S]+?\n\n/);
    return match ? match[0].trim() : "I have completed Microsoft Azure AI-900, Deloitte Data Analytics Simulation, and AWS Solutions Architecture Experience.";
  }
  // Leadership
  if (question.includes('leadership') || question.includes('club') || question.includes('event')) {
    const match = resumeText.match(/Leadership & Extra-Curricular Activities[\s\S]+?Online Presence/);
    return match ? match[0].trim() : "I have held leadership roles in college clubs and events.";
  }
  // Contact
  if (question.includes('contact') || question.includes('email') || question.includes('phone')) {
    return "You can contact me at shouryashobhit1@gmail.com or +91 7477012992.";
  }
  // Default fallback
  return "Sorry, I couldn't find an answer in my resume data. Please ask about my education, skills, projects, or contact info!";
}

// AI Chatbox logic (placeholder for real AI)
const chatForm = document.getElementById('ai-chat-form');
const chatInput = document.getElementById('ai-chat-input');
const chatMessages = document.getElementById('ai-chat-messages');
const chatbox = document.getElementById('ai-chatbox');
const chatTrigger = document.getElementById('ai-chat-trigger');

let closeTimeout = null;

function addMessage(sender, text) {
  const msg = document.createElement('div');
  msg.style.margin = '8px 0';
  msg.innerHTML = `<b style='color:#fabb5d'>${sender}:</b> <span>${text.replace(/\n/g, '<br>')}</span>`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const userMsg = chatInput.value.trim();
  if (!userMsg) return;
  addMessage('You', userMsg);
  chatInput.value = '';
  setTimeout(() => {
    addMessage('AI', findRelevantAnswer(userMsg));
  }, 700);
});

// Section reveal on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('section, .container, .work, .services-list div');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const bottom = el.getBoundingClientRect().bottom;
    if (top < windowHeight - 60 && bottom > 60) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Chatbox show/hide logic with hover and click
function openChatbox() {
  clearTimeout(closeTimeout);
  chatbox.classList.add('active');
}
function closeChatbox() {
  chatbox.classList.remove('active');
}
chatTrigger.addEventListener('mouseenter', openChatbox);
chatTrigger.addEventListener('click', openChatbox);
chatbox.addEventListener('mouseenter', openChatbox);

chatTrigger.addEventListener('mouseleave', () => {
  closeTimeout = setTimeout(closeChatbox, 200);
});
chatbox.addEventListener('mouseleave', () => {
  closeTimeout = setTimeout(closeChatbox, 200);
});

// Hide chatbox when clicking outside
window.addEventListener('mousedown', function(e) {
  if (!chatbox.contains(e.target) && !chatTrigger.contains(e.target)) {
    closeChatbox();
  }
}); 