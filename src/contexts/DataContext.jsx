import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { demoProgress, generateRoadmap } from '../data/demoData'

const DataContext = createContext()

export function DataProvider({ children }) {
  const { user } = useAuth()
  const [progress, setProgress] = useState(null)
  const [roadmap, setRoadmap] = useState(null)
  const [weeklyData, setWeeklyData] = useState([])

  useEffect(() => {
    if (user) {
      loadUserData()
    } else {
      setProgress(null)
      setRoadmap(null)
      setWeeklyData([])
    }
  }, [user])

  const loadUserData = () => {
    // Try loading saved progress
    const savedProgress = localStorage.getItem(`aipt-progress-${user.id}`)
    const savedRoadmap = localStorage.getItem(`aipt-roadmap-${user.id}`)
    const savedWeekly = localStorage.getItem(`aipt-weekly-${user.id}`)

    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    } else if (demoProgress[user.id]) {
      setProgress(demoProgress[user.id])
    }

    if (savedRoadmap) {
      setRoadmap(JSON.parse(savedRoadmap))
    } else if (user.careerGoal) {
      const rm = generateRoadmap(user.careerGoal)
      setRoadmap(rm)
      localStorage.setItem(`aipt-roadmap-${user.id}`, JSON.stringify(rm))
    }

    if (savedWeekly) {
      setWeeklyData(JSON.parse(savedWeekly))
    } else {
      const defaultWeekly = [
        { day: 'Mon', tasks: 3 },
        { day: 'Tue', tasks: 5 },
        { day: 'Wed', tasks: 2 },
        { day: 'Thu', tasks: 4 },
        { day: 'Fri', tasks: 6 },
        { day: 'Sat', tasks: 1 },
        { day: 'Sun', tasks: 3 }
      ]
      setWeeklyData(defaultWeekly)
    }
  }

  const toggleSkillComplete = (phaseIndex, skillIndex) => {
    if (!roadmap) return

    const updated = JSON.parse(JSON.stringify(roadmap))
    const skill = updated.phases[phaseIndex].skills[skillIndex]
    skill.completed = !skill.completed

    // Recalculate progress
    const totalSkills = updated.phases.reduce((a, p) => a + p.skills.length, 0)
    const completedSkills = updated.phases.reduce(
      (a, p) => a + p.skills.filter(s => s.completed).length, 0
    )

    const newProgress = {
      totalSkills,
      completedSkills,
      percentage: Math.round((completedSkills / totalSkills) * 100),
      streak: (progress?.streak || 0) + (skill.completed ? 1 : 0),
      lastUpdated: new Date().toISOString()
    }

    setRoadmap(updated)
    setProgress(newProgress)
    localStorage.setItem(`aipt-roadmap-${user.id}`, JSON.stringify(updated))
    localStorage.setItem(`aipt-progress-${user.id}`, JSON.stringify(newProgress))

    // Update weekly data
    const today = new Date().getDay()
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const updatedWeekly = [...weeklyData]
    const todayEntry = updatedWeekly.find(w => w.day === days[today])
    if (todayEntry) {
      todayEntry.tasks += skill.completed ? 1 : -1
    }
    setWeeklyData(updatedWeekly)
    localStorage.setItem(`aipt-weekly-${user.id}`, JSON.stringify(updatedWeekly))
  }

  const initializeRoadmap = (careerGoal) => {
    const rm = generateRoadmap(careerGoal)
    setRoadmap(rm)

    const totalSkills = rm.phases.reduce((a, p) => a + p.skills.length, 0)
    const newProgress = {
      totalSkills,
      completedSkills: 0,
      percentage: 0,
      streak: 0,
      lastUpdated: new Date().toISOString()
    }
    setProgress(newProgress)

    localStorage.setItem(`aipt-roadmap-${user.id}`, JSON.stringify(rm))
    localStorage.setItem(`aipt-progress-${user.id}`, JSON.stringify(newProgress))
  }

  return (
    <DataContext.Provider value={{
      progress,
      roadmap,
      weeklyData,
      toggleSkillComplete,
      initializeRoadmap
    }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)
