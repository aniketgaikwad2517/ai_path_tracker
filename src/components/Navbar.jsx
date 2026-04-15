import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { useAuth } from '../contexts/AuthContext'
import { FiSun, FiMoon, FiMenu, FiX, FiLogOut } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi2'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to={user ? '/dashboard' : '/'} className="navbar-logo">
          <span className="logo-icon"><HiOutlineSparkles /></span>
          <span>AI Path<span className="gradient-text"> Tracker</span></span>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {user ? (
            <>
              <Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
              <Link to="/roadmap" className={isActive('/roadmap')}>Roadmap</Link>
              <Link to="/chatbot" className={isActive('/chatbot')}>AI Chat</Link>
              <button onClick={toggleTheme} className="theme-toggle" title="Toggle theme">
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </button>
              <button onClick={logout} className="btn btn-ghost btn-sm" style={{ gap: '6px' }}>
                <FiLogOut /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={isActive('/login')}>Log In</Link>
              <Link to="/signup" className="btn btn-primary btn-sm">Get Started</Link>
              <button onClick={toggleTheme} className="theme-toggle" title="Toggle theme">
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </button>
            </>
          )}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  )
}
