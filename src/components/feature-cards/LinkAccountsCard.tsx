import { Eye, ArrowUpRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const espTargets = [
  { name: "SteveHunter99", status: "Игрок", distance: "12м", color: "bg-red-600" },
  { name: "CreeperSlayer", status: "Игрок", distance: "27м", color: "bg-orange-600" },
  { name: "DiamondMiner", status: "Игрок", distance: "41м", color: "bg-yellow-600" },
  { name: "NightWalker_X", status: "Игрок", distance: "58м", color: "bg-violet-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Eye className="h-5 w-5 text-violet-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">ESP — видишь всех</h3>
      <p className="mb-4 text-sm text-gray-400">Отображай игроков, мобов и предметы сквозь стены с точным расстоянием до цели</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {espTargets.map((target, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <div className={`h-9 w-9 rounded-full ${target.color} flex items-center justify-center`}>
                <Icon name="User" size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{target.name}</p>
                <p className="text-xs text-gray-500">{target.status}</p>
              </div>
            </div>
            <span className="text-xs text-violet-400 font-mono">{target.distance}</span>
          </div>
        ))}

        <div className="flex items-center justify-center gap-2 mt-2 py-1">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-gray-500">ESP активен</span>
        </div>
      </div>
    </div>
  )
}
