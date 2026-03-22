import Icon from "@/components/ui/icon"

const servers = [
  { name: "Hypixel", icon: "Globe" },
  { name: "MineClub", icon: "Sword" },
  { name: "CubeCraft", icon: "Box" },
  { name: "Mineplex", icon: "Layers" },
  { name: "GommeHD", icon: "Zap" },
  { name: "FunCraft", icon: "Star" },
  { name: "2b2t", icon: "Skull" },
]

export function PartnersSection() {
  return (
    <section className="flex flex-col items-center px-4 py-8 gap-3">
      <p className="text-xs text-gray-500 uppercase tracking-widest">Работает на популярных серверах</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {servers.map((server) => (
          <div key={server.name} className="flex items-center gap-2 text-gray-500">
            <Icon name={server.icon as "Globe"} size={16} />
            <span className="text-sm font-medium">{server.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
