import { AnimatedSection } from "@/components/AnimatedSection";
import { BadgeCheck } from "lucide-react";
import transformationMarina from "@/assets/transformation-marina.png";
import transformationCarlos from "@/assets/transformation-carlos.png";
import transformationAna from "@/assets/transformation-ana.png";
import chatScreenshotWoman from "@/assets/chat-screenshot-woman.jpg";
import chatScreenshot1 from "@/assets/chat-screenshot-1.jpg";
import chatScreenshot2 from "@/assets/chat-screenshot-2.jpg";

const testimonials = [
  { name: "Marina S.", location: "São Paulo", result: "-12kg em 3 meses", image: transformationMarina },
  { name: "Carlos R.", location: "Rio de Janeiro", result: "-8kg em 2 meses", image: transformationCarlos },
  { name: "Ana Paula", location: "Belo Horizonte", result: "-15kg em 4 meses", image: transformationAna },
];

export const SocialProofSection = () => {
  return (
    <section id="social-proof" className="section-padding bg-secondary">
      <div className="container-custom">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="heading-lg mb-4 text-foreground">
            Histórias <span className="text-gradient">Reais</span> de Sucesso
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Milhares de pessoas já transformaram suas vidas com o ShapeOn
          </p>
        </AnimatedSection>
        
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="card-hover group overflow-hidden rounded-2xl bg-card shadow-soft">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={`Transformação de ${testimonial.name}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Verificado
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-bold text-foreground">{testimonial.name}</span>
                    <span className="text-sm text-muted-foreground">{testimonial.location}</span>
                  </div>
                  <div className="inline-block rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-primary">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Chat Screenshots Section */}
        <AnimatedSection className="mt-12">
          <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
            {/* Left - Woman photo chat screenshot */}
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <img 
                src={chatScreenshotWoman} 
                alt="Depoimento de usuária" 
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Right - Two stacked screenshots */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <img 
                  src={chatScreenshot1} 
                  alt="Depoimento de usuária" 
                  className="w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <img 
                  src={chatScreenshot2} 
                  alt="Depoimento de usuária" 
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
