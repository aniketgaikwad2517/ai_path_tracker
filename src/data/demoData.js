// Demo users for demonstration
export const demoUsers = [
  {
    id: 'demo_1',
    name: 'Alex Rivera',
    email: 'alex@demo.com',
    password: 'demo123',
    onboarded: true,
    education: 'Bachelor\'s Degree',
    skills: ['JavaScript', 'HTML/CSS', 'React'],
    interests: ['Web Development', 'AI/ML'],
    careerGoal: 'Full-Stack Developer',
    createdAt: '2025-11-15T10:00:00Z'
  },
  {
    id: 'demo_2',
    name: 'Priya Sharma',
    email: 'priya@demo.com',
    password: 'demo123',
    onboarded: true,
    education: 'Master\'s Degree',
    skills: ['Python', 'Statistics', 'SQL'],
    interests: ['Data Science', 'Machine Learning'],
    careerGoal: 'Data Scientist',
    createdAt: '2025-12-01T10:00:00Z'
  },
  {
    id: 'demo_3',
    name: 'Jordan Chen',
    email: 'jordan@demo.com',
    password: 'demo123',
    onboarded: true,
    education: 'High School',
    skills: ['Figma', 'Photoshop'],
    interests: ['UI/UX Design', 'Product Design'],
    careerGoal: 'UX Designer',
    createdAt: '2026-01-10T10:00:00Z'
  }
]

// Demo progress for each user
export const demoProgress = {
  demo_1: {
    totalSkills: 24,
    completedSkills: 14,
    percentage: 58,
    streak: 12,
    lastUpdated: '2026-04-14T08:30:00Z'
  },
  demo_2: {
    totalSkills: 20,
    completedSkills: 8,
    percentage: 40,
    streak: 7,
    lastUpdated: '2026-04-13T15:00:00Z'
  },
  demo_3: {
    totalSkills: 18,
    completedSkills: 5,
    percentage: 28,
    streak: 3,
    lastUpdated: '2026-04-14T12:00:00Z'
  }
}

