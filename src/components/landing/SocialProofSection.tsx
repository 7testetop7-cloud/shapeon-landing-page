import { AnimatedSection } from "@/components/AnimatedSection";
import { BadgeCheck } from "lucide-react";
import transformationImage from "@/assets/transformation-placeholder.png";

const testimonials = [
  { name: "Marina S.", location: "São Paulo", result: "-12kg em 3 meses" },
  { name: "Carlos R.", location: "Rio de Janeiro", result: "-8kg em 2 meses" },
  { name: "Ana Paula", location: "Belo Horizonte", result: "-15kg em 4 meses" },
];

export const SocialProofSection = () => {
  return (
    <section className="section-padding bg-secondary">
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
                    src={transformationImage} 
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
      </div>
    </section>
  );
};
