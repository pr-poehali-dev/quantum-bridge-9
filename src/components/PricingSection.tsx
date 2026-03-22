import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const plans = [
  {
    name: "Free",
    price: "0₽",
    period: "навсегда",
    description: "Базовые модули для старта",
    highlight: false,
    features: [
      { text: "ESP (игроки)", included: true },
      { text: "Speed базовый", included: true },
      { text: "Fullbright", included: true },
      { text: "KillAura", included: false },
      { text: "Fly", included: false },
      { text: "Приоритетные обновления", included: false },
      { text: "Поддержка Discord", included: false },
    ],
    cta: "Скачать бесплатно",
    ctaVariant: "outline" as const,
  },
  {
    name: "Premium",
    price: "299₽",
    period: "в месяц",
    description: "Полный набор для серьёзной игры",
    highlight: true,
    badge: "Популярный",
    features: [
      { text: "ESP (игроки + мобы)", included: true },
      { text: "Speed + Bhop", included: true },
      { text: "Fullbright", included: true },
      { text: "KillAura (Switch / NCP)", included: true },
      { text: "Fly (Vanilla обход)", included: true },
      { text: "Приоритетные обновления", included: true },
      { text: "Поддержка Discord", included: false },
    ],
    cta: "Купить Premium",
    ctaVariant: "default" as const,
  },
  {
    name: "VIP",
    price: "599₽",
    period: "в месяц",
    description: "Максимум возможностей + поддержка",
    highlight: false,
    features: [
      { text: "Все модули Premium", included: true },
      { text: "HvH-пакет (AutoBlock, Velocity)", included: true },
      { text: "Эксклюзивные скины GUI", included: true },
      { text: "Ранний доступ к модулям", included: true },
      { text: "Fly (Vanilla обход)", included: true },
      { text: "Приоритетные обновления", included: true },
      { text: "Личная поддержка Discord", included: true },
    ],
    cta: "Купить VIP",
    ctaVariant: "outline" as const,
  },
]

export function PricingSection() {
  return (
    <section className="px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Тарифы</h2>
          <p className="text-gray-400">Выбери план и начни играть на новом уровне</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col border ${
                plan.highlight
                  ? "bg-violet-600/10 border-violet-500/50 relative"
                  : "bg-[#141414] border-[#262626]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-500 mb-4">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-gray-500 mb-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Icon
                      name={feature.included ? "Check" : "X"}
                      size={16}
                      className={feature.included ? "text-violet-400" : "text-gray-600"}
                    />
                    <span className={`text-sm ${feature.included ? "text-gray-300" : "text-gray-600"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.ctaVariant}
                className={`w-full rounded-full ${
                  plan.highlight
                    ? "bg-violet-600 hover:bg-violet-700 text-white border-0"
                    : plan.ctaVariant === "outline"
                    ? "border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    : ""
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
