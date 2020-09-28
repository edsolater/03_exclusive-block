/**
 * 纯函数
 * 碰撞检测
 * @param boundingBox1 1号区域盒子
 * @param boundingBox2 2号区域盒子
 */
function isCollapse(boundingBox1: DOMRect, boundingBox2: DOMRect) {
  // 允许的误差像素数
  const accuracy = -1
  return (
    boundingBox1.left - boundingBox2.right < accuracy &&
    accuracy > boundingBox2.left - boundingBox1.right &&
    boundingBox1.top - boundingBox2.bottom < accuracy &&
    accuracy > boundingBox2.top - boundingBox1.bottom
  )
}

/**
 * 设定元素的CSS变量值
 * @param target 目标元素
 * @param name css variable 变量名
 * @param value 值
 */
function setCssVariable(
  target: HTMLElement,
  name: string,
  value: boolean | number | string
) {
  target.style.setProperty(name, String(value))
}

/**
 * 获取元素的CSS变量值
 * @param target 目标元素
 * @param name css variable 变量名
 * @param value 值
 */
function getCssVariable(target: HTMLElement, name: string) {
  return getComputedStyle(target).getPropertyValue(name)
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
      const floatElementDy = Number(getCssVariable(floatElement, "--dy") || 0)
      setCssVariable(
        floatElement,
        "--dy",
        floatElementDy - (boundingBox2.top - boundingBox1.bottom)
      )
    }
  }
  isInvoking = false
  if (needSortAgain) {
    exclusiveAglorithm()
  }
}
