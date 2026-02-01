import { AnimatedSection } from "@/components/AnimatedSection";
import { Home, Zap, Smile } from "lucide-react";

const transformations = [
  {
    icon: Home,
    title: "Queime gordura em casa",
    description: "Sem academia, sem equipamentos caros. Apenas você, seu celular e 15 minutos do seu dia.",
  },
  {
    icon: Zap,
    title: "Mais energia no dia a dia",
    description: "Acorde disposto, trabalhe focado e ainda tenha energia para curtir sua família à noite.",
  },
  {
    icon: Smile,
    title: "Resultados sem sofrimento",
    description: "Nada de dietas restritivas ou treinos exaustivos. Método progressivo e sustentável.",
  },
];

export const TransformationSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="heading-lg mb-4 text-foreground">
            Transforme seu corpo com o <span className="text-gradient">ShapeOn</span>
          </h2>
        </AnimatedSection>
        
        <div className="mx-auto max-w-3xl space-y-6">
          {transformations.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div className="flex items-start gap-5 rounded-2xl border border-border/50 bg-card p-6 shadow-soft transition-all hover:border-primary/30 hover:shadow-soft-lg">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
