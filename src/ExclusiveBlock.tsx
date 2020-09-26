import React, { useEffect } from "react"
import "./App.css"

export default function ExclusiveBlock({ height, color, top, elref }) {
  useEffect(() => {
    // TODO: 要把这个事件挂载到document上（有且只有一次），onload时触发一次
    const elements = document.querySelectorAll<HTMLDivElement>(
      "[data-feature-tag~=exclusive]"
    )
    const boundingBoxes = Array.from(elements).map((el) =>
      el.getBoundingClientRect()
    )
    boundingBoxes.forEach((boundingBox1, index1) => {
      //TODO: 目前只是纵向的判定, 且只能向下移动
      boundingBoxes.forEach((boundingBox2, index2) => {
        // 一定是2个不同的元素碰撞了（更先的元素权重更高）
        if (index1 < index2 && isCollapse(boundingBox1, boundingBox2)) {
          const floatElement = elements[Math.max(index1, index2)]
          const floatElementDy = Number(
            getComputedStyle(floatElement).getPropertyValue("--dy") || 0
          )
          floatElement.style.setProperty(
            "--dy",
            String(floatElementDy - (boundingBox2.top - boundingBox1.bottom))
          )
        }
      })
    })

  })
  return (
    <div
      className="block"
      data-feature-tag="exclusive weight:1"
      ref={elref}
      style={{
        height,
        color,
        top,
      }}
    ></div>
  )

  function isCollapse(boundingBox1: DOMRect, boundingBox2: DOMRect) {
    return (
      boundingBox1.left < boundingBox2.right &&
      boundingBox1.right > boundingBox2.left &&
      boundingBox1.top < boundingBox2.bottom &&
      boundingBox1.bottom > boundingBox2.top
    )
  }
}
