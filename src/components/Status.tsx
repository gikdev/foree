import styled from "@master/styled.react"

type StatusSize = "small" | "medium" | "large"
type StatusColor = "neutral" | "dark" | "light" | "danger" | "warning" | "success" | "info"

interface StatusProps {
  size?: StatusSize
  color?: StatusColor
  className?: string
}

export function Status({ color = "neutral", size = "medium", className }: StatusProps) {
  return <StyledStatus $color={color} $size={size} className={className} aria-label="status" />
}

const StyledStatus = styled.div("rounded-full inline-block", {
  $color: {
    neutral: "bg-neutral-3",
    light: "bg-neutral-4",
    dark: "bg-neutral-2",
    danger: "bg-danger-3",
    success: "bg-success-3",
    info: "bg-info-3",
    warning: "bg-warning-3",
  },
  $size: {
    small: "size-2",
    medium: "size-3",
    large: "size-4",
  },
})
