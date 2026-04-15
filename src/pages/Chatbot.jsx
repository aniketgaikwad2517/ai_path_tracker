import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { getChatResponse } from '../data/demoData'
import { FiSend } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi2'

const suggestions = [
  'What skills are in demand?',
  'Tell me about full-stack development',
  'How to prepare for interviews?',
  'Recommend free learning resources',
  'I need career motivation',
  'What about data science careers?'
]

export default function Chatbot() {
  const { user } = useAuth()
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: `Hello ${user?.name?.split(' ')[0] || 'there'}! 👋 I'm your AI Career Guide. I can help you with:\n\n🗺️ **Career path guidance**\n📚 **Learning resources**\n💡 **Skill recommendations**\n🎯 **Interview preparation**\n💪 **Motivation & advice**\n\nWhat would you like to know?`
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const sendMessage = async (text) => {
    const messageText = text || input.trim()
    if (!messageText || isTyping) return

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: messageText }])
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking delay
    const delay = 800 + Math.random() * 1200
    await new Promise(r => setTimeout(r, delay))

    // Get response
    const response = getChatResponse(messageText)
    setMessages(prev => [...prev, { role: 'bot', content: response }])
    setIsTyping(false)
    inputRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Simple markdown-like rendering
  const renderContent = (text) => {
    return text.split('\n').map((line, i) => {
      // Bold
      let processed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Links
      processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

      if (line.trim() === '') return <br key={i} />
      return <div key={i} dangerouslySetInnerHTML={{ __html: processed }} />
    })
  }

  return (
    <div className="chatbot-page">
      <div className="chatbot-container">
        {/* Header */}
        <div className="chatbot-header">
          <h1>
            <HiOutlineSparkles style={{ color: 'var(--primary)' }} />
            AI Career Guide
          </h1>
          <div className="bot-status">
            <span className="dot" />
            Online — Ready to help
          </div>
        </div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.role}`}>
              <div className="chat-avatar">
                {msg.role === 'bot' ? '✨' : user?.name?.[0] || 'U'}
              </div>
              <div className="chat-bubble">
                {renderContent(msg.content)}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chat-message bot">
              <div className="chat-avatar">✨</div>
              <div className="chat-bubble">
                <div className="chat-typing">
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 2 && (
          <div className="chat-suggestions">
            {suggestions.map((s, i) => (
              <button
                key={i}
                className="chat-suggestion"
                onClick={() => sendMessage(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chat-input-area">
          <div className="chat-input-wrapper">
            <textarea
              ref={inputRef}
              className="chat-input"
              placeholder="Ask me anything about careers, skills, or learning..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              disabled={isTyping}
            />
            <button
              className="chat-send-btn"
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              title="Send message"
            >
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
