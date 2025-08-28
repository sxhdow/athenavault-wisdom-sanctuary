import { Palette, Monitor, Terminal, Scroll } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/ThemeProvider"

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  const themes = [
    {
      value: "modern-dark" as const,
      label: "Modern Dark",
      icon: Monitor,
      description: "Clean & elegant"
    },
    {
      value: "retro-terminal" as const,
      label: "Retro Terminal", 
      icon: Terminal,
      description: "Green phosphor"
    },
    {
      value: "parchment" as const,
      label: "Ancient Parchment",
      icon: Scroll,
      description: "Warm & vintage"
    }
  ]

  const currentTheme = themes.find(t => t.value === theme)
  const CurrentIcon = currentTheme?.icon || Monitor

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <CurrentIcon className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon
          return (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value)}
              className={`cursor-pointer ${theme === themeOption.value ? 'bg-accent' : ''}`}
            >
              <Icon className="mr-2 h-4 w-4" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">{themeOption.label}</span>
                <span className="text-xs text-muted-foreground">{themeOption.description}</span>
              </div>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}