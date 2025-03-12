import styled from "@master/styled.react"
import { CaretDown, CaretUp } from "@phosphor-icons/react"
import { useState } from "react"

export interface CollapseProps {
  question: string
  children: React.ReactNode
  defaultOpen?: boolean
  className?: string
  contentContainerClassName?: string
}

export function Collapse({
  children,
  question,
  className,
  contentContainerClassName,
  defaultOpen = false,
}: CollapseProps) {
  const [isOpen, setOpen] = useState(defaultOpen)
  const ArrowIcon = isOpen ? CaretUp : CaretDown

  return (
    <StyledContainer className={className}>
      <StyledBtn type="button" onClick={() => setOpen(p => !p)}>
        <StyledText>{question}</StyledText>
        <ArrowIcon size={20} className="shrink-0" />
      </StyledBtn>

      <StyledContentContainer className={contentContainerClassName}>
        {children}
      </StyledContentContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`bg-neutral-4 block w-full rounded-md overflow-clip`
const StyledBtn = styled.button`p-2 cursor-pointer flex items-center justify-between gap-1 w-full`
const StyledText = styled.p`font-bold text-start text-lg`
const StyledContentContainer = styled.div("p-2 block", props => !props.$isOpen && "hidden")
