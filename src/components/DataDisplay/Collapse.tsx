import { CaretDown, CaretUp } from "@phosphor-icons/react"
import { useState } from "react"
import { ccn } from "../../lib/cns"

export interface CollapseProps {
  question: string
  children: React.ReactNode
  className?: string
  contentContainerClassName?: string
}

export function Collapse({
  children,
  question,
  className,
  contentContainerClassName,
}: CollapseProps) {
  const [isOpen, setOpen] = useState(false)
  const ArrowIcon = isOpen ? CaretUp : CaretDown

  return (
    <div {...ccn("bg-neutral-4 block w-full rounded-md overflow-clip", className)}>
      <button
        className="p-2 cursor-pointer flex items-center justify-between gap-1 w-full"
        type="button"
        onClick={() => setOpen(p => !p)}
      >
        <p className="font-bold text-start text-lg">{question}</p>
        <ArrowIcon size={20} className="shrink-0" />
      </button>

      <div {...ccn("p-2 block", contentContainerClassName, { hidden: !isOpen })}>{children}</div>
    </div>
  )
}
