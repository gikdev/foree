import styled from "@master/styled.react"
import type { Icon } from "@phosphor-icons/react"
import { Link } from "react-router"
import { useLocation } from "react-router"

export interface TabBarItem {
  path: string
  icon: Icon
  title: string
}

export interface TabBarProps {
  items: TabBarItem[]
}

export function TabBar({ items }: TabBarProps) {
  const { pathname } = useLocation()

  return (
    <div className="flex bg-neutral-4">
      {items.map(item => {
        const isActive = pathname === item.path
        const IconToRender = item.icon

        return (
          <StyledLink key={item.path} to={item.path} $isActive={isActive}>
            <IconToRender size={24} weight={isActive ? "fill" : "regular"} />
            <span>{item.title}</span>
          </StyledLink>
        )
      })}
    </div>
  )
}

const StyledLink = styled(Link)("grow shrink flex flex-col items-center py-2", p =>
  p.$isActive ? "text-neutral-5 font-bold bg-info-3" : "",
)
