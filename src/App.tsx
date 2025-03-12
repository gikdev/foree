import { ArrowRight } from "@phosphor-icons/react"
import { Btn, Checkbox } from "./components"
import { Collapse } from "./components/Collapse"
import { Status } from "./components/Status"

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="bg-info-3 text-neutral-5 h-12 flex items-center justify-between py-1 px-4">
        <button
          type="button"
          className="bg-info-1/10 size-8 flex items-center justify-center rounded-full"
        >
          <ArrowRight size={24} />
        </button>

        <p className="font-bold text-lg">خانه</p>

        <div className="size-8" />
      </header>

      <div className="p-4 grow shrink">
        <Collapse
          defaultOpen
          question="What is HTML?"
          contentContainerClassName="flex flex-col gap-2"
        >
          <p className="">HTML stands for Hypertext Markup Language. But first you need to:</p>

          <label className="flex items-center gap-1">
            <Checkbox theme="danger" />
            <span>
              I'll{" "}
              <strong>
                <u>promise</u>
              </strong>{" "}
              I'll pay you{" "}
              <u>
                <strong>$1M</strong>
              </u>
              !
            </span>
          </label>

          <Btn>
            <Status color="info" /> Learn HTML
          </Btn>
        </Collapse>
      </div>
    </div>
  )
}
