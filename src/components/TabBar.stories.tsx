import type { Meta, StoryObj } from "@storybook/react"
import { TabBar } from "./TabBar"
import { Cube, House, Receipt } from "@phosphor-icons/react"

const meta: Meta<typeof TabBar> = {
  title: "Components/TabBar",
  component: TabBar,
  tags: ["autodocs"],
}
export default meta

type Story = StoryObj<typeof TabBar>

export const Default: Story = {
  args: {
    items: [
      { icon: House, path: "/", title: "خانه" },
      { icon: Receipt, path: "/expenses", title: "خرجی‌ها" },
      { icon: Cube, path: "/budgets", title: "بودجه‌ها" },
    ]
  },
}
