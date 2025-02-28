import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./tailwind.css"

const container = document.getElementById("root") as HTMLDivElement
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
