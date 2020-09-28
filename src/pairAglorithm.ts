export default function pairAglorithm() {
  const boxA = document.querySelector(".box.A") as HTMLDivElement
  const boxB = document.querySelector(".box.B") as HTMLDivElement

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
