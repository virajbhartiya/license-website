import { Button } from '@/components/ui/button'

import { useTheme } from '@/components/theme-provider'
import { Moon, Sun } from 'lucide-react'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="flex flex-row justify-between">
      <Button
        variant="ghost"
        size="icon"
        className="ghost"
        onClick={() => setTheme('light')}
      >
        <Sun className="h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Sun className="absolute h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="ghost"
        onClick={() => setTheme('dark')}
      >
        <Moon className="h-[1.1rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100" />
        <Moon className="absolute h-[1.1rem] w-[1.2rem] rotate-90 scale-100 transition-all dark:rotate-0 dark:scale-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
