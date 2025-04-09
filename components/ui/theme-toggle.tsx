"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-[#f6f6f6] dark:hover:bg-[#2a2a2a] hover-lift"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-[#a8a8a8]" />
      ) : (
        <Sun className="h-5 w-5 text-[#a8a8a8]" />
      )}
    </button>
  )
} 