import { AnimatedSection } from "@/components/AnimatedSection";
import { Star } from "lucide-react";

const users = [
  { name: "Julia M.", avatar: "JM" },
  { name: "Pedro H.", avatar: "PH" },
  { name: "Camila S.", avatar: "CS" },
  { name: "Rafael A.", avatar: "RA" },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="heading-lg mb-4 text-foreground">
            O que nossos <span className="text-gradient">membros</span> dizem
          </h2>
        </AnimatedSection>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          {users.map((user, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="card-hover flex flex-col items-center rounded-2xl bg-card p-6 shadow-soft">
                <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-green-dark text-2xl font-bold text-primary-foreground shadow-soft">
                  {user.avatar}
                </div>
                <p className="mb-2 font-semibold text-foreground">{user.name}</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
