import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Shield, Zap, Heart } from "lucide-react";
import iphoneMockup from "@/assets/iphone-mockup.png";

export const HeroSection = () => {
  const trustItems = [
    { icon: Zap, text: "Acesso Imediato" },
    { icon: Shield, text: "Compra Segura" },
    { icon: Heart, text: "Satisfação Garantida" },
  ];

  return (
    <section className="relative overflow-hidden bg-background section-padding">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-light/30 via-transparent to-transparent" />
      
      <div className="container-custom relative px-6 sm:px-8">
        <div className="grid items-center justify-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            <AnimatedSection>
              <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
                🚀 Método 2026
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="heading-xl mb-6 text-foreground">
                Controle sua rotina, queime gordura e{" "}
                <span className="text-gradient">sinta-se bem</span> com o seu corpo em 2026!
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Com o ShapeOn, você acessa treinos rápidos, desafios diários e mensagens que blindam sua mente. 
                <strong className="text-foreground"> Emagreça sem dietas malucas.</strong>
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <Button 
                size="lg" 
                className="animate-pulse-glow w-full rounded-2xl bg-primary px-8 py-7 text-lg font-bold text-primary-foreground shadow-soft-lg transition-all hover:bg-primary-dark hover:shadow-soft-xl sm:w-auto"
              >
                QUERO EMAGRECER DE FORMA SAUDÁVEL
              </Button>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                {trustItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          
          {/* Right Column - Image */}
          <AnimatedSection delay={0.2} className="relative">
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-green-light blur-3xl" />
              
              <img 
                src={iphoneMockup} 
                alt="ShapeOn App Interface" 
                className="relative z-10 mx-auto animate-float drop-shadow-2xl"
              />
              
              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 z-20 rounded-2xl bg-card p-3 shadow-soft-lg md:-left-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Treino de hoje</p>
                    <p className="text-sm font-bold text-foreground">15 min HIIT</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 z-20 rounded-2xl bg-card p-3 shadow-soft-lg md:-right-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-light">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sequência</p>
                    <p className="text-sm font-bold text-foreground">7 dias 🔥</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
