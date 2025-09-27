import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id = "yessy">
      <h1>HackyClicker</h1>
      <div id = "container">
        <div id = "left">
        </div>
        <div id = "middle">
          <button id ="clickButton" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div id = "right"></div>
      </div>
    </div>
    </>
  )
}

export default App
