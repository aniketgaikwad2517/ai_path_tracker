import { Link } from 'react-router-dom'
import { HiOutlineSparkles, HiOutlineAcademicCap, HiOutlineChartBar, HiOutlineChatBubbleLeftRight, HiOutlineCheckCircle, HiOutlineShieldCheck } from 'react-icons/hi2'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const features = [
  {
    icon: <HiOutlineAcademicCap />,
    title: 'Personalized Roadmaps',
    desc: 'Get an AI-generated career path tailored to your skills, interests, and goals.'
  },
  {
    icon: <HiOutlineChartBar />,
    title: 'Progress Tracking',
    desc: 'Visual dashboards showing your skills progress, streaks, and achievements.'
  },
  {
    icon: <HiOutlineChatBubbleLeftRight />,
    title: 'AI Career Coach',
    desc: 'Chat with an AI assistant for career advice, resources, and interview tips.'
  },
  {
    icon: <HiOutlineCheckCircle />,
    title: 'Skill Checklists',
    desc: 'Track daily and weekly learning goals with interactive checklists.'
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Secure & Private',
    desc: 'Your career data is securely stored and never shared with third parties.'
  },
  {
    icon: <HiOutlineSparkles />,
    title: 'Smart Suggestions',
    desc: 'AI-powered recommendations for courses, projects, and next steps.'
  }
]

export default function Landing() {
  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <HiOutlineSparkles /> AI-Powered Career Guidance
          </div>
          <h1>
            Navigate Your<br/>
            <span className="gradient-text">Career Path</span> with AI
          </h1>
          <p>
            Get personalized roadmaps, track your skills, and chat with an AI career
            coach — all in one beautiful platform designed for your success.
          </p>
          <div className="hero-actions">
            <Link to="/signup" className="btn btn-primary btn-lg">
              Start Free <FiArrowRight />
            </Link>
            <Link to="/login" className="btn btn-secondary btn-lg">
              <FiPlay /> Demo Login
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="number">10K+</div>
              <div className="label">Users Guided</div>
            </div>
            <div className="hero-stat">
              <div className="number">50+</div>
              <div className="label">Career Paths</div>
            </div>
            <div className="hero-stat">
              <div className="number">95%</div>
              <div className="label">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="section-header">
          <h2>Everything You Need to <span className="gradient-text">Succeed</span></h2>
          <p>Powerful tools designed to accelerate your career growth and keep you on track.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-card">
          <h2>Ready to Accelerate Your Career?</h2>
          <p>Join thousands of professionals building their dream careers with AI guidance.</p>
          <Link to="/signup" className="btn btn-accent btn-lg">
            Get Started for Free <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Demo credentials hint */}
      <section style={{ textAlign: 'center', padding: '0 24px 60px' }}>
        <div className="card" style={{ maxWidth: '500px', margin: '0 auto', background: 'var(--bg-card)' }}>
          <h3 style={{ marginBottom: '12px', fontSize: '1rem' }}>🔑 Demo Credentials</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            <strong>Alex (Full-Stack):</strong> alex@demo.com / demo123<br/>
            <strong>Priya (Data Science):</strong> priya@demo.com / demo123<br/>
            <strong>Jordan (UX Design):</strong> jordan@demo.com / demo123
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 AI Path Tracker. Built with ❤️ and AI.</p>
      </footer>
    </div>
  )
}
