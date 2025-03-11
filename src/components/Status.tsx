import { ccn } from "../lib/cns"

type StatusSize = "small" | "medium" | "large"
type StatusColor = "neutral" | "dark" | "light" | "danger" | "warning" | "success" | "info"

interface StatusProps {
  size?: StatusSize
  color?: StatusColor
  className?: string
}

export function Status({ color = "neutral", size = "medium", className }: StatusProps) {
  const styles = ccn(
    {
      "bg-neutral-3": color === "neutral",
      "bg-neutral-4": color === "light",
      "bg-neutral-2": color === "dark",
      "bg-danger-3": color === "danger",
      "bg-success-3": color === "success",
      "bg-info-3": color === "info",
      "bg-warning-3": color === "warning",
    },
    {
      "size-2": size === "small",
      "size-3": size === "medium",
      "size-4": size === "large",
    },
    "rounded-full inline-block",
    className,
  )

  return <div {...styles} aria-label="status" />
}
