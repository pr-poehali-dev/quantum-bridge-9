import { Sword, ArrowUpRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Sword className="h-5 w-5 text-violet-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">KillAura — автоатака</h3>
      <p className="mb-4 text-sm text-gray-400">Автоматически атакует ближайших врагов с настраиваемым радиусом, задержкой и фильтрацией целей</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-red-600/30 border border-red-600/50 flex items-center justify-center">
              <Icon name="Target" size={18} className="text-red-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Цель: Игроки</p>
              <p className="text-xs text-gray-500">3 цели в радиусе</p>
            </div>
          </div>
          <button className="text-sm text-violet-400 hover:text-violet-300">Изменить</button>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Режим атаки
          </label>
          <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <span className="text-sm text-white">Switch (обход NCP)</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <p className="mt-1 text-xs text-gray-500">Обходит NoCheatPlus и Spartan.</p>
        </div>

        <div className="border-t border-dashed border-[#333] pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f0f0f] border border-[#262626]">
                <Icon name="Sliders" size={18} className="text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Радиус: 3.8 блока</p>
                <p className="text-xs text-gray-500">CPS: 12–16 · Задержка: авто</p>
              </div>
            </div>
            <button className="text-sm text-violet-400 hover:text-violet-300">Настроить</button>
          </div>
        </div>

        <Button className="w-full bg-[#252525] text-gray-400 hover:bg-[#2a2a2a] hover:text-white">Применить</Button>
      </div>
    </div>
  )
}
