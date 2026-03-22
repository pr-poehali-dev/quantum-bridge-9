import { Zap, ArrowUpRight, ChevronDown } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import Icon from "@/components/ui/icon"

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Zap className="h-5 w-5 text-violet-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Speed & Fly — движение</h3>
      <p className="mb-4 text-sm text-gray-400">Перемещайся по серверу быстрее всех — с настройкой скорости, полётом и обходом античита</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
          <div className="flex items-center gap-3">
            <Icon name="Wind" size={20} className="text-gray-500" />
            <div>
              <p className="text-sm font-medium text-white">Режим Speed</p>
              <p className="text-xs text-gray-500">Античит: Spartan, NCP</p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Скорость передвижения
          </label>
          <div className="flex items-center rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <Icon name="Gauge" size={16} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="2.5"
              defaultValue="2.5"
              className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-sm"
            />
            <span className="text-gray-500 text-xs">блок/сек</span>
          </div>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Режим полёта <span className="text-violet-400">*</span>
          </label>
          <div className="relative">
            <div className="w-full rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5 flex items-center justify-between cursor-pointer">
              <span className="text-sm text-gray-300">Vanilla (тихий обход)</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-gray-400">Автоотключение при детекте</span>
          <Switch defaultChecked className="data-[state=checked]:bg-violet-600" />
        </div>
      </div>
    </div>
  )
}