// Career roadmap definitions
const careerRoadmaps = {
  'Full-Stack Developer': {
    title: 'Full-Stack Developer Roadmap',
    description: 'Master both frontend and backend to build complete web applications.',
    phases: [
      {
        title: 'Foundations',
        level: 'beginner',
        description: 'Build a strong foundation with core web technologies.',
        skills: [
          { name: 'HTML5 & Semantic Markup', completed: true },
          { name: 'CSS3 & Flexbox/Grid', completed: true },
          { name: 'JavaScript ES6+', completed: true },
          { name: 'Git & Version Control', completed: true },
          { name: 'Command Line Basics', completed: true },
          { name: 'Responsive Design', completed: true }
        ],
        resources: [
          { title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
          { title: 'freeCodeCamp', url: 'https://freecodecamp.org' }
        ]
      },
      {
        title: 'Frontend Mastery',
        level: 'intermediate',
        description: 'Master modern frontend frameworks and tooling.',
        skills: [
          { name: 'React.js', completed: true },
          { name: 'State Management (Redux/Context)', completed: true },
          { name: 'TypeScript', completed: false },
          { name: 'Testing (Jest/Vitest)', completed: false },
          { name: 'CSS-in-JS / Tailwind', completed: true },
          { name: 'Build Tools (Vite/Webpack)', completed: false }
        ],
        resources: [
          { title: 'React Documentation', url: 'https://react.dev' },
          { title: 'TypeScript Handbook', url: 'https://typescriptlang.org' }
        ]
      },
      {
        title: 'Backend Development',
        level: 'intermediate',
        description: 'Learn server-side programming and databases.',
        skills: [
          { name: 'Node.js & Express', completed: true },
          { name: 'RESTful API Design', completed: true },
          { name: 'PostgreSQL / MongoDB', completed: false },
          { name: 'Authentication & JWT', completed: false },
          { name: 'API Security', completed: false },
          { name: 'GraphQL Basics', completed: false }
        ],
        resources: [
          { title: 'Node.js Documentation', url: 'https://nodejs.org' },
          { title: 'Express.js Guide', url: 'https://expressjs.com' }
        ]
      },
      {
        title: 'Advanced & DevOps',
        level: 'advanced',
        description: 'Deploy, scale, and optimize complete applications.',
        skills: [
          { name: 'Docker & Containers', completed: false },
          { name: 'CI/CD Pipelines', completed: false },
          { name: 'Cloud (AWS/GCP/Azure)', completed: false },
          { name: 'Performance Optimization', completed: false },
          { name: 'System Design', completed: false },
          { name: 'Microservices Architecture', completed: false }
        ],
        resources: [
          { title: 'Docker Documentation', url: 'https://docs.docker.com' },
          { title: 'AWS Free Tier', url: 'https://aws.amazon.com/free' }
        ]
      }
    ]
  },
  'Data Scientist': {
    title: 'Data Scientist Roadmap',
    description: 'Master data analysis, machine learning, and AI to extract insights from data.',
    phases: [
      {
        title: 'Foundations',
        level: 'beginner',
        description: 'Core mathematics and programming fundamentals.',
        skills: [
          { name: 'Python Programming', completed: true },
          { name: 'Statistics & Probability', completed: true },
          { name: 'Linear Algebra', completed: true },
          { name: 'SQL Fundamentals', completed: true },
          { name: 'Data Manipulation (Pandas)', completed: true }
        ],
        resources: [
          { title: 'Python.org', url: 'https://python.org' },
          { title: 'Khan Academy Statistics', url: 'https://khanacademy.org' }
        ]
      },
      {
        title: 'Data Analysis & Visualization',
        level: 'intermediate',
        description: 'Turn raw data into meaningful insights.',
        skills: [
          { name: 'Matplotlib & Seaborn', completed: true },
          { name: 'Exploratory Data Analysis', completed: true },
          { name: 'Feature Engineering', completed: false },
          { name: 'Data Cleaning Techniques', completed: true },
          { name: 'Tableau / Power BI', completed: false }
        ],
        resources: [
          { title: 'Kaggle', url: 'https://kaggle.com' },
          { title: 'Towards Data Science', url: 'https://towardsdatascience.com' }
        ]
      },
      {
        title: 'Machine Learning',
        level: 'advanced',
        description: 'Build and train ML models.',
        skills: [
          { name: 'Scikit-learn', completed: false },
          { name: 'Supervised Learning', completed: false },
          { name: 'Unsupervised Learning', completed: false },
          { name: 'Model Evaluation', completed: false },
          { name: 'Deep Learning (TensorFlow/PyTorch)', completed: false }
        ],
        resources: [
          { title: 'Scikit-learn Docs', url: 'https://scikit-learn.org' },
          { title: 'Fast.ai', url: 'https://fast.ai' }
        ]
      },
      {
        title: 'Specialization',
        level: 'expert',
        description: 'Choose your expertise and build production ML systems.',
        skills: [
          { name: 'NLP / Computer Vision', completed: false },
          { name: 'MLOps & Deployment', completed: false },
          { name: 'A/B Testing', completed: false },
          { name: 'Big Data (Spark)', completed: false },
          { name: 'Research Papers & SOTA', completed: false }
        ],
        resources: [
          { title: 'Papers With Code', url: 'https://paperswithcode.com' },
          { title: 'MLflow', url: 'https://mlflow.org' }
        ]
      }
    ]
  },
  'UX Designer': {
    title: 'UX Designer Roadmap',
    description: 'Create beautiful, user-centered digital experiences.',
    phases: [
      {
        title: 'Design Foundations',
        level: 'beginner',
        description: 'Learn core design principles and tools.',
        skills: [
          { name: 'Design Principles', completed: true },
          { name: 'Color Theory & Typography', completed: true },
          { name: 'Figma Basics', completed: true },
          { name: 'Layout & Composition', completed: true },
          { name: 'Icon Design', completed: false }
        ],
        resources: [
          { title: 'Figma Learn', url: 'https://figma.com/resources/learn-design' },
          { title: 'Refactoring UI', url: 'https://refactoringui.com' }
        ]
      },
      {
        title: 'UX Research & Strategy',
        level: 'intermediate',
        description: 'Understand users and create data-driven designs.',
        skills: [
          { name: 'User Research Methods', completed: true },
          { name: 'Personas & User Journeys', completed: false },
          { name: 'Information Architecture', completed: false },
          { name: 'Wireframing', completed: false },
          { name: 'Usability Testing', completed: false }
        ],
        resources: [
          { title: 'Nielsen Norman Group', url: 'https://nngroup.com' },
          { title: 'UX Design Institute', url: 'https://uxdesigninstitute.com' }
        ]
      },
      {
        title: 'UI Design & Prototyping',
        level: 'advanced',
        description: 'Create high-fidelity designs and interactive prototypes.',
        skills: [
          { name: 'Design Systems', completed: false },
          { name: 'High-Fidelity Mockups', completed: false },
          { name: 'Prototyping & Interaction', completed: false },
          { name: 'Motion Design', completed: false }
        ],
        resources: [
          { title: 'Material Design', url: 'https://m3.material.io' },
          { title: 'Framer', url: 'https://framer.com' }
        ]
      },
      {
        title: 'Professional Growth',
        level: 'expert',
        description: 'Build your portfolio and land your dream role.',
        skills: [
          { name: 'Portfolio Building', completed: false },
          { name: 'Design Leadership', completed: false },
          { name: 'Cross-functional Collaboration', completed: false },
          { name: 'Accessibility (WCAG)', completed: false }
        ],
        resources: [
          { title: 'Dribbble', url: 'https://dribbble.com' },
          { title: 'Behance', url: 'https://behance.net' }
        ]
      }
    ]
  }
}

// Fallback generic roadmap
const genericRoadmap = {
  title: 'Career Roadmap',
  description: 'A personalized learning path for your career goals.',
  phases: [
    {
      title: 'Getting Started',
      level: 'beginner',
      description: 'Build foundational knowledge and skills.',
      skills: [
        { name: 'Core Concepts', completed: false },
        { name: 'Basic Tools & Setup', completed: false },
        { name: 'First Hands-on Project', completed: false },
        { name: 'Community & Resources', completed: false }
      ],
      resources: [
        { title: 'Google', url: 'https://google.com' },
        { title: 'YouTube Tutorials', url: 'https://youtube.com' }
      ]
    },
    {
      title: 'Building Skills',
      level: 'intermediate',
      description: 'Develop practical skills and build projects.',
      skills: [
        { name: 'Intermediate Techniques', completed: false },
        { name: 'Real-world Projects', completed: false },
        { name: 'Collaboration Skills', completed: false },
        { name: 'Portfolio Development', completed: false }
      ],
      resources: [
        { title: 'Coursera', url: 'https://coursera.org' },
        { title: 'Udemy', url: 'https://udemy.com' }
      ]
    },
    {
      title: 'Advanced Expertise',
      level: 'advanced',
      description: 'Master advanced concepts and specializations.',
      skills: [
        { name: 'Advanced Topics', completed: false },
        { name: 'Specialization', completed: false },
        { name: 'Mentoring & Leadership', completed: false },
        { name: 'Industry Certification', completed: false }
      ],
      resources: [
        { title: 'LinkedIn Learning', url: 'https://linkedin.com/learning' },
        { title: 'Professional Community', url: 'https://dev.to' }
      ]
    }
  ]
}

export function generateRoadmap(careerGoal) {
  return careerRoadmaps[careerGoal] || {
    ...genericRoadmap,
    title: `${careerGoal} Roadmap`,
    description: `Your personalized learning path to become a ${careerGoal}.`
  }
}

// Chatbot responses
export const chatbotResponses = {
  greetings: [
    "Hello! 👋 I'm your AI Career Guide. I can help you with career advice, learning resources, skill recommendations, and roadmap guidance. What would you like to know?",
    "Hi there! 🌟 Welcome to AI Path Tracker. I'm here to help you navigate your career journey. Ask me anything about career paths, skills, or learning strategies!"
  ],
  career: {
    'full-stack': "**Full-Stack Development** is one of the most in-demand career paths! 🚀\n\nHere's what you need:\n- **Frontend**: HTML, CSS, JavaScript, React/Vue\n- **Backend**: Node.js, Python, or Java\n- **Database**: PostgreSQL, MongoDB\n- **DevOps**: Docker, AWS/GCP\n\n💰 Average salary: $85K-$150K\n📈 Job growth: 25% (much faster than average)\n\nWould you like me to dive deeper into any specific area?",
    'data-science': "**Data Science** is transforming every industry! 📊\n\nKey skills needed:\n- **Programming**: Python, R, SQL\n- **Math**: Statistics, Linear Algebra, Calculus\n- **ML**: Scikit-learn, TensorFlow, PyTorch\n- **Visualization**: Matplotlib, Tableau, Power BI\n\n💰 Average salary: $95K-$165K\n📈 Job growth: 36% (one of the fastest)\n\nWhat aspect of data science interests you most?",
    'ux-design': "**UX Design** is crucial for creating user-centered products! 🎨\n\nEssential skills:\n- **Research**: User interviews, surveys, usability testing\n- **Design**: Figma, Sketch, Adobe XD\n- **Strategy**: Information architecture, user flows\n- **Collaboration**: Working with developers, stakeholders\n\n💰 Average salary: $75K-$130K\n📈 Job growth: 23% (much faster than average)\n\nWant to know more about building your design portfolio?"
  },
  skills: "Here are the **most in-demand tech skills** for 2026:\n\n🔥 **Hot Skills:**\n1. AI/ML Engineering\n2. Cloud Architecture (AWS, GCP, Azure)\n3. Full-Stack Development\n4. Data Engineering\n5. Cybersecurity\n6. DevOps/SRE\n\n📚 **How to learn them:**\n- Start with fundamentals\n- Build projects (not just tutorials)\n- Contribute to open source\n- Get certifications\n- Join communities\n\nWhich skill would you like to explore?",
  motivation: "Here's some career advice to keep you going! 💪\n\n1. **Consistency beats intensity** — 1 hour daily > 10 hours once a week\n2. **Build in public** — Share your progress and projects\n3. **Network actively** — 80% of jobs are found through networking\n4. **Focus on fundamentals** — Frameworks change, principles don't\n5. **Embrace failure** — Every bug is a learning opportunity\n\n🌟 Remember: Every expert was once a beginner. Keep pushing forward!",
  resources: "Here are **top free learning resources** I recommend:\n\n📚 **Courses:**\n- freeCodeCamp (Web Dev)\n- CS50 by Harvard (CS Fundamentals)\n- Google's ML Crash Course\n- The Odin Project (Full-Stack)\n\n🎯 **Practice:**\n- LeetCode (Coding Problems)\n- Kaggle (Data Science)\n- Frontend Mentor (UI Projects)\n- Exercism (Multi-language)\n\n📖 **Reading:**\n- Dev.to & Hashnode (Blogs)\n- HackerNews (Industry News)\n- GitHub Trending (Open Source)\n\nWant me to recommend something specific for your goals?",
  interview: "Here are **interview preparation tips**: 🎯\n\n**Technical Interviews:**\n- Practice data structures & algorithms daily\n- Do mock interviews on Pramp or Interviewing.io\n- Understand system design basics\n- Review your projects thoroughly\n\n**Behavioral Interviews:**\n- Use the STAR method (Situation, Task, Action, Result)\n- Prepare 5-7 stories from your experience\n- Research the company culture\n- Ask thoughtful questions\n\n**Portfolio Tips:**\n- Show 3-5 strong projects\n- Include live demos & source code\n- Write clear READMEs\n- Quantify your impact\n\nGood luck! You've got this! 🚀",
  default: "That's a great question! While I'm designed to help with career guidance, here are my suggestions:\n\n1. **Break your goal into small steps** — Focus on one skill at a time\n2. **Use your roadmap** — Check your personalized path in the Roadmap tab\n3. **Track your progress** — Mark completed skills in the Dashboard\n4. **Stay consistent** — Regular practice is key\n\nTry asking me about:\n- 🗺️ Specific career paths\n- 📚 Learning resources\n- 💡 Skill recommendations\n- 🎯 Interview tips\n- 💪 Motivation & advice"
}

export function getChatResponse(message) {
  const msg = message.toLowerCase()

  if (msg.match(/^(hi|hello|hey|greetings|howdy)/)) {
    return chatbotResponses.greetings[Math.floor(Math.random() * chatbotResponses.greetings.length)]
  }
  if (msg.includes('full-stack') || msg.includes('fullstack') || msg.includes('full stack') || msg.includes('web dev')) {
    return chatbotResponses.career['full-stack']
  }
  if (msg.includes('data sci') || msg.includes('machine learning') || msg.includes('ml') || msg.includes('ai ')) {
    return chatbotResponses.career['data-science']
  }
  if (msg.includes('ux') || msg.includes('ui') || msg.includes('design') || msg.includes('figma')) {
    return chatbotResponses.career['ux-design']
  }
  if (msg.includes('skill') || msg.includes('learn what') || msg.includes('in demand') || msg.includes('trending')) {
    return chatbotResponses.skills
  }
  if (msg.includes('motivat') || msg.includes('advice') || msg.includes('tip') || msg.includes('stuck') || msg.includes('discouraged')) {
    return chatbotResponses.motivation
  }
  if (msg.includes('resource') || msg.includes('course') || msg.includes('where to learn') || msg.includes('free') || msg.includes('tutorial')) {
    return chatbotResponses.resources
  }
  if (msg.includes('interview') || msg.includes('prepare') || msg.includes('portfolio') || msg.includes('resume') || msg.includes('job')) {
    return chatbotResponses.interview
  }

  return chatbotResponses.default
}
