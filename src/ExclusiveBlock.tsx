import React from "react"
import "./App.css"

export default function ExclusiveBlock({ height, color, top, elref }) {
  return (
    <div
      className="block"
      ref={elref}
      style={{
        height,
        color,
        top,
      }}
    ></div>
  )
}
