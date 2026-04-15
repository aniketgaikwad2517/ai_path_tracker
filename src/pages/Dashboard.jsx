import { useAuth } from '../contexts/AuthContext'
import { useData } from '../contexts/DataContext'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { HiOutlineSparkles, HiOutlineAcademicCap, HiOutlineFire, HiOutlineCheckCircle, HiOutlineChartBar, HiOutlineClipboardDocumentCheck } from 'react-icons/hi2'
import { FiArrowRight, FiCheck } from 'react-icons/fi'

export default function Dashboard() {
  const { user } = useAuth()
  const { progress, roadmap, weeklyData, toggleSkillComplete } = useData()

  if (!roadmap || !progress) {
    return (
      <div className="dashboard-page page-wrapper">
        <div className="dashboard-container">
          <div className="empty-state">
            <div className="empty-icon">🗺️</div>
            <h3>No Roadmap Yet</h3>
            <p>Complete your onboarding to get a personalized career roadmap.</p>
            <Link to="/onboarding" className="btn btn-primary">
              Start Onboarding <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Get current phase skills for checklist
  const currentPhaseIndex = roadmap.phases.findIndex(p =>
    p.skills.some(s => !s.completed)
  )
  const currentPhase = roadmap.phases[currentPhaseIndex >= 0 ? currentPhaseIndex : 0]

  // Per-phase progress
  const phaseProgress = roadmap.phases.map(p => ({
    name: p.title,
    progress: Math.round(
      (p.skills.filter(s => s.completed).length / p.skills.length) * 100
    )
  }))

  const circumference = 2 * Math.PI * 75

  return (
    <div className="dashboard-page page-wrapper">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <h1>Welcome back, <span className="gradient-text">{user.name?.split(' ')[0]}</span> 👋</h1>
          <p>Here's your career progress overview for <strong>{user.careerGoal}</strong>.</p>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon purple"><HiOutlineCheckCircle /></div>
            <div className="stat-info">
              <h3>{progress.completedSkills}/{progress.totalSkills}</h3>
              <p>Skills Completed</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon teal"><HiOutlineChartBar /></div>
            <div className="stat-info">
              <h3>{progress.percentage}%</h3>
              <p>Overall Progress</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon green"><HiOutlineFire /></div>
            <div className="stat-info">
              <h3>{progress.streak}</h3>
              <p>Day Streak 🔥</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon yellow"><HiOutlineAcademicCap /></div>
            <div className="stat-info">
              <h3>{roadmap.phases.length}</h3>
              <p>Learning Phases</p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="dashboard-grid">
          {/* Progress Ring */}
          <div className="dashboard-card">
            <h3><span className="icon"><HiOutlineSparkles /></span> Overall Progress</h3>
            <div className="progress-ring-wrapper">
              <div className="progress-ring">
                <svg width="180" height="180" viewBox="0 0 180 180">
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6C5CE7" />
                      <stop offset="100%" stopColor="#00CEC9" />
                    </linearGradient>
                  </defs>
                  <circle className="bg" cx="90" cy="90" r="75" />
                  <circle
                    className="fg"
                    cx="90"
                    cy="90"
                    r="75"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - (circumference * progress.percentage) / 100}
                  />
                </svg>
                <div className="center-text">
                  <span className="percentage">{progress.percentage}%</span>
                  <span className="label">Complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Progress Bars */}
          <div className="dashboard-card">
            <h3><span className="icon"><HiOutlineChartBar /></span> Phase Progress</h3>
            <div className="skill-progress-list">
              {phaseProgress.map((p, i) => (
                <div className="skill-progress-item" key={i}>
                  <div className="skill-progress-header">
                    <span className="skill-name">{p.name}</span>
                    <span className="skill-pct">{p.progress}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-bar-fill ${i % 2 === 1 ? 'accent' : ''}`}
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Activity Chart */}
        <div className="dashboard-card" style={{ marginBottom: '24px' }}>
          <h3><span className="icon"><HiOutlineChartBar /></span> Weekly Activity</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyData} barSize={32}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="day" stroke="var(--text-muted)" fontSize={13} />
                <YAxis stroke="var(--text-muted)" fontSize={13} />
                <Tooltip
                  contentStyle={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    boxShadow: 'var(--shadow-md)'
                  }}
                  labelStyle={{ color: 'var(--text-primary)', fontWeight: 600 }}
                />
                <Bar
                  dataKey="tasks"
                  fill="url(#barGradient)"
                  radius={[6, 6, 0, 0]}
                  name="Tasks Completed"
                />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6C5CE7" />
                    <stop offset="100%" stopColor="#A29BFE" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Current Phase Checklist */}
        {currentPhase && (
          <div className="checklist-section">
            <h3>
              <HiOutlineClipboardDocumentCheck style={{ color: 'var(--primary)' }} />
              Current Tasks — {currentPhase.title}
            </h3>
            <div className="checklist-items">
              {currentPhase.skills.map((skill, si) => (
                <div
                  key={si}
                  className={`checklist-item ${skill.completed ? 'completed' : ''}`}
                  onClick={() => toggleSkillComplete(currentPhaseIndex >= 0 ? currentPhaseIndex : 0, si)}
                >
                  <div className="checklist-checkbox">
                    {skill.completed && <FiCheck />}
                  </div>
                  <span className="checklist-text">{skill.name}</span>
                  {skill.completed && (
                    <span className="checklist-date" style={{ color: 'var(--success)' }}>✓ Done</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View Full Roadmap */}
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <Link to="/roadmap" className="btn btn-secondary">
            View Full Roadmap <FiArrowRight />
          </Link>
        </div>

        <footer className="footer">
          <p>© 2026 AI Path Tracker. Keep learning, keep growing. 🚀</p>
        </footer>
      </div>
    </div>
  )
}
