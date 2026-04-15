import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useData } from '../contexts/DataContext'
import { FiArrowRight, FiArrowLeft, FiCheck } from 'react-icons/fi'

const educationLevels = [
  { label: 'High School', icon: '🎒' },
  { label: "Bachelor's Degree", icon: '🎓' },
  { label: "Master's Degree", icon: '📚' },
  { label: 'PhD', icon: '🔬' },
  { label: 'Self-Taught', icon: '💻' },
  { label: 'Bootcamp', icon: '⚡' }
]

const skillOptions = [
  'JavaScript', 'Python', 'React', 'Node.js', 'HTML/CSS',
  'TypeScript', 'SQL', 'Java', 'C++', 'Figma',
  'Git', 'Docker', 'AWS', 'Machine Learning', 'Data Analysis',
  'UI/UX Design', 'Photoshop', 'Statistics', 'Communication', 'Leadership'
]

const interestOptions = [
  { label: 'Web Development', icon: '🌐' },
  { label: 'Mobile Apps', icon: '📱' },
  { label: 'AI/ML', icon: '🤖' },
  { label: 'Data Science', icon: '📊' },
  { label: 'UI/UX Design', icon: '🎨' },
  { label: 'Cybersecurity', icon: '🔒' },
  { label: 'Cloud Computing', icon: '☁️' },
  { label: 'Game Dev', icon: '🎮' },
  { label: 'DevOps', icon: '⚙️' },
  { label: 'Blockchain', icon: '🔗' },
  { label: 'Product Management', icon: '📋' },
  { label: 'Entrepreneurship', icon: '🚀' }
]

const careerGoals = [
  { label: 'Full-Stack Developer', icon: '💻', desc: 'Build complete web applications' },
  { label: 'Data Scientist', icon: '📊', desc: 'Analyze data & build ML models' },
  { label: 'UX Designer', icon: '🎨', desc: 'Create user-centered designs' },
  { label: 'DevOps Engineer', icon: '⚙️', desc: 'Automate & scale infrastructure' },
  { label: 'Mobile Developer', icon: '📱', desc: 'Build iOS & Android apps' },
  { label: 'AI/ML Engineer', icon: '🤖', desc: 'Build intelligent systems' }
]

const steps = ['Education', 'Skills', 'Interests', 'Career Goal']

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const [education, setEducation] = useState('')
  const [skills, setSkills] = useState([])
  const [interests, setInterests] = useState([])
  const [careerGoal, setCareerGoal] = useState('')
  const { updateUser } = useAuth()
  const { initializeRoadmap } = useData()
  const navigate = useNavigate()

  const toggleSkill = (s) => {
    setSkills(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  }

  const toggleInterest = (s) => {
    setInterests(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  }

  const canAdvance = () => {
    if (step === 0) return education !== ''
    if (step === 1) return skills.length > 0
    if (step === 2) return interests.length > 0
    if (step === 3) return careerGoal !== ''
    return true
  }

  const handleComplete = () => {
    updateUser({
      onboarded: true,
      education,
      skills,
      interests,
      careerGoal
    })
    initializeRoadmap(careerGoal)
    navigate('/dashboard')
  }

  return (
    <div className="onboarding-page page-wrapper">
      <div className="onboarding-container">
        {/* Progress bar */}
        <div className="onboarding-progress">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`onboarding-step ${i < step ? 'completed' : ''} ${i === step ? 'active' : ''}`}
            />
          ))}
        </div>

        <div className="onboarding-card" key={step}>
          {/* Step 0: Education */}
          {step === 0 && (
            <>
              <h2>What's your education level?</h2>
              <p className="step-desc">This helps us tailor your career roadmap.</p>
              <div className="option-grid">
                {educationLevels.map(e => (
                  <div
                    key={e.label}
                    className={`option-item ${education === e.label ? 'selected' : ''}`}
                    onClick={() => setEducation(e.label)}
                  >
                    <div className="option-icon">{e.icon}</div>
                    <div>{e.label}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Step 1: Skills */}
          {step === 1 && (
            <>
              <h2>What skills do you have?</h2>
              <p className="step-desc">Select all that apply — we'll build on these.</p>
              <div className="option-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}>
                {skillOptions.map(s => (
                  <div
                    key={s}
                    className={`option-item ${skills.includes(s) ? 'selected' : ''}`}
                    onClick={() => toggleSkill(s)}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Step 2: Interests */}
          {step === 2 && (
            <>
              <h2>What interests you?</h2>
              <p className="step-desc">Choose areas you'd like to explore.</p>
              <div className="option-grid">
                {interestOptions.map(i => (
                  <div
                    key={i.label}
                    className={`option-item ${interests.includes(i.label) ? 'selected' : ''}`}
                    onClick={() => toggleInterest(i.label)}
                  >
                    <div className="option-icon">{i.icon}</div>
                    <div>{i.label}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Step 3: Career Goal */}
          {step === 3 && (
            <>
              <h2>What's your career goal?</h2>
              <p className="step-desc">We'll create a personalized roadmap for you.</p>
              <div className="option-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
                {careerGoals.map(g => (
                  <div
                    key={g.label}
                    className={`option-item ${careerGoal === g.label ? 'selected' : ''}`}
                    onClick={() => setCareerGoal(g.label)}
                    style={{ textAlign: 'left', padding: '20px' }}
                  >
                    <div className="option-icon">{g.icon}</div>
                    <div style={{ fontWeight: 600 }}>{g.label}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>{g.desc}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="onboarding-actions">
            {step > 0 ? (
              <button className="btn btn-ghost" onClick={() => setStep(s => s - 1)}>
                <FiArrowLeft /> Back
              </button>
            ) : <div />}

            {step < 3 ? (
              <button
                className="btn btn-primary"
                onClick={() => setStep(s => s + 1)}
                disabled={!canAdvance()}
              >
                Next <FiArrowRight />
              </button>
            ) : (
              <button
                className="btn btn-accent"
                onClick={handleComplete}
                disabled={!canAdvance()}
              >
                <FiCheck /> Complete Setup
              </button>
            )}
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '16px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          Step {step + 1} of {steps.length} — {steps[step]}
        </p>
      </div>
    </div>
  )
}
