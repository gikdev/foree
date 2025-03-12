import { ArrowRight } from "@phosphor-icons/react"
import { useAtomValue, useSetAtom } from "jotai"
import { atom } from "jotai"
import { useEffect } from "react"
import { Link } from "react-router"

interface StackHeaderAtom {
  title: string
  backRoute: string
}

export const stackHeaderAtom = atom<StackHeaderAtom>({
  title: "",
  backRoute: "/",
})

export function useSetStackHeaderAtom(cb: (h: StackHeaderAtom) => Partial<StackHeaderAtom>) {
  const setHeader = useSetAtom(stackHeaderAtom)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setHeader(h => ({ ...h, ...cb(h) }))
  }, [cb])
}

export function StackHeader() {
  const header = useAtomValue(stackHeaderAtom)

  return (
    <header className="bg-info-3 text-neutral-5 h-12 flex items-center justify-between py-1 px-4">
      <Link
        to={header.backRoute}
        className="bg-info-1/10 size-8 flex items-center justify-center rounded-full"
      >
        <ArrowRight size={24} />
      </Link>

      <p className="font-bold text-lg">{header.title || "---"}</p>

      <div className="size-8" />
    </header>
  )
}
