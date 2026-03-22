import { LinkAccountsCard } from "@/components/feature-cards/LinkAccountsCard"
import { PaymentRolesCard } from "@/components/feature-cards/PaymentRolesCard"
import { SendFundsCard } from "@/components/feature-cards/SendFundsCard"

export function FeaturesSection() {
  return (
    <section className="px-4 md:px-8 py-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <div className="animate-scale-in card-hover" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
          <LinkAccountsCard />
        </div>
        <div className="animate-scale-in card-hover" style={{ animationDelay: "0.25s", opacity: 0, animationFillMode: "forwards" }}>
          <PaymentRolesCard />
        </div>
        <div className="animate-scale-in card-hover" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
          <SendFundsCard />
        </div>
      </div>
    </section>
  )
}