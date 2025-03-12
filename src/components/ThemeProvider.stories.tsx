import type { Meta, StoryObj } from "@storybook/react"
import { ThemeProvider, ThemeSwitchBtn, useThemeContext } from "./ThemeProvider"

const meta: Meta<typeof ThemeSwitchBtn> = {
  title: "Components/Theme Switch Btn",
  component: ThemeSwitchBtn,
  tags: ["autodocs"],
  decorators: Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
}
export default meta

type Story = StoryObj<typeof ThemeSwitchBtn>

export const Default: Story = {
  render: () => {
    const { theme } = useThemeContext()

    return (
      <div>
        <p>Theme: {theme}</p>
        <ThemeSwitchBtn />
      </div>
    )
  },
}
