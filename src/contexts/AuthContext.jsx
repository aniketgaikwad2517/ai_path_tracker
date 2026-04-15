import { createContext, useContext, useState, useEffect } from 'react'
import { demoUsers } from '../data/demoData'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('aipt-user')
    if (saved) {
      try {
        setUser(JSON.parse(saved))
      } catch {}
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    // Check demo users first
    const demoUser = demoUsers.find(u => u.email === email && u.password === password)
    if (demoUser) {
      const userData = { ...demoUser }
      delete userData.password
      setUser(userData)
      localStorage.setItem('aipt-user', JSON.stringify(userData))
      return { success: true }
    }

    // Check stored users
    const storedUsers = JSON.parse(localStorage.getItem('aipt-users') || '[]')
    const found = storedUsers.find(u => u.email === email && u.password === password)
    if (found) {
      const userData = { ...found }
      delete userData.password
      setUser(userData)
      localStorage.setItem('aipt-user', JSON.stringify(userData))
      return { success: true }
    }

    return { success: false, error: 'Invalid email or password' }
  }

  const signup = (name, email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('aipt-users') || '[]')
    
    if (storedUsers.find(u => u.email === email) || demoUsers.find(u => u.email === email)) {
      return { success: false, error: 'Email already exists' }
    }

    const newUser = {
      id: 'user_' + Date.now(),
      name,
      email,
      password,
      onboarded: false,
      createdAt: new Date().toISOString()
    }

    storedUsers.push(newUser)
    localStorage.setItem('aipt-users', JSON.stringify(storedUsers))

    const userData = { ...newUser }
    delete userData.password
    setUser(userData)
    localStorage.setItem('aipt-user', JSON.stringify(userData))
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('aipt-user')
  }

  const updateUser = (updates) => {
    const updated = { ...user, ...updates }
    setUser(updated)
    localStorage.setItem('aipt-user', JSON.stringify(updated))
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
