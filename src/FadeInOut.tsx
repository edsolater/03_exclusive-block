/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { ReactElement } from "react"

/**
 * 使用 opacity 做到 fade-in/out
 * 但消失不会使其在DOM树中也消失（消失理解为隐藏）
 */
const FadeInOut = (props: {
  opend?: boolean
  duration?: number
  children?: ReactElement
  onTransitionEnd?: (opened: boolean) => void
}) => {
  return (
    <div
      css={css({
        opacity: props.opend ? "1" : "0",
        transition: `${props.duration ?? 500}ms`,
      })}
      onTransitionEnd={() => {
        props.onTransitionEnd?.(Boolean(props.opend))
      }}
    >
      {props.children}
    </div>
  )
}

export default FadeInOut
