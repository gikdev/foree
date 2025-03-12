import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./Checkbox"

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}
