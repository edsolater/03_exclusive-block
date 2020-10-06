/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React, { useState } from "react"
import "./App.css"
import FadeInOut from "./FadeInOut"
// import FadeInOutPure from "./FadeInOutPure"
// import SmoothInsert from "./SmoothInsert"
// import TestExclusiveBlock from "./TestExclusiveBlock"
// import TestPairBlock from "./TestPairBlock"

// function App() {
//   return (
//     <div className="App">
//       {/* <TestExclusiveBlock /> */}
//       {/* <TestPairBlock /> */}
//       {/* <SmoothInsert array={['A','B']}/> */}
//       <FadeInOut opend/>
//     </div>
//   )
// }

const App = () => {
  const [opened, setOpened] = useState(false)
  const toggleOpened = () => {
    setOpened(!opened)
  }

  return (
    <React.Fragment>
      <button onClick={toggleOpened}>open</button>
      <FadeInOut opend={opened}>
        <div
          css={css({
            width: 100,
            height: 100,
            backgroundColor: "dodgerblue",
          })}
        ></div>
      </FadeInOut>
    </React.Fragment>
  )
}

export default App
