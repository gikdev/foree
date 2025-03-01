import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./Badge"

const meta: Meta<typeof Badge> = {
  title: "Components/DataDisplay/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["neutral", "danger", "warning", "success", "info"]
    }
  },
}
export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: "New Stuff!",
  },
}

export const NoArgs: Story = {}

export const Customized: Story = {
  args: {
    children: "Successful Mission!",
    color: "success",
    size: "large",
  },
}
