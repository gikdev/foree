import { Moon, Sun } from "@phosphor-icons/react"
import { createContext, useContext, useState } from "react"
import { Btn, type BtnProps } from "../Actions/Btn"

export type Themes = "light" | "dark"

interface ThemeContext {
  theme: Themes
  setTheme: React.Dispatch<React.SetStateAction<Themes>>
}

const ThemeContext = createContext<ThemeContext>({
  theme: "light",
  setTheme: () => {},
})

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Themes>("light")

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => useContext(ThemeContext)

interface ThemeSwitchBtnProps {
  btnProps?: BtnProps
}

export function ThemeSwitchBtn({ btnProps }: ThemeSwitchBtnProps) {
  const { setTheme, theme } = useThemeContext()
  const IconToRender = theme === "light" ? Moon : Sun

  return (
    <Btn
      theme="light"
      {...btnProps}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      iconsConfig={{ OnlyIcon: IconToRender }}
    />
  )
}
