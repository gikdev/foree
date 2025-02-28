import type { ButtonHTMLAttributes } from "react"
import { cn } from "../../lib/cns"

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "">
export default interface SwapProps extends ButtonProps {
  /** Content to show if it's off */
  contentOff: React.ReactNode

  /** Content to show if it's on */
  contentOn: React.ReactNode

  /** Whether Swap is ON or OFF */
  isOn: boolean

  /** Setter function to set the ON/OFF state of Swap */
  setOn: (val: boolean) => void
}

export function Swap({ contentOff, contentOn, isOn, setOn, ...others }: SwapProps) {
  const className = cn("cursor-pointer", others.className)

  return (
    <button type="button" onClick={() => setOn(!isOn)} {...others} className={className}>
      {isOn ? contentOn : contentOff}
    </button>
  )
}
