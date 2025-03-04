import { Btn, Checkbox } from "./components"
import { Collapse } from "./components/DataDisplay/Collapse"
import Status from "./components/DataDisplay/Status"

export default function App() {
  return (
    <div className="p-4">
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
  )
}
