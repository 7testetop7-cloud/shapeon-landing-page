import { AnimatedSection } from "@/components/AnimatedSection";
import { Timer, Flower, Brain, Users, Trophy, Apple } from "lucide-react";

const pillars = [
  { icon: Timer, title: "Treinos HIIT", description: "Máxima queima em mínimo tempo" },
  { icon: Flower, title: "Yoga & Alongamento", description: "Flexibilidade e relaxamento" },
  { icon: Brain, title: "Mindset Positivo", description: "Mentalidade de vencedor" },
  { icon: Users, title: "Comunidade VIP", description: "Apoio de milhares de membros" },
  { icon: Trophy, title: "Desafios Semanais", description: "Metas que motivam" },
  { icon: Apple, title: "Nutrição Inteligente", description: "Dicas práticas e fáceis" },
];

export const PillarsSection = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container-custom">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="heading-lg mb-4 text-foreground">
            Os 6 Pilares do <span className="text-gradient">Método ShapeOn</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Uma abordagem completa para sua transformação
          </p>
        </AnimatedSection>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={index} delay={index * 0.08}>
              <div className="card-hover flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-green-dark shadow-soft">
                  <pillar.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
