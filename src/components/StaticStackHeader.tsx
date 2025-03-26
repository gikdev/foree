import { ArrowRight } from "@phosphor-icons/react"
import { Link } from "react-router"

interface StaticStackHeaderProps {
  title: string
  slotStart?: React.ReactNode
  slotEnd?: React.ReactNode
}

export function StaticStackHeader({ slotEnd, title, slotStart }: StaticStackHeaderProps) {
  return (
    <header className="bg-info-3 text-neutral-5 h-12 flex items-center justify-between py-1 px-4">
      {typeof slotStart === "string" ? (
        <Link
          to={slotStart}
          className="bg-info-1/10 size-8 flex items-center justify-center rounded-full"
        >
          <ArrowRight size={24} />
        </Link>
      ) : (
        slotStart
      )}

      <p className="font-bold text-lg">{title}</p>

      {slotEnd ?? <div className="size-8" />}
    </header>
  )
}
