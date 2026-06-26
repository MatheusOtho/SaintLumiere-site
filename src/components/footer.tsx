import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#FFFFFF] text-black pt-16 pb-8 border-t border-zinc-100 selection:bg-black selection:text-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SEÇÃO PRINCIPAL (4 COLUNAS) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 mb-16">
          
          {/* COLUNA 1: IDENTIDADE DA MARCA */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-extralight tracking-[0.1em] text-zinc-950 uppercase leading-none">
                SAINT LUMIÈRE
              </h3>
              <span className="text-[9px] font-mono tracking-[0.15em] text-zinc-400 uppercase mt-2 block">
                Alta Semijoaria Contemporânea
              </span>
            </div>
          </div>

          {/* COLUNA 2: CATEGORIAS / COLEÇÕES */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
              Coleções
            </span>
            <ul className="space-y-2 text-xs font-light text-zinc-600">
              <li><a href="#catalogo" className="hover:text-black transition-colors duration-300">Édition Lumina 2026</a></li>
              <li><a href="#catalogo" className="hover:text-black transition-colors duration-300">Lignes Pures</a></li>
              <li><a href="#catalogo" className="hover:text-black transition-colors duration-300">Linha Arch</a></li>
              <li><a href="#catalogo" className="hover:text-black transition-colors duration-300">Riviera</a></li>
            </ul>
          </div>

          {/* COLUNA 3: INSTITUCIONAL / LINKS RÁPIDOS */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
              Institucional
            </span>
            <ul className="space-y-2 text-xs font-light text-zinc-600">
              <li><a href="#" className="hover:text-black transition-colors duration-300">Início</a></li>
              <li><a href="#catalogo" className="hover:text-black transition-colors duration-300">Catálogo</a></li>
              <li><a href="#contato" className="hover:text-black transition-colors duration-300">Contato</a></li>
              <li><a href="#sobre" className="hover:text-black transition-colors duration-300">Sobre</a></li>
            </ul>
          </div>

          {/* COLUNA 4: CONTATO & REDES SOCIAIS */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold block mb-2">
                Contato
              </span>
              <p className="text-xs font-light text-zinc-600 leading-relaxed">
                saintlumiere@gmail.com<br />
                +55 11 9999-9999 (WhatsApp)<br />
                Itapecerica da Serra, São Paulo
              </p>
            </div>

            {/* ÍCONES SOCIAIS SUBSTITUÍDOS PELO FONT AWESOME */}
            <div className="flex items-center gap-5 pt-2">
              <a href="#" className="text-zinc-400 hover:text-black text-base transition-colors duration-300" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

        </div>

        {/* ================= BASE DO RODAPÉ ================= */}
        <div className="w-full border-t border-zinc-100 pt-6 mt-2 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <div className="text-[10px] font-mono text-zinc-400 text-center sm:text-left">
            © 2026 SAINT LUMIÈRE. TODOS OS DIREITOS RESERVADOS.
          </div>

          <div className="text-[10px] font-mono text-zinc-400 text-center sm:text-left">
            DESENVOLVIDO POR @matheusotho
          </div>      
          
        </div>

      </div>
    </footer>
  );
}