import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { PricingSection } from "@/components/PricingSection"
import { ParticlesBackground } from "@/components/ParticlesBackground"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <PartnersSection />
        <FeaturesSection />
        <PricingSection />
        <footer className="py-8 text-center text-sm text-gray-400">
          ESP, KillAura, Speed, Fly и десятки модулей —{" "}
          <span className="font-medium text-white">всё в одном клиенте XentrixRevolution.</span>
        </footer>
      </div>
    </main>
  )
}