import React, { useEffect } from "react"
import "./App.css"
import { exclusiveAglorithm } from "./exclusiveAglorithm"

export function isCollapse(boundingBox1: DOMRect, boundingBox2: DOMRect) {
  return (
    boundingBox1.left < boundingBox2.right &&
    boundingBox1.right > boundingBox2.left &&
    boundingBox1.top < boundingBox2.bottom &&
    boundingBox1.bottom > boundingBox2.top
  )
}

export default function ExclusiveBlock({ height, color, top }) {
  useEffect(() => {
    exclusiveAglorithm()
  })
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
