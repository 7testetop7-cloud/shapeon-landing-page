import { AnimatedSection } from "@/components/AnimatedSection";
import { Play, MessageCircle, Star, Users } from "lucide-react";
import appShowcaseMockup from "@/assets/app-showcase-mockup.png";

const features = [
  { icon: Play, title: "Treinos com Profissionais", description: "Profissionais te guiam em cada movimento" },
  { icon: MessageCircle, title: "Mensagens Motivacionais", description: "Mensagens diárias para blindar sua mente" },
  { icon: Star, title: "Grupo de Apoio", description: "Comunidade ativa 24h por dia" },
  { icon: Star, title: "Conteúdo Exclusivo", description: "Novos treinos toda semana" },
];

export const AppShowcaseSection = () => {
  return (
    <section className="section-padding overflow-hidden bg-background">
      <div className="container-custom">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="heading-lg mb-4 text-foreground">
            Seu Personal Trainer e Coach <span className="text-gradient">de Bolso</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Tudo o que você precisa para emagrecer, na palma da sua mão
          </p>
        </AnimatedSection>
        
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Features List */}
          <div className="order-2 lg:order-1">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="card-hover rounded-2xl border border-border/50 bg-card p-5 shadow-soft">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-1 font-bold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          
          {/* Phone Mockup */}
          <AnimatedSection className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xs">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-green-light blur-3xl" />
              <img 
                src={appShowcaseMockup} 
                alt="ShapeOn App" 
                className="relative z-10 mx-auto drop-shadow-2xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
