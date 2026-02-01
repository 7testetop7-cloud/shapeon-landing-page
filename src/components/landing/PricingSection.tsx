import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "Iniciante",
    period: "Mensal",
    price: "R$ 29,90",
    originalPrice: "R$ 49,90",
    discount: "40% OFF",
    features: ["Acesso a todos os treinos", "Desafios diários", "Suporte por email"],
    highlighted: false,
  },
  {
    name: "Focado",
    period: "Semestral",
    price: "R$ 19,90",
    priceNote: "/mês",
    originalPrice: "R$ 299,40",
    totalPrice: "R$ 119,40",
    discount: "60% OFF",
    badge: "Mais Vendido",
    features: ["Tudo do plano Iniciante", "Comunidade VIP", "Áudios motivacionais", "Nutrição inteligente"],
    highlighted: true,
  },
  {
    name: "Transformação Total",
    period: "Anual",
    price: "R$ 14,90",
    priceNote: "/mês",
    originalPrice: "R$ 598,80",
    totalPrice: "R$ 178,80",
    discount: "70% OFF",
    features: ["Tudo do plano Focado", "Mentoria em grupo", "Acesso vitalício a bônus", "Prioridade no suporte"],
    highlighted: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="heading-lg mb-4 text-foreground">
            Escolha seu Plano e Comece <span className="text-gradient">2026 no Shape</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Investimento menor que um lanche por dia para mudar sua vida
          </p>
        </AnimatedSection>
        
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div 
                className={`card-hover relative flex h-full flex-col rounded-3xl p-6 shadow-soft ${
                  plan.highlighted 
                    ? "border-2 border-primary bg-card ring-4 ring-primary/10" 
                    : "border border-border/50 bg-card"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-soft">
                    <Crown className="h-4 w-4" />
                    {plan.badge}
                  </div>
                )}
                
                <div className="mb-6 text-center">
                  <span className="mb-1 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                    {plan.discount}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                </div>
                
                <div className="mb-6 text-center">
                  <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                    {plan.priceNote && (
                      <span className="text-muted-foreground">{plan.priceNote}</span>
                    )}
                  </div>
                  {plan.totalPrice && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      ou {plan.totalPrice} à vista
                    </p>
                  )}
                </div>
                
                <ul className="mb-6 flex-1 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full rounded-xl py-6 text-base font-bold ${
                    plan.highlighted 
                      ? "animate-pulse-glow bg-primary text-primary-foreground hover:bg-primary-dark" 
                      : "bg-foreground text-background hover:bg-gray-800"
                  }`}
                >
                  COMEÇAR AGORA
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
