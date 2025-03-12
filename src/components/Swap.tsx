import styled from "@master/styled.react"
import type { ButtonHTMLAttributes } from "react"

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "children">

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
  return (
    <StyledBtn type="button" onClick={() => setOn(!isOn)} {...others}>
      {isOn ? contentOn : contentOff}
    </StyledBtn>
  )
}

const StyledBtn = styled.btn`cursor-pointer`
