import { useData } from '../contexts/DataContext'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck, FiExternalLink } from 'react-icons/fi'
import { HiOutlineBookOpen } from 'react-icons/hi2'

export default function Roadmap() {
  const { user } = useAuth()
  const { roadmap, toggleSkillComplete } = useData()

  if (!roadmap) {
    return (
      <div className="roadmap-page page-wrapper">
        <div className="roadmap-container">
          <div className="empty-state">
            <div className="empty-icon">🗺️</div>
            <h3>No Roadmap Yet</h3>
            <p>Complete your onboarding to get a personalized career roadmap.</p>
            <Link to="/onboarding" className="btn btn-primary">
              Setup Now <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="roadmap-page page-wrapper">
      <div className="roadmap-container">
        <div className="roadmap-header">
          <h1 className="gradient-text">{roadmap.title}</h1>
          <p>{roadmap.description}</p>
        </div>

        <div className="roadmap-timeline">
          {roadmap.phases.map((phase, pi) => {
            const completedCount = phase.skills.filter(s => s.completed).length
            const total = phase.skills.length
            const isAllDone = completedCount === total
            const hasProgress = completedCount > 0 && !isAllDone

            return (
              <div className="roadmap-phase" key={pi}>
                <div className={`phase-dot ${isAllDone ? 'completed' : ''} ${hasProgress ? 'current' : ''}`} />
                <div className="phase-card">
                  <div className="phase-level-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <span className={`phase-level ${phase.level}`}>{phase.level}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {completedCount}/{total} completed
                    </span>
                  </div>

                  <h3>{phase.title}</h3>
                  <p className="phase-desc">{phase.description}</p>

                  <div className="phase-skills">
                    {phase.skills.map((skill, si) => (
                      <span
                        key={si}
                        className={`phase-skill-tag ${skill.completed ? 'completed' : ''}`}
                        onClick={() => toggleSkillComplete(pi, si)}
                        style={{ cursor: 'pointer' }}
                        title={skill.completed ? 'Click to unmark' : 'Click to mark as completed'}
                      >
                        {skill.completed && <FiCheck style={{ marginRight: '4px' }} />}
                        {skill.name}
                      </span>
                    ))}
                  </div>

                  {phase.resources && phase.resources.length > 0 && (
                    <div className="phase-resources">
                      <h4><HiOutlineBookOpen style={{ marginRight: '4px' }} /> Recommended Resources</h4>
                      {phase.resources.map((r, ri) => (
                        <a
                          key={ri}
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resource-link"
                        >
                          <FiExternalLink /> {r.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Completion state */}
        {roadmap.phases.every(p => p.skills.every(s => s.completed)) && (
          <div className="card" style={{ textAlign: 'center', padding: '48px', marginTop: '32px', background: 'var(--gradient-primary)', color: '#fff', borderRadius: 'var(--radius-xl)' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>🎉 Congratulations!</h2>
            <p style={{ opacity: 0.9, marginBottom: '24px' }}>You've completed your entire roadmap! Time to land that dream role.</p>
            <Link to="/chatbot" className="btn btn-accent">
              Get Interview Tips <FiArrowRight />
            </Link>
          </div>
        )}

        <footer className="footer">
          <p>Click on any skill tag to toggle its completion status.</p>
        </footer>
      </div>
    </div>
  )
}
