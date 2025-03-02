import { Collapse } from "./components/DataDisplay/Collapse"
import { Btn } from "./components/DataInput"

export default function App() {
  return (
    <div className="p-4">
      <Collapse question="What is HTML?" contentContainerClassName="flex flex-col gap-2">
        <p className="">HTML stands for Hypertext Markup Language. But first you need to:</p>
        <Btn>Learn HTML</Btn>
      </Collapse>
    </div>
  )
}
