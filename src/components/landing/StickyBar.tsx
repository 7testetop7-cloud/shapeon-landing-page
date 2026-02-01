import { Timer } from "lucide-react";

export const StickyBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-green-darker py-2.5 text-center">
      <div className="container-custom flex items-center justify-center gap-2 text-sm font-medium text-primary-foreground md:text-base">
        <Timer className="h-4 w-4 animate-pulse" />
        <span>Comece sua transformação de 2026 agora! Oferta por tempo limitado.</span>
      </div>
    </div>
  );
};
