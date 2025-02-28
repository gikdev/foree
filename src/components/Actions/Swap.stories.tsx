import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Swap } from "./Swap"

const meta: Meta<typeof Swap> = {
  title: "Components/Actions/Swap",
  component: Swap,
  tags: ["autodocs"],
  argTypes: {
    isOn: {
      control: { type: "boolean" },
    },
  },
}
export default meta

type Story = StoryObj<typeof Swap>

export const Default: Story = {
  args: {
    contentOff: "OFF CONTENT",
    contentOn: "ON CONTENT",
    isOn: false,
    setOn: () => {},
  },

  render: args => {
    const [isOn, setOn] = useState(false)

    return <Swap {...args} isOn={isOn} setOn={setOn} />
  },
}
