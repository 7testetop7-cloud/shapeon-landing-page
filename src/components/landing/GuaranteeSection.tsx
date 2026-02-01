import { AnimatedSection } from "@/components/AnimatedSection";
import { ShieldCheck } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container-custom">
        <AnimatedSection>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl bg-card p-8 shadow-soft-lg md:flex-row md:p-12">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-green-dark shadow-soft md:h-32 md:w-32">
              <ShieldCheck className="h-12 w-12 text-primary-foreground md:h-16 md:w-16" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                Garantia Incondicional de 30 Dias
              </h3>
              <p className="text-muted-foreground">
                Se você não gostar dos treinos, das mensagens motivacionais ou de qualquer aspecto da plataforma, 
                devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. 
                <strong className="text-foreground"> Você não tem nada a perder.</strong>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
