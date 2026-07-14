import React from "react";
import { motion } from "framer-motion";

// Suas importações de imagens personalizadas
import personalizado1 from "../../assets/home/personalizado/bancos-tablet.jpg";
import personalizado2 from "../../assets/home/personalizado/poltronas-stone.jpg";

export function Personalizacao() {
  return (
    <section className="py-15 bg-[#fafafa] relative overflow-hidden border-t border-zinc-100 selection:bg-zinc-900 selection:text-white">
      
      {/* Luz de fundo sutil */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-amber-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LADO ESQUERDO: Conteúdo e Texto (Centralizado em telas menores, esquerda no desktop) */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            <div className="space-y-5 flex flex-col items-center lg:items-start">
              {/* Tag Superior Minimalista e Polida */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200/60 text-zinc-500 text-[11px] font-bold tracking-wider uppercase rounded-md"
              >
                <i className="fa-solid fa-hammer text-[10px] text-amber-600"></i>
                <span>Projetos Personalizados</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-black text-zinc-950 tracking-tight leading-[1.15]"
              >
                Fabricamos sob <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600">
                  Medida e Encomenda
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0"
              >
                Tem um projeto específico ou precisa de dimensões exatas para o seu ambiente?
                Desenvolvemos peças exclusivas moldadas perfeitamente para a escala do seu projeto.
              </motion.p>
            </div>

            {/* Lista de Benefícios Premium (Mantém alinhamento fluido de conteúdo interno) */}
            <div className="space-y-5 w-full max-w-md lg:max-w-none">
              {[
                {
                  icon: "fa-ruler-combined",
                  title: "Dimensões Sob Demanda",
                  desc: "Ajuste milimétrico para se integrar perfeitamente à sua planta.",
                },
                {
                  icon: "fa-palette",
                  title: "Paleta e Textura Exclusivas",
                  desc: "Gama completa de acabamentos e cores sob especificação técnica.",
                },
                {
                  icon: "fa-wand-magic-sparkles",
                  title: "Engenharia de Projetos Únicos",
                  desc: "Suporte completo para transformar desenhos em realidade.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-3 sm:p-2 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-transparent hover:border-zinc-100 group"
                >
                  {/* Ícone */}
                  <div className="w-11 h-11 rounded-xl bg-zinc-100 text-zinc-800 group-hover:bg-zinc-950 group-hover:text-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                    <i className={`fa-solid ${item.icon} text-sm transition-transform duration-300 group-hover:scale-110`}></i>
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-zinc-950 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-500 leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Botão de Orçamento */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-2 w-full sm:w-auto text-center"
            >
              <a
                href="https://wa.me/5511980129528?text=Olá! Gostaria de fazer um pedido personalizado."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-zinc-950 hover:bg-zinc-900 active:scale-[0.99] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-xl shadow-zinc-950/10 transition-all duration-300"
              >
                <i className="fa-brands fa-whatsapp text-base text-emerald-400"></i>
                <span>Solicitar Projeto Especial</span>
              </a>
            </motion.div>
          </div>

          {/* LADO DIREITO: Moodboard Assimétrico */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[450px] md:h-[520px] w-full mt-6 lg:mt-0 select-none">
            
            {/* Imagem Principal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
              className="absolute left-0 top-0 w-[68%] h-[82%] rounded-3xl overflow-hidden border border-zinc-200/60 shadow-[0_30px_60px_rgba(0,0,0,0.06)] bg-zinc-100 z-10"
            >
              <div className="absolute inset-0 bg-black/[0.02] z-10 mix-blend-multiply" />
              <img
                src={personalizado1}
                alt="Bancos Tablet Personalizados"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Imagem Secundária Sobreposta */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 45, damping: 15, delay: 0.15 }}
              className="absolute right-0 bottom-0 w-[48%] h-[58%] rounded-3xl overflow-hidden border-4 border-[#fafafa] shadow-[0_40px_80px_rgba(0,0,0,0.12)] bg-zinc-100 z-20"
            >
              <div className="absolute inset-0 bg-black/[0.02] z-10 mix-blend-multiply" />
              <img
                src={personalizado2}
                alt="Poltronas Modelo Stone em ambiente de alto padrão"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Detalhe Geométrico */}
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-[radial-gradient(#e4e4e7_2px,transparent_2px)] [background-size:16px_16px] opacity-70 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Personalizacao;