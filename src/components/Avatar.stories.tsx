import type { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "./Avatar"

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "range",
        min: 4,
        max: 20,
        step: 2,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: { fallbackText: "GK" },
}

export const WithRealImg: Story = {
  name: "With image",
  args: {
    fallbackText: "GK",
    image: {
      alt: "",
      src: "https://placehold.co/400",
    },
  },
}
