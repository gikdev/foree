import type { Icon, IconWeight } from "@phosphor-icons/react"
import type { ButtonHTMLAttributes } from "react"
import { ccn } from "../lib/cns"

export type BtnSize = "small" | "medium" | "large"
export type BtnTheme = "primary" | "secondary" | "outline" | "light" | "ghost"
export type BtnColor = "neutral" | "warning" | "success" | "info" | "danger"
export interface BtnIconsConfig {
  /** sth... */
  OnlyIcon?: Icon
  StartIcon?: Icon
  EndIcon?: Icon
  size?: number
  weight?: IconWeight
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export interface BtnProps extends ButtonProps {
  /** Btn's size */
  size?: BtnSize

  /** Btn's theme type */
  theme?: BtnTheme

  /** Btn's color */
  color?: BtnColor

  /** Btn's icon(s) config... */
  iconsConfig?: BtnIconsConfig
}

export function Btn({
  size = "medium",
  theme = "primary",
  color = "neutral",
  iconsConfig = {},
  children,
  className,
  ...others
}: BtnProps) {
  const {
    OnlyIcon,
    StartIcon,
    EndIcon,
    weight,
    size: iconSize = defaultIconSizeBasedOnBtnSize[size],
  } = iconsConfig

  const styles = ccn(
    stylesBase,
    stylesSize[size],
    generateThemeStyles(theme, color),
    { "opacity-50 cursor-not-allowed": others.disabled },
    OnlyIcon ? stylesOnlyIconBasedOnBtnSize[size] : "",
    className ?? "",
  )

  return (
    <button {...styles} {...others}>
      {OnlyIcon ? (
        <OnlyIcon size={iconSize} weight={weight} />
      ) : (
        <>
          {StartIcon && <StartIcon size={iconSize} weight={weight} />}
          {children}
          {EndIcon && <EndIcon size={iconSize} weight={weight} />}
        </>
      )}
    </button>
  )
}

const stylesBase = `
  cursor-pointer font-bold rounded-sm
  gap-1 items-center justify-center
  transition-all active:scale-95 flex
  border-2 border-transparent hover:scale-105 
  disabled:active:scale-100 disabled:hover:scale-100
`

const defaultIconSizeBasedOnBtnSize: Record<BtnSize, number> = {
  small: 16,
  medium: 24,
  large: 32,
}

const stylesSize: Record<BtnSize, string> = {
  small: "text-xs min-h-8 px-3 py-1",
  medium: "text-base min-h-10 px-4 py-2",
  large: "text-2xl min-h-12 px-5 py-3",
}

const stylesOnlyIconBasedOnBtnSize: Record<BtnSize, string> = {
  small: "h-8 w-8 p-0",
  medium: "h-10 w-10 p-0",
  large: "h-12 w-12 p-0",
}

const generateThemeStyles = (theme: BtnTheme, color: BtnColor): string => {
  if (theme === "primary") return "bg-neutral-1 text-neutral-5"

  if (color === "neutral") {
    if (theme === "outline") return "border-neutral-3 text-neutral-1"
    if (theme === "light") return "bg-neutral-4 text-neutral-1"
    if (theme === "ghost") return "bg-transpanent text-neutral-1"
  }

  if (theme === "secondary") return `bg-${color}-3 text-neutral-5`
  if (theme === "outline") return `border-${color}-3 text-${color}-3`
  if (theme === "light") return `bg-${color}-4 text-${color}-3`
  if (theme === "ghost") return `bg-transpanent text-${color}-3`

  return ""
}

const tellTailwindToCompileTheseStuff = (input: string) => input

tellTailwindToCompileTheseStuff(`
  bg-danger-3 bg-danger-4
  border-danger-3
  text-danger-3 text-danger-5

  bg-info-3 bg-info-4
  border-info-3
  text-info-3 text-info-5

  bg-neutral-1 bg-neutral-3 bg-neutral-4
  border-neutral-3
  text-neutral-1 text-neutral-5

  bg-success-3 bg-success-4
  border-success-3
  text-success-3 text-success-5

  bg-warning-3 bg-warning-4
  border-warning-3
  text-warning-3 text-warning-5
`)
