import { MessageCircle, Mail, Clock, MapPin } from 'lucide-react';

export default function Contato() {
  const phoneNumber = "5511999999999"; // Substitua pelo seu WhatsApp real
  const emailAddress = "contato@saintlumiere.com.br"; // Substitua pelo seu email real

  const handleWhatsAppGeneral = () => {
    const text = encodeURIComponent("Olá! Gostaria de falar com o atendimento da Saint Lumière.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <section 
      id="contato" 
      className="relative w-full bg-[#FFFFFF] text-black py-20 sm:py-28 selection:bg-black selection:text-white"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= DIVISOR INICIAL DELICADO ================= */}
        <div className="w-full h-[1px] bg-zinc-100 mb-16 sm:mb-24" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* ================= COLUNA ESQUERDA: IDENTIDADE & ATENDIMENTO ================= */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-400 uppercase block mb-2">
                CONECTE-SE CONOSCO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight text-zinc-950 mb-6">
                Atendimento <br className="hidden sm:inline" />Personalizado
              </h2>
              <p className="text-sm font-light text-zinc-500 leading-relaxed max-w-md">
                Seja para escolher a semijoia ideal, entender os detalhes de banho ou solicitar uma curadoria exclusiva, nossa equipe está disponível para guiar sua experiência.
              </p>
            </div>

            {/* INFO EXTRA (Horários / Origem) */}
            <div className="mt-12 space-y-4 border-l border-zinc-100 pl-4">
              <div className="flex items-center gap-3 text-zinc-500">
                <Clock size={14} strokeWidth={1.5} className="text-zinc-400" />
                <span className="text-xs font-light tracking-wide">Segunda a Sexta — 09h às 18h</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500">
                <MapPin size={14} strokeWidth={1.5} className="text-zinc-400" />
                <span className="text-xs font-light tracking-wide">São Paulo, Brasil</span>
              </div>
            </div>
          </div>

          {/* ================= COLUNA DIREITA: BOTÕES DE CANAL DIRETO ================= */}
          <div className="flex flex-col justify-center gap-4">
            
            {/* BOTÃO PRINCIPAL: WHATSAPP */}
            <button 
              onClick={handleWhatsAppGeneral}
              className="group/btn relative w-full h-16 bg-black text-white text-xs font-medium tracking-[0.2em] uppercase inline-flex items-center justify-between px-6 overflow-hidden cursor-pointer transition-colors duration-300"
            >
              <div className="flex items-center gap-3 relative z-10">
                <MessageCircle size={16} strokeWidth={1.5} />
                <span>Conversar via WhatsApp</span>
              </div>
              <span className="text-xs font-mono opacity-60 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10">→</span>
            </button>

            {/* BOTÃO SECUNDÁRIO: EMAIL */}
            <a 
              href={`mailto:${emailAddress}`}
              className="group/btn relative w-full h-16 bg-transparent text-black border border-zinc-200 text-xs font-medium tracking-[0.2em] uppercase inline-flex items-center justify-between px-6 overflow-hidden cursor-pointer hover:border-black transition-colors duration-500"
            >
              <div className="flex items-center gap-3">
                <Mail size={16} strokeWidth={1.5} className="text-zinc-400 group-hover/btn:text-black transition-colors duration-300" />
                <span>Enviar um E-mail</span>
              </div>
              <span className="text-xs font-mono text-zinc-400 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
            </a>

            {/* NOTA DE RODAPÉ DA SEÇÃO */}
            <p className="text-[10px] text-zinc-400 font-mono tracking-wide mt-4 text-center lg:text-left">
              * Respondemos a maioria das solicitações em até 1 hora útil.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}