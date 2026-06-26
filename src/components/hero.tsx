import { useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  
  // Função auxiliar para fazer o scroll suave até as seções através do ID
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Compensa a altura exata da Header fixa
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Gera a data atual formatada de maneira elegante (Ex: 26 DE JUNHO DE 2026)
  const currentDateFormatted = useMemo(() => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date()).toUpperCase();
  }, []);

  return (
    <section id="inicio" className="relative w-full h-screen bg-[#FFFFFF] text-black overflow-hidden flex items-center justify-center pt-20 selection:bg-black selection:text-white">
      
      {/* 1. IMAGEM CONCEITUAL EM TELA CHEIA (Fundo Atmosférico Claro) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1920" 
          alt="Saint Lumière Atmosfera Luxo" 
          className="w-full h-full object-cover object-center filter grayscale opacity-[0.25] contrast-[1.1] transition-transform duration-[4000ms] ease-out scale-105"
        />
        {/* Camada de suavização para as bordas sumirem no branco puro do site */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/50 to-white" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* 2. CONTEÚDO CENTRALIZADO MONUMENTAL */}
      <div className="w-full max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        
        {/* Linha Editorial Minimalista */}
        <div className="h-[1px] w-12 bg-zinc-300 mb-8 animate-pulse" />
        
        {/* Título Imponente e Cinematográfico */}
        <h1 className="text-4xl sm:text-7xl md:text-8xl font-extralight tracking-[-0.04em] leading-[1.05] uppercase text-zinc-950 mb-8">
          Saint Lumière <br />
          <span className="font-serif italic font-normal md:text-6xl text-zinc-500 tracking-normal lowercase block mt-2">
            alta semijoaria contemporânea.
          </span>
        </h1>
        
        {/* Manifesto Curto */}
        <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed max-w-lg mb-12 tracking-wide">
            Descubra uma seleção exclusiva de semijoias banhadas a ouro e a prata, escolhidas para oferecer 
            qualidade, beleza e sofisticação em cada detalhe.
        </p>

        {/* CTAs Simétricos e Alinhados */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          <button 
            onClick={() => handleScrollTo('catalogo')}
            className="group relative inline-flex h-12 w-full sm:w-56 items-center justify-center rounded-none bg-zinc-950 text-[11px] font-medium tracking-[0.25em] uppercase text-white hover:bg-zinc-800 transition-colors duration-300 cursor-pointer focus:outline-none shadow-sm"
          >
            Explorar Acervo
            <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform duration-300 ml-2" />
          </button>
          
          <button 
            onClick={() => handleScrollTo('destaques')}
            className="inline-flex h-12 w-full sm:w-56 items-center justify-center rounded-none bg-transparent border border-zinc-200 text-[11px] font-medium tracking-[0.25em] uppercase text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 transition-colors duration-300 cursor-pointer focus:outline-none"
          >
            Ver Destaques
          </button>
        </div>

      </div>

      {/* 3. DATA DO DIA ATUAL EM TEMPO REAL (MUSEUM STYLE) */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[9px] font-mono tracking-[0.3em] text-zinc-400 uppercase whitespace-nowrap"
        aria-live="polite"
      >
        [ {currentDateFormatted} ]
      </div>

    </section>
  );
}