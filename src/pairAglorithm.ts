function pairLocateAglorithm(boxA: HTMLElement, boxB: HTMLElement) {
  boxA.addEventListener("click", () => {
    const rectA = boxA.getBoundingClientRect()
    const rectB = boxB.getBoundingClientRect()
    boxB.parentElement?.scrollBy({
      top: rectB.top - rectA.top,
      behavior: "smooth",
    })
  })

  boxB.addEventListener("click", () => {
    const rectB = boxB.getBoundingClientRect()
    const rectA = boxA.getBoundingClientRect()
    boxA.parentElement?.scrollBy({
      top: rectA.top - rectB.top,
      behavior: "smooth",
    })
  })
}
function pairHighlightAglorithm(boxA: HTMLElement, boxB: HTMLElement) {
  boxA.addEventListener("pointerenter", () => {
    boxA.classList.add("highlighted")
    boxB.classList.add("highlighted")
  })
  boxA.addEventListener("pointerleave", () => {
    boxA.classList.remove("highlighted")
    boxB.classList.remove("highlighted")
  })

  boxB.addEventListener("pointerenter", () => {
    boxB.classList.add("highlighted")
    boxA.classList.add("highlighted")
  })
  boxB.addEventListener("pointerleave", () => {
    boxB.classList.remove("highlighted")
    boxA.classList.remove("highlighted")
  })
}
export default function pairAglorithm() {
  const boxA = document.querySelector(".box.A") as HTMLDivElement
  const boxB = document.querySelector(".box.B") as HTMLDivElement
  pairLocateAglorithm(boxA, boxB)
  pairHighlightAglorithm(boxA, boxB)
}
