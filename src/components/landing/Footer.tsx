import { AnimatedSection } from "@/components/AnimatedSection";
import { Shield, CreditCard, Lock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-50">
      <div className="container-custom">
        <AnimatedSection>
          <div className="mb-8 flex flex-col items-center gap-8 border-b border-gray-700 pb-8 md:flex-row md:justify-between">
            {/* Logo */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-gray-50">
                Shape<span className="text-primary">On</span>
              </h3>
              <p className="mt-1 text-sm text-gray-200">
                Sua transformação começa aqui
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2">
                <Lock className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-100">Site Seguro</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2">
                <CreditCard className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-100">Pix & Cartão</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-100">Compra Protegida</span>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-200">
            <a href="#" className="transition-colors hover:text-primary">Termos de Uso</a>
            <a href="#" className="transition-colors hover:text-primary">Política de Privacidade</a>
            <a href="#" className="transition-colors hover:text-primary">Suporte</a>
            <a href="#" className="transition-colors hover:text-primary">Contato</a>
          </div>
          
          {/* Copyright */}
          <p className="text-center text-sm text-gray-200">
            © 2026 ShapeOn. Todos os direitos reservados.
          </p>
        </AnimatedSection>
      </div>
    </footer>
  );
};
