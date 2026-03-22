import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <XentrixLogo />
        <span className="text-lg font-semibold text-white">
          XentrixRevolution<sup className="text-xs text-violet-400">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Возможности
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Модули <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Changelog
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Тарифы
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Discord
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        Скачать клиент
      </Button>
    </header>
  )
}

function XentrixLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L12 12L3 21" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M21 3L12 12L21 21" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="12" cy="12" r="2.5" fill="#8B5CF6" />
    </svg>
  )
}
