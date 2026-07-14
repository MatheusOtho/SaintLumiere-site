import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Suas importações de imagens com os caminhos corretos
import heroImg1 from "../../assets/home/hero/decoracao-bolas-natalinas.png"; 
import heroImg2 from "../../assets/home/hero/poltrona-modelo-stone.png";  

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    
    const timer: ReturnType<typeof setInterval> = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

function Hero() {
  return (
    // h-screen garante que tudo fica cravado no campo de visão inicial do usuário
    <section className="relative h-screen min-h-[650px] lg:min-h-[750px] flex items-center justify-center pt-35 md:pt-20 bg-white overflow-hidden selection:bg-zinc-900 selection:text-white">
      
      {/* IMAGEM DA ESQUERDA - Poltrona Modelo Stone (Sem efeito de hover) */}
      <motion.div
        className="absolute left-4 xl:left-12 top-1/2 -translate-y-1/2 z-0 hidden xl:block select-none"
        initial={{ opacity: 0, x: -100, rotate: -6 }}
        animate={{ opacity: 1, x: 0, rotate: -3 }}
        transition={{
          duration: 1.4,
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
      >
        <div className="relative p-6 bg-zinc-50/50 backdrop-blur-md rounded-3xl border border-zinc-100 shadow-[0_30px_70px_rgba(0,0,0,0.06)]">
          <img
            src={heroImg2}
            alt="Poltrona Modelo Stone"
            className="w-[260px] xl:w-[290px] h-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.05)] brightness-[1.01]"
          />
          <span className="absolute bottom-4 left-6 text-[10px] font-bold text-zinc-400 tracking-wider uppercase">Poltrona Stone</span>
        </div>
      </motion.div>

      {/* IMAGEM DA DIREITA - Decoração Bolas Natalinas (Sem efeito de hover) */}
      <motion.div
        className="absolute right-4 xl:right-12 top-1/2 -translate-y-1/2 z-0 hidden xl:block select-none"
        initial={{ opacity: 0, x: 100, rotate: 6 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{
          duration: 1.4,
          delay: 0.1,
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
      >
        <div className="relative p-6 bg-zinc-50/50 backdrop-blur-md rounded-3xl border border-zinc-100 shadow-[0_30px_70px_rgba(0,0,0,0.06)]">
          <img
            src={heroImg1}
            alt="Decoração Bolas Natalinas"
            className="w-[200px] xl:w-[230px] h-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.05)] brightness-[1.01]"
          />
          <span className="absolute bottom-4 right-6 text-[10px] font-bold text-zinc-400 tracking-wider uppercase">Bolas Natalinas</span>
        </div>
      </motion.div>

      {/* Iluminação de Estúdio Sutil de Fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-100/60 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-amber-500/[0.03] rounded-full blur-[100px]" />
      </div>

      {/* CONTEÚDO CENTRAL */}
      <div className="container mx-auto px-4 relative z-10 w-full max-w-4xl">
        <div className="text-center flex flex-col items-center">
          
          <motion.p
            className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            FiberGlass <span className="text-zinc-900 font-medium">Móveis</span>
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 mb-6 leading-[1.15] tracking-tight max-w-2xl"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transforme seu espaço com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500 block sm:inline">
              elegância e durabilidade.
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Criamos bancos, mesas, poltronas, decorações e vasos personalizados para paisagismo. Qualidade comprovada para transformar{" "}
            <span className="font-semibold text-zinc-900">
              jardins, playgrounds, áreas externas e internas, condomínios, casas e shoppings.
            </span>
          </motion.p>

          {/* GRID DE CONTADORES */}
          <motion.div
            className="grid grid-cols-3 w-full max-w-2xl mx-auto gap-4 md:gap-8 mb-7 border-y border-zinc-100 py-5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-extrabold text-amber-600 tracking-tight">
                <Counter end={150} suffix="+" />
              </span>
              <span className="text-zinc-400 text-[11px] font-medium mt-1 block">
                Projetos Entregues
              </span>
            </div>

            <div className="text-center border-x border-zinc-100">
              <span className="block text-2xl md:text-3xl font-extrabold text-amber-600 tracking-tight">
                <Counter end={10} suffix="+" />
              </span>
              <span className="text-zinc-400 text-[11px] font-medium mt-1 block">
                Anos no Mercado
              </span>
            </div>

            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-extrabold text-amber-600 tracking-tight">
                <Counter end={110} suffix="+" />
              </span>
              <span className="text-zinc-400 text-[11px] font-medium mt-1 block">
                Clientes Satisfeitos
              </span>
            </div>
          </motion.div>

          {/* BOTÃO DE CONVERSÃO */}
          <motion.a
            href="https://wa.me/5511999474730?text=Olá! Gostaria de conversar sobre um projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-zinc-950 hover:bg-zinc-900 active:scale-[0.99] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 shadow-xl shadow-zinc-950/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
            <i className="fa-brands fa-whatsapp text-emerald-400 text-base"></i>
            <span>Falar com consultor</span>
          </motion.a>

        </div>
      </div>

    </section>
  );
}

export default Hero;