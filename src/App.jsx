import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main>
      <nav className='navbar'>
        <ul className='nav-left'>
          <li><a href="#" target="_blank"><img src={reactLogo} className="logo react" alt="React logo" /> </a></li>
          <li><a href="#" target="_blank"><img src={viteLogo} className="logo" alt="Vite logo" /> </a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <ul className='nav-right'>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
      </nav>

      {/* Clock */}
      <div className="clock">
        <p>{time}</p>
      </div>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </main>
  )
}

export default App

