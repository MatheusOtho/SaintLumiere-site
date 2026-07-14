import React from "react";
import { motion } from "framer-motion";

// Interfaces para tipagem estrita
interface Especialidade {
  icon: string;
  title: string;
  desc: string;
}

interface ValorItem {
  label: string;
  desc: string;
}

const especialidades: Especialidade[] = [
  {
    icon: "fa-flask",
    title: "Vasos Premium",
    desc: "Fabricação de vasos e pratos com acabamento automotivo impecável e altíssima durabilidade contra intempéries.",
  },
  {
    icon: "fa-monument",
    title: "Móveis Especiais",
    desc: "Criação e engenharia de bancos, mesas, poltronas e espreguiçadeiras com design ergonômico sob encomenda.",
  },
  {
    icon: "fa-gem",
    title: "Moldagem Técnica",
    desc: "Desenvolvimento técnico de moldes complexos em silicone, fibra de vidro e fundições personalizadas estruturadas.",
  },
  {
    icon: "fa-paintbrush",
    title: "Restauração",
    desc: "Serviço artesanal especializado em reparação, pintura e revitalização estrutural de peças antigas em fibra.",
  },
];

const valores: ValorItem[] = [
  { label: "Excelência", desc: "Paixão absoluta por detalhes." },
  { label: "Compromisso", desc: "Transparência técnica e prazos à risca." },
  { label: "Respeito", desc: "Valorização humana e do meio ambiente." },
  { label: "Evolução", desc: "Aperfeiçoamento e melhoria contínua." },
];

export default function SobreNos(): React.JSX.Element {
  return (
    <section 
      id="sobrenos" 
      className="py-20 sm:py-28 bg-zinc-50 border-b border-zinc-200/50 relative overflow-hidden"
    >
      {/* Detalhes de iluminação sutil de fundo */}
      <div className="absolute left-1/3 top-1/4 w-[500px] h-[500px] bg-zinc-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
        
        {/* Header da Seção */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3.5 py-1.5 rounded-full">
            Nossa Essência
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mt-4 mb-4 tracking-tight">
            Quem <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Somos</span>
          </h1>
          <p className="text-zinc-500 text-base max-w-xl mx-auto leading-relaxed">
            Descubra a história, a estrutura e a paixão por trás da FiberGlass Móveis.
          </p>
        </motion.div>

        {/* Introdução: Grade de 2 Colunas Limpa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-20">
          
          {/* Card Empresa */}
          <motion.div 
            className="bg-white rounded-3xl border border-zinc-200/60 p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="bg-amber-500/10 w-11 h-11 rounded-2xl flex items-center justify-center text-amber-600">
                  <i className="fa-solid fa-store text-lg"></i>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
                  Nossa Empresa
                </h2>
              </div>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed text-justify">
                A <span className="font-bold text-zinc-800">FiberGlass Móveis</span> é uma empresa brasileira dedicada 
                ao setor moveleiro. Nossa missão é transformar projetos em móveis únicos, unindo perfeitamente 
                qualidade, design inovador e funcionalidade. Trabalhamos exclusivamente sob encomenda, garantindo soluções 
                sob medida e atendimento exclusivo para cada cliente.
              </p>
            </div>
          </motion.div>

          {/* Card O Que Fazemos */}
          <motion.div 
            className="bg-white rounded-3xl border border-zinc-200/60 p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="bg-amber-500/10 w-11 h-11 rounded-2xl flex items-center justify-center text-amber-600">
                  <i className="fa-solid fa-palette text-lg"></i>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
                  O que Fazemos?
                </h2>
              </div>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed text-justify">
                Somos especialistas no desenvolvimento e modelagem técnica de <span className="font-semibold text-zinc-800">móveis em fibra de vidro</span>, além de produzir <span className="font-semibold text-zinc-800">vasos sob medida</span> em grande escala ou personalizados. Atendemos com excelência escritórios de paisagismo, shoppings, condomínios, residências e jardins corporativos.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Especialidades em Grid Minimalista */}
        <div className="mb-24">
          <motion.h2 
            className="text-2xl font-bold text-zinc-900 mb-10 text-center tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Nossas <span className="text-amber-600">Especialidades</span>
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {especialidades.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="group bg-white rounded-2xl border border-zinc-200/60 p-6 hover:border-amber-500/30 hover:shadow-xl hover:shadow-zinc-200/30 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="bg-zinc-100/80 border border-zinc-200/20 group-hover:border-amber-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-50 text-zinc-700 group-hover:text-amber-600 transition-all duration-300">
                  <i className={`fa-solid ${item.icon} text-lg`}></i>
                </div>
                <h3 className="font-bold text-zinc-900 text-base mb-2 tracking-tight group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed text-left">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Os Pilares Institucionais */}
        <div>
          <motion.h2 
            className="text-2xl font-bold text-zinc-900 mb-10 text-center tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Pilares da <span className="text-amber-600">FiberGlass Móveis</span>
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            
            {/* Missão Card */}
            <motion.div 
              className="bg-white border border-zinc-200/60 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between"
              whileHover={{ y: -3 }}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="bg-zinc-900 w-10 h-10 rounded-xl flex items-center justify-center text-white">
                    <i className="fa-solid fa-bullseye text-sm"></i>
                  </div>
                  <h3 className="text-zinc-900 font-bold text-lg tracking-tight">Missão</h3>
                </div>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed text-justify">
                  Materializar ideias e transformar conceitos em soluções tridimensionais de excelência. Nosso compromisso é superar as expectativas dos clientes, entregando projetos sob encomenda com o mais alto padrão de acabamento.
                </p>
              </div>
            </motion.div>

            {/* Visão Card */}
            <motion.div 
              className="bg-white border border-zinc-200/60 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between"
              whileHover={{ y: -3 }}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="bg-zinc-900 w-10 h-10 rounded-xl flex items-center justify-center text-white">
                    <i className="fa-solid fa-eye text-sm"></i>
                  </div>
                  <h3 className="text-zinc-900 font-bold text-lg tracking-tight">Visão</h3>
                </div>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed text-justify">
                  Ser reconhecida nacionalmente como a principal referência no mercado de fabricação de móveis e vasos personalizados de fibra, destacando-se pela fidelidade milimétrica aos projetos corporativos e residenciais.
                </p>
              </div>
            </motion.div>

            {/* Valores Card */}
            <motion.div 
              className="bg-white border border-zinc-200/60 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between"
              whileHover={{ y: -3 }}
            >
              <div className="w-full">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="bg-zinc-900 w-10 h-10 rounded-xl flex items-center justify-center text-white">
                    <i className="fa-solid fa-heart text-sm"></i>
                  </div>
                  <h3 className="text-zinc-900 font-bold text-lg tracking-tight">Valores</h3>
                </div>
                
                <div className="space-y-3.5 pt-1 w-full">
                  {valores.map((val, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm">
                      <i className="fa-solid fa-circle-check text-emerald-500 mt-0.5 flex-shrink-0"></i>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        <span className="font-bold text-zinc-900">{val.label}:</span> {val.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}