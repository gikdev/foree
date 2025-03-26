import styled from "@master/styled.react"
import type { InputHTMLAttributes } from "react"

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputField({ ...other }: InputFieldProps) {
  return <StyledInput {...other} />
}

const StyledInput = styled.input`px-2 py-2 border-2 border-neutral-3 w-full rounded-md`
