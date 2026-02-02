import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso de equipamentos para fazer os treinos?",
    answer: "Não! Todos os treinos do ShapeOn foram criados para serem feitos em casa, usando apenas o peso do seu corpo. Você não precisa de academia, halteres ou qualquer equipamento.",
  },
  {
    question: "Serve para iniciantes que nunca fizeram exercício?",
    answer: "Com certeza! O ShapeOn tem treinos para todos os níveis. Começamos do básico e você evolui no seu ritmo. Nossos vídeos são explicativos e nossos personal trainers mostram como fazer cada movimento de forma segura.",
  },
  {
    question: "Como acesso a plataforma depois da compra?",
    answer: "Imediatamente após a confirmação do pagamento, você recebe um email com seu login e senha. A plataforma funciona no computador, tablet e celular - onde você preferir.",
  },
  {
    question: "Os treinos são longos?",
    answer: "Não! A maioria dos treinos dura entre 15 e 30 minutos. Sabemos que você tem uma vida corrida, por isso criamos treinos curtos e intensos que cabem na sua rotina.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim! Você pode cancelar sua assinatura quando quiser, diretamente pela plataforma. Sem taxa de cancelamento, sem burocracia.",
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="heading-lg mb-4 text-foreground">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-2xl border border-border/50 bg-card px-6 shadow-soft data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline [&[data-state=open]>svg]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
