import { AnimatedSection } from "@/components/AnimatedSection";
import { Brain, Flame, Gamepad2, Battery } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Reduz a Ansiedade",
    description: "Mensagens motivacionais diárias para evitar compulsão alimentar e manter o foco.",
  },
  {
    icon: Flame,
    title: "Acelera o Metabolismo",
    description: "Treinos HIIT de 15 minutos que queimam calorias mesmo após o exercício.",
  },
  {
    icon: Gamepad2,
    title: "Combate o Sedentarismo",
    description: "Desafios gamificados que viciam e transformam exercício em diversão.",
  },
  {
    icon: Battery,
    title: "Aumenta a Energia",
    description: "Rotinas de ativação matinal para você começar o dia com disposição máxima.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="heading-lg mb-4 text-foreground">
            Como o ShapeOn vai mudar seu <span className="text-gradient">2026?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Uma plataforma completa para transformar seu corpo e sua mente
          </p>
        </AnimatedSection>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="card-hover group h-full rounded-2xl bg-card p-6 shadow-soft">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent transition-colors group-hover:bg-primary">
                  <benefit.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
