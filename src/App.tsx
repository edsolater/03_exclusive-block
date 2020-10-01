import React from "react"
import "./App.css"
import SmoothInsert from "./SmoothInsert"
// import TestExclusiveBlock from "./TestExclusiveBlock"
// import TestPairBlock from "./TestPairBlock"

function App() {
  return (
    <div className="App">
      {/* <TestExclusiveBlock /> */}
      {/* <TestPairBlock /> */}
      <SmoothInsert array={['A','B']}/>
    </div>
  )
}

export default App
