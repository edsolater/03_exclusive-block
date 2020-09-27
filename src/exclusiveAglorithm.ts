function isCollapse(boundingBox1: DOMRect, boundingBox2: DOMRect) {
  const accuracy = -1
  return (
    boundingBox1.left - boundingBox2.right < accuracy &&
    accuracy > boundingBox2.left - boundingBox1.right &&
    boundingBox1.top - boundingBox2.bottom < accuracy &&
    accuracy > boundingBox2.top - boundingBox1.bottom
  )
}
let isInvoking = false

export function exclusiveAglorithm() {
  if (isInvoking) {
    return
  } else {
    isInvoking = true
  }
  let needSortAgain = false

  // 这个元素查找一定要在react挂载之后触发
  const elements = document.querySelectorAll<HTMLDivElement>(
    "[data-feature-tag~=exclusive]"
  )
  const boundingBoxes = Array.from(elements).map((el) =>
    el.getBoundingClientRect()
  )
  // TODO: 目前只是纵向的判定, 且只能向下移动
  // 为了追求性能，这个算法只保证相邻的两个box不重叠
  for (let i = 0; i < boundingBoxes.length - 1; i++) {
    const boundingBox1 = boundingBoxes[i]
    const boundingBox2 = boundingBoxes[i + 1]
    if (isCollapse(boundingBox1, boundingBox2)) {
      needSortAgain = true
      const floatElement = elements[i + 1]
      const floatElementDy = Number(
        getComputedStyle(floatElement).getPropertyValue("--dy") || 0
      )
      floatElement.style.setProperty(
        "--dy",
        String(floatElementDy - (boundingBox2.top - boundingBox1.bottom))
      )
    }
  }
  isInvoking = false
  if (needSortAgain) {
    exclusiveAglorithm()
  }
}