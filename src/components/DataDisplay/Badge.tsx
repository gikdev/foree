import { ccn } from "../../lib/cns"

export type BadgeColor = "neutral" | "info" | "warning" | "success" | "danger"
export type BadgeSize = "medium" | "large"

export interface BadgeProps {
  color?: BadgeColor
  size?: BadgeSize
  children?: React.ReactNode
}

export function Badge({ children, size = "medium", color = "neutral" }: BadgeProps) {
  const styles = ccn(
    "inline-flex items-center justify-center gap-1",
    "text-neutral-5 font-bold rounded-md",
    {
      "h-6 min-w-6 py-1 px-2 text-xs": size === "medium",
      "h-8 min-w-8 py-2 px-3 text-base": size === "large",
    },
    {
      "bg-neutral-2": color === "neutral",
      "bg-danger-3": color === "danger",
      "bg-info-3": color === "info",
      "bg-success-3": color === "success",
      "bg-warning-3": color === "warning",
    },
  )

  return <div {...styles}>{children}</div>
}
