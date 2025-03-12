import styled from "@master/styled.react"

const MAGIC_DESIGN_NUMBER = 8

export enum AvatarSize {
  XSmall = 4,
  Small = 6,
  Medium = 8,
  Large = 10,
  XLarge = 12,
}

export interface AvatarProps {
  fallbackText: string
  size?: AvatarSize
  image?: {
    src: string
    alt: string
  }
}

const StyledAvatar = styled.div`rounded-full overflow-clip bg-neutral-4 text-neutral-2 flex items-center justify-center font-bold`

export function Avatar({ fallbackText, image, size = AvatarSize.Medium }: AvatarProps) {
  const containerSize = size * MAGIC_DESIGN_NUMBER
  const fontSize = size * 3

  return (
    <StyledAvatar style={{ width: containerSize, height: containerSize, fontSize }}>
      {image ? <img {...image} /> : <p>{fallbackText}</p>}
    </StyledAvatar>
  )
}
