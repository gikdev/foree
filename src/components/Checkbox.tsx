import styled from "@master/styled.react"
import type { InputHTMLAttributes } from "react"

export type CheckboxTheme = "neutral" | "danger" | "success" | "info" | "warning"

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: CheckboxTheme
}

export function Checkbox({ theme = "neutral", className, ...other }: CheckboxProps) {
  return <StyledCheckbox $theme={theme} {...other} type="checkbox" />
}

const StyledCheckbox = styled.input({
  $theme: {
    neutral: "accent-neutral-1",
    danger: "accent-danger-3",
    success: "accent-success-3",
    info: "accent-info-3",
    warning: "accent-warning-3",
  },
})
