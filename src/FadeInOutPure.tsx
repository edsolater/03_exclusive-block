/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { ReactElement, useState } from "react"

//TODO 太命令式了，但偏底层又不得不
/**
 * 使用 opacity 做到 fade-in/out
 * 消失会使其在DOM树中也消失
 * 尽量使用不纯版（消失其实是隐藏）
 */
const FadeInOutPure = (props: {
  opend?: boolean
  duration?: number
  children?: ReactElement
}) => {
  const [isExist, setIsExist] = useState(props.opend)
  if (!isExist && props.opend) {
    setTimeout(() => {
      setIsExist(true)
    }, 0)
    return (
      <div
        css={css({
          opacity: "0",
          transition: `${props.duration ?? 500}ms`,
        })}
      >
        {props.children}
      </div>
    )
  } else if (isExist && props.opend) {
    return (
      <div
        css={css({
          opacity: "1",
          transition: `${props.duration ?? 500}ms`,
        })}
      >
        {props.children}
      </div>
    )
  } else if (isExist && !props.opend) {
    return (
      <div
        css={css({
          opacity: "0",
          transition: `${props.duration ?? 500}ms`,
        })}
        onTransitionEnd={() => {
          setIsExist(false)
        }}
      >
        {props.children}
      </div>
    )
  } else {
    return null
  }
}

export default FadeInOutPure
