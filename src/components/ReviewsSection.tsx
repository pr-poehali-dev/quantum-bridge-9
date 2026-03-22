import Icon from "@/components/ui/icon"

const reviews = [
  {
    name: "xXDarkSlayer_228",
    server: "Funtime",
    avatar: "DS",
    color: "bg-red-600",
    rating: 5,
    text: "KillAura просто огонь, NCP даже не пикает. Играю уже 3 месяца — ни одного бана. Xentrix лучший клиент что я юзал.",
  },
  {
    name: "ProGamer_Kesha",
    server: "Spokytime",
    avatar: "PK",
    color: "bg-violet-600",
    rating: 5,
    text: "ESP работает идеально, видно всех сквозь стены. HvH-пакет в VIP вообще имба — никто не может меня убить. Советую всем!",
  },
  {
    name: "CreeperHunter99",
    server: "ReallyWorld",
    avatar: "CH",
    color: "bg-green-600",
    rating: 5,
    text: "Speed и Fly на ReallyWorld работают без единого детекта. Поддержка в Discord ответила за 5 минут и помогла с настройкой. 10/10.",
  },
  {
    name: "NightStalker_X",
    server: "MetaHvh",
    avatar: "NS",
    color: "bg-blue-600",
    rating: 5,
    text: "MetaHvh — сервак для читаков, античит там слабый, но даже на серьёзных серверах Xentrix не детектится. AutoBlock и Velocity в HvH просто имба.",
  },
  {
    name: "ShadowBlade_777",
    server: "HolyWorld",
    avatar: "SB",
    color: "bg-orange-600",
    rating: 4,
    text: "Клиент стабильный, обновления выходят часто. GUI удобный, всё настраивается гибко. Взял Premium — не пожалел ни разу.",
  },
  {
    name: "L1GHTN1NG",
    server: "CubixWorld",
    avatar: "LN",
    color: "bg-teal-600",
    rating: 5,
    text: "Fullbright + ESP = видишь всё. KillAura с Switch-режимом не детектится вообще. Лучший клиент на рынке, без вопросов.",
  },
]

export function ReviewsSection() {
  return (
    <section className="px-4 md:px-8 py-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-12 animate-fade-in-up"
          style={{ opacity: 0, animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Что говорят игроки</h2>
          <p className="text-gray-400">Тысячи довольных пользователей по всему СНГ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="rounded-2xl bg-[#141414] border border-[#262626] p-5 flex flex-col gap-4 card-hover animate-scale-in"
              style={{ animationDelay: `${0.1 * i}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-full ${review.color} flex items-center justify-center text-white text-xs font-bold`}>
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.server}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Icon
                      key={si}
                      name="Star"
                      size={12}
                      className={si < review.rating ? "text-violet-400 fill-violet-400" : "text-gray-700"}
                    />
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 flex items-center justify-center gap-8 animate-fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
        >
          {[
            { value: "12 000+", label: "активных игроков" },
            { value: "99.2%", label: "без банов" },
            { value: "4.9 / 5", label: "средняя оценка" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white shimmer-text">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}