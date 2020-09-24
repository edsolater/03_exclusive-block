import React from "react"
import "./App.css"

function App() {
  const already = [
    { height: 200, color: "#233333", position: 0 },
    { height: 300, color: "#eee", position: 150 },
  ]
  return (
    <div className="App">
      <ul className="container">
        {already.map((block) => (
          <li
            className="block"
            style={{
              height: block.height,
              color: block.color,
              top: block.position,
            }}
          ></li>
        ))}
      </ul>
    </div>
  )
}

export default App
