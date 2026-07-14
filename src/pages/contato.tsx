import React from "react";
import { motion } from "framer-motion";

interface SocialLink {
  href: string;
  icon: string;
  label: string;
  bgHover: string;
}

const socialLinks: SocialLink[] = [
//   {
//     href: "https://facebook.com/fiberglassmoveis",
//     icon: "fa-facebook-f",
//     label: "Acesse nosso Facebook",
//     bgHover: "hover:bg-blue-600 hover:border-blue-600",
//   },
  {
    href: "https://www.instagram.com/fiberglass.moveis?igsh=MThoYXc5dXpwbmE1Yw==",
    icon: "fa-instagram",
    label: "Siga nosso Instagram",
    bgHover: "hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-600 hover:border-transparent",
  },
  {
    href: "https://wa.me/5511999474730",
    icon: "fa-whatsapp",
    label: "Chame no WhatsApp",
    bgHover: "hover:bg-emerald-500 hover:border-emerald-500",
  },
];


export default function Contato(): React.JSX.Element {
  return (
    <section
      id="contato"
      className="py-20 md:py-31 bg-zinc-50 border-t border-zinc-200/60 relative overflow-hidden"
    >
      {/* Luz decorativa sutil de fundo */}
      <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-[300px] h-[300px] bg-zinc-100 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* COLUNA 1: INSTITUCIONAL & TEXTO */}
          <motion.div
            className="lg:col-span-5 space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full">
                Atendimento Exclusivo
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                Vamos construir algo{" "}
                <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                  incrível juntos?
                </span>
              </h2>
            </div>

            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Estamos prontos para tirar seu projeto do papel. Escolha o
              canal de sua preferência e fale diretamente com a nossa equipe.
            </p>

            {/* Bloco de Assinatura (Desktop) */}
            <div className="pt-2 hidden lg:block border-l-2 border-amber-500/20 pl-4">
              <p className="text-zinc-500 italic text-sm leading-relaxed">
                "Design, durabilidade e elegância moldados para o seu ambiente."
              </p>
              <p className="text-zinc-800 font-bold text-sm mt-1">
                — Equipe FiberGlass Móveis
              </p>
            </div>

            {/* Redes Sociais */}
            <div className="pt-6 border-t border-zinc-200/80">
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-4">
                Siga nossas novidades
              </p>
              <div className="flex justify-center lg:justify-start gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-11 h-11 bg-white border border-zinc-200/80 rounded-2xl flex items-center justify-center text-zinc-600 hover:text-white ${social.bgHover} shadow-sm transition-all duration-300`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`fa-brands ${social.icon} text-lg`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* COLUNA 2: CARDS DE CANAIS DE CONTATO */}
          <address className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full not-italic">
            <motion.div
              className="sm:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* CARD WHATSAPP */}
              <motion.a
                href="https://wa.me/5511999474730?text=Olá! Gostaria de conversar sobre um projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-3xl shadow-lg shadow-emerald-500/10 border border-emerald-400/20 group w-full"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-105">
                    <i className="fa-brands fa-whatsapp text-white text-3xl"></i>
                  </div>
                  <div className="text-left">
                    <span className="block font-extrabold text-lg tracking-tight">
                      Conversar no WhatsApp
                    </span>
                    <span className="text-white/85 text-xs sm:text-sm font-medium block mt-0.5">
                      Dúvidas rápidas, catálogos e orçamentos
                    </span>
                  </div>
                </div>
                <i className="fa-solid fa-arrow-right text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all"></i>
              </motion.a>
            </motion.div>

            {/* CARD TELEFONE */}
            <motion.a
              href="tel:11946822225"
              className="flex items-center gap-4 p-5 bg-white border border-zinc-200 rounded-2xl shadow-sm group text-left transition-all"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{
                y: -4,
                borderColor: "#d97706",
                boxShadow: "0 10px 20px -10px rgba(0,0,0,0.05)",
              }}
            >
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-700 transition-colors group-hover:bg-amber-50 group-hover:text-amber-600">
                <i className="fa-solid fa-phone text-lg"></i>
              </div>
              <div>
                <span className="block font-bold text-zinc-800 text-sm sm:text-base">
                  Ligue para nós
                </span>
                <span className="text-zinc-500 font-semibold text-xs mt-0.5 block">
                  (11) 94682-2225
                </span>
              </div>
            </motion.a>

            {/* CARD EMAIL */}
            <motion.a
              href="mailto:fiberglass.moveis@gmail.com"
              className="flex items-center gap-4 p-5 bg-white border border-zinc-200 rounded-2xl shadow-sm group text-left transition-all"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{
                y: -4,
                borderColor: "#d97706",
                boxShadow: "0 10px 20px -10px rgba(0,0,0,0.05)",
              }}
            >
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-700 transition-colors group-hover:bg-amber-50 group-hover:text-amber-600">
                <i className="fa-solid fa-envelope text-lg"></i>
              </div>
              <div className="overflow-hidden">
                <span className="block font-bold text-zinc-800 text-sm sm:text-base">
                  E-mail corporativo
                </span>
                <span className="text-zinc-500 font-semibold text-xs mt-0.5 block truncate">
                  fiberglass.moveis@gmail.com
                </span>
              </div>
            </motion.a>
          </address>
        </div>

        {/* Rodapé Interno da Seção (Mobile Only) */}
        <div className="mt-12 pt-8 border-t border-zinc-200/80 lg:hidden text-center space-y-1">
          <p className="text-zinc-500 italic text-sm">
            "Design, durabilidade e elegância moldados para o seu ambiente."
          </p>
          <p className="text-amber-600 font-bold text-sm">
            — Equipe FiberGlass Móveis
          </p>
        </div>
      </div>
    </section>
  );
}