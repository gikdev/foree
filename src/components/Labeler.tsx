import styled from "@master/styled.react"
import type { LabelHTMLAttributes } from "react"

export interface LabelerProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string
  errorMsg?: string
  required?: boolean
}

export function Labeler({ label, required, children, errorMsg, ...other }: LabelerProps) {
  return (
    <StyledContainer {...other}>
      <StyledLabel>
        {label}
        {required ? " *" : ":"}
      </StyledLabel>
      {children}
      {errorMsg && <StyledError>{errorMsg}</StyledError>}
    </StyledContainer>
  )
}

const StyledContainer = styled.label`flex flex-col gap-2`
const StyledLabel = styled.p`font-bold`
const StyledError = styled.p`text-sm text-danger-3`
