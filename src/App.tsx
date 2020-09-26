import React from "react"
import "./App.css"
import ExclusiveBlock from "./ExclusiveBlock"

function App() {
  const already = [
    { height: 200, color: "#233333", top: 0 },
    { height: 300, color: "#eee", top: 150 },
  ]
  return (
    <div className="App">
      {already.map((block, idx) => (
        <ExclusiveBlock
          key={idx}
          elref={(el) => console.log(el)}
          height={block.height}
          color={block.color}
          top={block.top}
        />
      ))}
    </div>
  )
}

export default App
