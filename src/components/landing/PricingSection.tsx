import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";

const plan = {
  name: "Acesso Vitalício",
  price: "R$ 29,90",
  originalPrice: "R$ 79,90",
  discount: "63% OFF",
  badge: "Oferta Especial",
  features: ["Acesso a todos os treinos", "Desafios diários", "Suporte por email"],
};

export const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="heading-lg mb-4 text-foreground">
            Comece <span className="text-gradient">2026 no Shape</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Investimento único para mudar sua vida
          </p>
        </AnimatedSection>
        
        <div className="mx-auto max-w-md">
          <AnimatedSection>
            <div className="card-hover relative flex flex-col rounded-3xl border-2 border-primary bg-card p-8 shadow-soft ring-4 ring-primary/10">
              <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-soft">
                <Crown className="h-4 w-4" />
                {plan.badge}
              </div>
              
              <div className="mb-6 text-center">
                <span className="mb-1 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                  {plan.discount}
                </span>
                <h3 className="mt-3 text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">Pagamento único</p>
              </div>
              
              <div className="mb-6 text-center">
                <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                </div>
              </div>
              
              <ul className="mb-6 flex-1 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="https://www.ggcheckout.com/checkout/v3/7RUumchQQBkJrSTF98AZ" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="animate-pulse-glow w-full rounded-xl bg-primary py-6 text-base font-bold text-primary-foreground hover:bg-primary-dark">
                  COMEÇAR AGORA
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
