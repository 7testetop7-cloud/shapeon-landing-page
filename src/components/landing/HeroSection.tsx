import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Shield, Zap, Heart, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const trustItems = [
    { icon: Zap, text: "Acesso Imediato" },
    { icon: Shield, text: "Compra Segura" },
    { icon: Heart, text: "Satisfação Garantida" },
  ];

  return (
    <section className="relative overflow-hidden bg-background section-padding">
      <div className="absolute inset-0 bg-gradient-to-br from-green-light/30 via-transparent to-transparent" />
      
      <div className="container-custom relative px-6 sm:px-8">
        <div className="grid items-center justify-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text */}
          <div className="w-full max-w-full overflow-hidden text-center lg:text-left">
            <AnimatedSection>
              <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
                🚀 Método 2026
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="heading-xl mb-6 break-words text-foreground">
                Controle sua rotina, queime gordura e{" "}
                <span className="text-gradient">sinta-se bem</span> com o seu corpo em 2026!
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="mb-8 text-base text-muted-foreground sm:text-lg md:text-xl">
                Com o ShapeOn, você acessa treinos rápidos, desafios diários e mensagens que blindam sua mente. 
                <strong className="text-foreground"> Emagreça sem dietas malucas.</strong>
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <a href="#social-proof">
                <Button 
                  size="lg" 
                  className="animate-pulse-glow w-full max-w-full rounded-2xl bg-primary px-6 py-6 text-sm font-bold text-primary-foreground shadow-soft-lg transition-all hover:bg-primary-dark hover:shadow-soft-xl sm:px-8 sm:py-7 sm:text-lg sm:w-auto"
                >
                  QUERO EMAGRECER DE FORMA SAUDÁVEL
                </Button>
              </a>
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
          
          {/* Right Column - VSL Video */}
          <AnimatedSection delay={0.2} className="relative">
            <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl bg-black shadow-2xl">
              <video
                ref={videoRef}
                src="/videos/vsl.mov"
                autoPlay
                muted
                playsInline
                className="w-full"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                style={{ pointerEvents: "none" }}
              />
              {/* Controls overlay */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 bg-gradient-to-t from-black/70 to-transparent p-4">
                <button
                  onClick={togglePlay}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30"
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};