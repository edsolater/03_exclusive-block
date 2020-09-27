import React, { useEffect } from "react"
import "./App.css"
import { exclusiveAglorithm } from "./exclusiveAglorithm"

export default function ExclusiveBlock({ height, color, top }) {
  useEffect(() => {
    exclusiveAglorithm()
  }, [])
  return (
    <div
      className="block"
      data-feature-tag="exclusive"
      style={{
        height,
        color,
        top,
      }}
    />
  )
}
