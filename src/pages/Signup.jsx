import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { FiUser, FiMail, FiLock, FiUserPlus } from 'react-icons/fi'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    await new Promise(r => setTimeout(r, 800))

    const result = signup(name, email, password)
    setLoading(false)

    if (result.success) {
      navigate('/onboarding')
    } else {
      setError(result.error)
    }
  }

  return (
    <div className="auth-page page-wrapper">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p className="subtitle">Start your AI-guided career journey today</p>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="signup-name"><FiUser style={{ marginRight: '6px' }} />Full Name</label>
            <input
              id="signup-name"
              type="text"
              className="input-field"
              placeholder="Your full name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="signup-email"><FiMail style={{ marginRight: '6px' }} />Email</label>
            <input
              id="signup-email"
              type="email"
              className="input-field"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="signup-password"><FiLock style={{ marginRight: '6px' }} />Password</label>
            <input
              id="signup-password"
              type="password"
              className="input-field"
              placeholder="At least 6 characters"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? <span className="spinner" style={{ width: 20, height: 20, margin: 0, borderWidth: 2 }} /> : <><FiUserPlus /> Create Account</>}
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  )
}
