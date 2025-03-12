import styled from "@master/styled.react"

export type BadgeColor = "neutral" | "info" | "warning" | "success" | "danger"
export type BadgeSize = "medium" | "large"

export interface BadgeProps {
  color?: BadgeColor
  size?: BadgeSize
  children?: React.ReactNode
}

export function Badge({ children, size = "medium", color = "neutral" }: BadgeProps) {
  return (
    <StyledTag $size={size} $color={color}>
      {children}
    </StyledTag>
  )
}

const StyledTag = styled.div(
  "inline-flex items-center justify-center gap-1",
  "text-neutral-5 font-bold rounded-md",
  {
    $size: {
      medium: "h-6 min-w-6 py-1 px-2 text-xs",
      large: "h-8 min-w-8 py-2 px-3 text-base",
    },
    $color: {
      neutral: "bg-neutral-2",
      danger: "bg-danger-3",
      info: "bg-info-3",
      success: "bg-success-3",
      warning: "bg-warning-3",
    },
  },
)
