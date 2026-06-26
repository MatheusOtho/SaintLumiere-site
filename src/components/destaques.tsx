import { useState, useMemo } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  collection: string;
  material: string;
  image: string;
  description: string;
}

export default function Destaques() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const premiumProducts: Product[] = [
    {
      id: 1,
      name: "Colar Riviera Lumière",
      collection: "Édition Lumina 2026",
      material: "Banhado a Ouro 18k / Zircônias Calibradas",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1000",
      description: "Uma escultura linear fluida projetada para capturar a luz sob qualquer ângulo. Estrutura rígida com fecho invisível de alta joalheria."
    },
    {
      id: 2,
      name: "Brincos Orgânicos Solitaire",
      collection: "Elegância Estrutural",
      material: "Banhado a Ouro 18k / Acabamento Polido",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000",
      description: "Formas moldadas à mão que celebram a imperfeição da natureza. Uma peça leve de forte presença volumétrica e brilho espelhado."
    },
    {
      id: 3,
      name: "Bracelete Minimalist Arch",
      collection: "Lignes Pures",
      material: "Ródio Branco / Camada de Alta Densidade",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=1000",
      description: "Design arquitetônico que envolve o pulso com precisão milimétrica. Um manifesto de força expressado através do minimalismo."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === premiumProducts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? premiumProducts.length - 1 : prev - 1));
  };

  const activeProduct = useMemo(() => premiumProducts[currentIndex], [currentIndex]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id='destaques' className="relative w-full min-h-screen bg-[#FFFFFF] text-black flex items-center justify-center py-12 sm:py-2 selection:bg-black selection:text-white overflow-hidden border-b border-zinc-100">
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center z-10">
        
        {/* 1. IMAGEM (FOCO NO HOVER CINEMATOGRÁFICO) */}
        <div className="col-span-1 lg:col-span-7 order-1 lg:order-2 w-full flex justify-center lg:justify-end relative group/img">
          
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden xl:block text-[9px] font-mono tracking-[0.4em] text-zinc-300 [writing-mode:vertical-lr] uppercase select-none">
            SAINT LUMIÈRE // DESTAQUES
          </div>

          {/* Container Principal */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-sm aspect-[4/5] sm:aspect-[2/3] bg-zinc-50 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.01)] lg:shadow-[0_40px_90px_rgba(0,0,0,0.03)] border border-zinc-100 transition-all duration-700">
            
            {/* Cortina Física de Brilho sutil no Hover */}
            <div className="absolute inset-0 bg-black/[0.03] group-hover/img:bg-transparent z-10 transition-colors duration-700 pointer-events-none" />

            {/* Imagem com Zoom Líquido Ultra-Lento e Transição de Grayscale */}
            <img 
              src={activeProduct.image} 
              alt={activeProduct.name} 
              className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] brightness-[1.01] transition-all duration-[3500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-106 group-hover/img:filter-none group-hover/img:brightness-[0.98]"
            />

            {/* Carimbo Superior com Inversão Cromática e Desfoque */}
            <div className="absolute top-4 right-4 z-10 text-[8px] font-mono tracking-[0.25em] text-white bg-black/75 backdrop-blur-md px-3 py-1.5 uppercase transition-all duration-500 ease-out group-hover/img:bg-white group-hover/img:text-black group-hover/img:tracking-[0.35em]">
              SL
            </div>

            {/* Moldura Interna invisível que surge no Hover */}
            <div className="absolute inset-0 border border-white/0 group-hover/img:border-white/20 z-20 transition-all duration-700 pointer-events-none m-3" />

          </div>
        </div>

        {/* 2. TEXTOS EDITORIAIS */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left px-2 sm:px-0">
          
          <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.3em] text-zinc-400 uppercase mb-3 sm:mb-4">
            PEÇA {String(activeProduct.id).padStart(2, '0')} // {String(premiumProducts.length).padStart(2, '0')}
          </div>

          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.4em] uppercase text-zinc-400 block mb-2">
            {activeProduct.collection}
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extralight tracking-[-0.02em] lg:tracking-[-0.03em] leading-[1.15] text-zinc-950 mb-4 sm:mb-6">
            {activeProduct.name}
          </h2>

          <div className="text-[10px] sm:text-[11px] tracking-widest text-zinc-400 uppercase font-medium mb-5 sm:mb-6">
            {activeProduct.material}
          </div>

          {/* Divisor Líquido que expande quando o mouse entra na área de textos */}
          <div className="h-[1px] w-12 sm:w-16 bg-black mb-5 sm:mb-6 mx-auto lg:mx-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:group-hover/img:w-24" />

          <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed tracking-wide max-w-md lg:max-w-sm mb-8 sm:mb-12 mx-auto lg:mx-0">
            {activeProduct.description}
          </p>

          {/* 3. BOTÕES ERGONÔMICOS E REFINADOS */}
          <div className="flex items-center justify-center lg:justify-start gap-x-4">
            
            {/* Seta Anterior: Efeito Preenchimento Líquido Inverso */}
            <button
              onClick={prevSlide}
              className="group/btn w-12 h-12 inline-flex items-center justify-center border border-black/10 bg-white/60 backdrop-blur-md text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-none focus:outline-none cursor-pointer relative overflow-hidden"
              aria-label="Peça anterior"
            >
              <span className="absolute inset-0 bg-black translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <ArrowLeft size={14} strokeWidth={1.5} className="relative z-10 transition-transform duration-500 group-hover/btn:-translate-x-0.5 group-hover/btn:text-white" />
            </button>

            {/* Próxima Seta: Efeito Preenchimento Líquido Inverso */}
            <button
              onClick={nextSlide}
              className="group/btn w-12 h-12 inline-flex items-center justify-center border border-black/10 bg-white/60 backdrop-blur-md text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-none focus:outline-none cursor-pointer relative overflow-hidden"
              aria-label="Próxima peça"
            >
              <span className="absolute inset-0 bg-black translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <ArrowRight size={14} strokeWidth={1.5} className="relative z-10 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:text-white" />
            </button>

            {/* Link Textual: Efeito de Linha Expansível Infinita */}
            <button
              onClick={() => handleScrollTo('catalogo')}
              className="group/link relative h-12 text-[9px] sm:text-[10px] font-medium tracking-[0.25em] uppercase text-black ml-4 focus:outline-none cursor-pointer hidden sm:inline-flex items-center"
            >
              Ver catálogo completo
              <span className="absolute bottom-3 left-0 w-full h-[1px] bg-black/20" />
              <span className="absolute bottom-3 left-0 w-0 h-[1px] bg-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:w-full" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}