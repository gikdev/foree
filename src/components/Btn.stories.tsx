import { Books, Pen } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react"
import { Btn } from "./Btn"

const meta: Meta<typeof Btn> = {
  title: "Components/Btn",
  component: Btn,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["outline", "primary", "secondary", "light", "ghost"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["neutral", "warning", "success", "info", "danger"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
}
export default meta

type Story = StoryObj<typeof Btn>

export const Default: Story = {
  args: {
    children: "Click me!",
    theme: "outline",
    color: "neutral",
    size: "medium",
    disabled: false,
  },
}

export const WithOnlyIocn: Story = {
  name: "With Only Icon",
  args: {
    ...Default.args,
    theme: "light",
    color: "info",
    size: "small",
    iconsConfig: { OnlyIcon: Books },
  },
}

export const WithStartIcon: Story = {
  name: "With Start Icon",
  args: {
    ...Default.args,
    theme: "secondary",
    color: "warning",
    children: "Edit Your Code",
    iconsConfig: { StartIcon: Pen },
  },
}
