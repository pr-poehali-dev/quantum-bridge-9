import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center relative z-10">
      <div
        className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-2 animate-fade-in-down"
        style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
      >
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-400">v2.0 ВЫШЕЛ</span>
        <span className="text-gray-300">Новый движок обхода античита — BladeSilent 2.0</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </div>

      <h1
        className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance shimmer-text animate-fade-in-up"
        style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
      >
        Чит-клиент нового поколения для Minecraft
      </h1>

      <p
        className="mb-8 max-w-xl text-gray-400 animate-fade-in-up"
        style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
      >
        ESP, KillAura, Fly, AutoClicker и десятки других модулей — всё в одном клиенте с обходом всех популярных античитов.
      </p>

      <div
        className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up"
        style={{ animationDelay: "0.55s", opacity: 0, animationFillMode: "forwards" }}
      >
        <Button className="rounded-full bg-violet-600 px-6 hover:bg-violet-700 text-white glow-violet transition-all duration-300 hover:scale-105">
          Скачать бесплатно <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105">
          <Play className="mr-2 h-4 w-4 fill-violet-500 text-violet-500" /> Смотреть обзор
        </Button>
      </div>

      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-glow-pulse"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
        />
      </div>
    </section>
  )
}