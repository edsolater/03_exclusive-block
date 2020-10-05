import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import "./index.css"

function getTempArray(oldArray: any[], newArray: any[]) {
  return [null, ...oldArray] //TEMP
}

export default function SmoothInsert({ array }: { array: any[] }) {
  const [currentArray, setTargetArray] = useState(array)
  let oldArr = currentArray
  let newArr = currentArray
  const setArray = (inputArray: typeof array) => {
    oldArr = currentArray
    newArr = inputArray
    setTargetArray(inputArray)
  }

  const screenShotNewItems = () => {}
  useEffect(() => {}, [currentArray])
  const liRefs = useRef({})
  return (
    <div className="array-test-box">
      <button
        className="insert-btn"
        onClick={() => {
          setArray([...currentArray, new Date().getSeconds()])
        }}
      >
        +
      </button>
      <ul className="array-box">
        {currentArray.map((item) => (
          <li
            ref={(el) => {
              liRefs.current[item] = el
            }}
            className={`array-item ${true ? "enter-active" : ""}`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
      {/* <ul className="shadow-array-box">
        {currentArray.map((item) => (
          <li
            ref={(el) => {
              liRefs.current[item] = el
            }}
            className={`array-item ${intransition ? "enter-active" : ""}`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul> */}
    </div>
  )
}
