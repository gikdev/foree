import type { InputHTMLAttributes } from "react"
import { ccn } from "../lib/cns"

export type CheckboxTheme = "neutral" | "danger" | "success" | "info" | "warning"

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: CheckboxTheme
}

export function Checkbox({ theme = "neutral", className, ...other }: CheckboxProps) {
  const styles = ccn(
    "",
    {
      "accent-neutral-1": theme === "neutral",
      "accent-danger-3": theme === "danger",
      "accent-success-3": theme === "success",
      "accent-info-3": theme === "info",
      "accent-warning-3": theme === "warning",
    },
    className,
  )

  return <input {...other} {...styles} type="checkbox" />
}
