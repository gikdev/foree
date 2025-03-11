import type { Meta, StoryObj } from "@storybook/react"
import { Status } from "./Status"

const meta: Meta<typeof Status> = {
  title: "Components/DataDisplay/Status",
  component: Status,
  tags: ["autodocs"],
}
export default meta

type Story = StoryObj<typeof Status>

export const Default: Story = {}
