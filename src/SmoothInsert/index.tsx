import userEvent from "@testing-library/user-event"
import React, { useEffect, useState } from "react"
import "./index.css"

export default function SmoothInsert({ array }: { array: any[] }) {
  const [state, setState] = useState(array)
  const [toInsert, setToInsert] = useState("")
  useEffect(() => {
    document.addEventListener('selectionchange',(e)=>{
      e.preventDefault()
    })
  })
  return (
    <div className="array-test-box">
      <div className="data-box">{state.join(" ")}</div>
      <button className="insert-btn" >+dddddddddd</button>
      ghjkm, njkmjlkjkl;j
      <input className="insert-data" value={toInsert} onChange={e=>{
        console.log(e)
        document.addEventListener('selectionchange', e => {
          e.preventDefault()
        })
      }}/>
    </div>
  )
}
