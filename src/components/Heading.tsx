import styled from "@master/styled.react"

export interface HeadingProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children?: React.ReactNode
  className?: string
}

export function Heading({ children, className, level = 3, size = 2 }: HeadingProps) {
  const tag = `h${level}`

  const StyledHeading = styled[tag]({
    $size: {
      1: "text-3xl font-black",
      2: "text-2xl font-bold",
      3: "text-xl font-bold",
      4: "text-lg font-bold",
      5: "text-base font-bold",
      6: "text-sm font-bold",
    },
  })

  return (
    <StyledHeading $size={size} className={className}>
      {children}
    </StyledHeading>
  )
}
