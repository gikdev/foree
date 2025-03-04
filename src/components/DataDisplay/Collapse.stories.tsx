import type { Meta, StoryObj } from "@storybook/react"
import { Btn } from "../Actions/Btn"
import { Collapse } from "./Collapse"

const meta: Meta<typeof Collapse> = {
  title: "Components/DataDisplay/Collapse",
  component: Collapse,
  tags: ["autodocs"],
}
export default meta

type Story = StoryObj<typeof Collapse>

export const Default: Story = {
  args: {
    question: "What is HTML?",
    children: (
      <div className="flex flex-col gap-2">
        <p>HTML is a language used in web. But first make sure you:</p>
        <Btn>Learn HTML</Btn>
      </div>
    ),
  },
}

export const OpenByDefault: Story = {
  args: {
    defaultOpen: true,
    question: "What is HTML?",
    children: (
      <div className="flex flex-col gap-2">
        <p>HTML is a language used in web. But first make sure you:</p>
        <Btn>Learn HTML</Btn>
      </div>
    ),
  },
}
