import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Suas importações de imagens
import carrossel1 from "../../assets/home/carrossel/banco-moon-e-poltrona-living.jpg";
import carrossel2 from "../../assets/home/carrossel/banco-moon-em-fibra.jpg";
import carrossel3 from "../../assets/home/carrossel/banco-tablet-em-fibra.jpg";
import carrossel4 from "../../assets/home/carrossel/cadeiras-eroticas-em-fibra.jpg";
import carrossel5 from "../../assets/home/carrossel/decoracao-natalina-em-fibra.jpg";
import carrossel6 from "../../assets/home/carrossel/decoracao-natalina-ursos-em-fibra.jpg";
import carrossel7 from "../../assets/home/carrossel/escorregador-em-fibra.jpg";
import carrossel8 from "../../assets/home/carrossel/letreiro-natalino-em-fibra.jpg";
import carrossel9 from "../../assets/home/carrossel/mesas-em-fibra-de-vidro.jpg";
import carrossel10 from "../../assets/home/carrossel/modulo-circular-em-fibra.jpg";
import carrossel11 from "../../assets/home/carrossel/paisagismo-em-fibra.jpg";
import carrossel12 from "../../assets/home/carrossel/poltrona-em-fibra-ball-e-quite.jpg";
import carrossel13 from "../../assets/home/carrossel/poltrona-living.jpg";
import carrossel14 from "../../assets/home/carrossel/poltrona-modelo-stone-em-fibra.jpg";
import carrossel15 from "../../assets/home/carrossel/poltrona-quite-e-banco-tablet.jpg";
import carrossel16 from "../../assets/home/carrossel/vasos-e-paisagismo-em-fibra.jpg";

const SLIDES = [
  { id: 1, img: carrossel1, title: "Banco Moon e Poltrona Living" },
  { id: 2, img: carrossel2, title: "Banco Moon em Fibra" },
  { id: 3, img: carrossel3, title: "Banco Tablet em Fibra" },
  { id: 4, img: carrossel4, title: "Cadeiras Exclusivas em Fibra" },
  { id: 5, img: carrossel5, title: "Decoração Natalina em Fibra" },
  { id: 6, img: carrossel6, title: "Decoração Ursos de Natal" },
  { id: 7, img: carrossel7, title: "Escorregador em Fibra" },
  { id: 8, img: carrossel8, title: "Letreiro Natalino Corporativo" },
  { id: 9, img: carrossel9, title: "Mesas em Fibra de Vidro" },
  { id: 10, img: carrossel10, title: "Módulo Circular Design" },
  { id: 11, img: carrossel11, title: "Paisagismo Conceito em Fibra" },
  { id: 12, img: carrossel12, title: "Poltrona Ball e Poltrona Quite" },
  { id: 13, img: carrossel13, title: "Poltrona Living" },
  { id: 14, img: carrossel14, title: "Poltrona Modelo Stone" },
  { id: 15, img: carrossel15, title: "Poltrona Quite e Banco Tablet" },
  { id: 16, img: carrossel16, title: "Vasos de Luxo e Paisagismo" },
];

export function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Auto-play configurado para 5 segundos (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  // Variantes ajustadas para um efeito de transição sutil e cinematográfico
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "30%" : "-30%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "30%" : "-30%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-16 selection:bg-zinc-900 selection:text-white">
      
      <div className="mb-10 text-center">
        <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.2em] block mb-2">Galeria de Projetos</span>
        <h2 className="text-3xl md:text-4xl font-black text-zinc-950 tracking-tight">Portfólio de nossas obras</h2>
      </div>

      <div className="relative h-[400px] md:h-[550px] w-full rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
        
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            // Transição linear baseada em tempo (tween) e com leve desaceleração (easeOut)
            transition={{ 
              x: { type: "tween", duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.6 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing flex flex-col justify-between"
          >
            <div className="w-full h-full relative">
              <img
                src={SLIDES[currentIndex].img}
                alt={SLIDES[currentIndex].title}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="absolute bottom-6 left-6 md:left-10 right-6 md:right-10 flex justify-between items-end text-white z-10 pointer-events-none">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 mb-1">Peça Exclusiva</span>
                <h3 className="text-xl md:text-2xl font-black tracking-tight">{SLIDES[currentIndex].title}</h3>
              </div>
              <span className="text-xs font-mono opacity-80 shrink-0">
                {(currentIndex + 1).toString().padStart(2, "0")} / {SLIDES.length.toString().padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200/50 items-center justify-center text-zinc-900 hover:bg-white shadow-md transition-all duration-200 active:scale-95"
          aria-label="Slide anterior"
        >
          <i className="fa-solid fa-chevron-left text-sm"></i>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200/50 items-center justify-center text-zinc-900 hover:bg-white shadow-md transition-all duration-200 active:scale-95"
          aria-label="Próximo slide"
        >
          <i className="fa-solid fa-chevron-right text-sm"></i>
        </button>
      </div>

      <div className="flex justify-center items-center gap-1.5 mt-6 overflow-x-auto py-2 px-4 max-w-full scrollbar-none">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 shrink-0 ${
              index === currentIndex ? "w-8 bg-zinc-950" : "w-2 bg-zinc-200 hover:bg-zinc-300"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Carrossel;