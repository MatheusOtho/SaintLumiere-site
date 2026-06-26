export default function Sobre() {
  return (
    <section 
      id="sobre" 
      className="relative w-full bg-[#FFFFFF] text-black py-20 sm:py-28 selection:bg-black selection:text-white border-b border-zinc-100 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* ================= COLUNA DA ESQUERDA: O MANIFESTO (7 COLUNAS) ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-400 uppercase block mb-3">
              A ESSÊNCIA DA MARCA
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-[-0.03em] text-zinc-950 mb-8 leading-[1.1]">
              Onde o minimalismo <br />
              encontra a atemporalidade.
            </h2>

            <div className="space-y-6 text-zinc-600 font-light text-sm sm:text-base leading-relaxed max-w-xl">
              <p>
                A Saint Lumière nasceu do desejo de traduzir a complexidade do mundo contemporâneo em linhas puras, formas orgânicas e detalhes silenciosos. Não acreditamos em excessos; acreditamos no design que respira e que permanece relevante através das estações.
              </p>
              <p className="text-zinc-500 text-sm">
                Cada semijoia de nossa curadoria passa por um processo rigoroso de banho e acabamento, unindo técnicas de alta joalharia a uma estética estritamente arquitetônica. São peças desenhadas para se tornarem extensões da sua própria identidade, capturando a luz de forma sutil e sofisticada.
              </p>
            </div>

            {/* ASSINATURA EDITORIAL */}
            <div className="mt-10 pt-8 border-t border-zinc-100 flex items-center gap-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-black uppercase block font-semibold">
                  SAINT LUMIÈRE ATELIER
                </span>
                <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">
                  Est. 2026 — Curadoria Conceitual
                </span>
              </div>
            </div>
          </div>

          {/* ================= COLUNA DA DIREITA: COMPOSIÇÃO DE IMAGEM (5 COLUNAS) ================= */}
          <div className="lg:col-span-5 w-full relative group/about">
            
            {/* Moldura conceitual de fundo */}
            <div className="absolute -inset-4 bg-zinc-50/50 -z-10 transition-transform duration-700 group-hover/about:scale-102" />

                {/* Imagem Proporção Vertical de Luxo */}
                <div className="w-full aspect-[3/4] bg-zinc-100 overflow-hidden border border-zinc-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)]">
                <img 
                    src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600" 
                    alt="Processo Criativo Minimalista" 
                    className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] brightness-[0.98] group-hover/about:grayscale-0 group-hover/about:scale-103 transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                </div>

            {/* Legenda discreta na borda da imagem */}
            <div className="absolute bottom-4 left-4 text-[9px] font-mono tracking-widest text-white/80 mix-blend-difference">
              MATIÈRE ET FORME
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}