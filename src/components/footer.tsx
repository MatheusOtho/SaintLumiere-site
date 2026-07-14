import { Link } from "react-router-dom";

// Importação do logo do rodapé
import logoFooter from "../assets/logo-da-fiberglass-footer.png"

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 pt-15 pb-10 border-t border-zinc-900 overflow-hidden selection:bg-amber-600 selection:text-white">
      
      {/* Luz de Fundo Abscondida Sutil (Âmbar Premium) */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[250px] bg-amber-500/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-5">
            <div className="h-14 flex items-center">
              <img
                src={logoFooter}
                alt="Logo FiberGlass"
                className="h-16 w-auto object-contain brightness-110 transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xs">
              Criando peças exclusivas com excelência e dedicação desde 2012.
              Transformamos o design de alto padrão em realidade física para o seu ambiente.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-6 after:h-[2px] after:bg-amber-500">
              Links Rápidos
            </h4>
            <ul className="space-y-3.5">
              {[
                { to: "/", label: "Início" },
                { to: "/sobrenos", label: "Sobre Nós" },
                { to: "/contato", label: "Contato" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center text-zinc-400 hover:text-amber-500 transition-all duration-300 transform hover:translate-x-1 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Endereço Sede */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-6 after:h-[2px] after:bg-amber-500">
              Endereço
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              Rua Joaquim Cardoso Filho, 704
              <br />
              06872-200 — Potuverá
              <br />
              Itapecerica da Serra — SP
            </p>
            <a
              href="https://maps.google.com/?q=Rua+Joaquim+Cardoso+Filho+704+Itapecerica+da+Serra+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-all text-xs font-bold uppercase tracking-wider group"
            >
              <i className="fa-solid fa-map-location-dot text-sm transition-transform group-hover:scale-110"></i>
              <span>Ver no Google Maps</span>
            </a>
          </div>

          {/* Coluna 4: Contato e Canais Diretos */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-6 after:h-[2px] after:bg-amber-500">
              Contato
            </h4>

            <div className="space-y-3.5 mb-6">
              <div className="flex items-center gap-3 text-zinc-400 text-sm group">
                <i className="fa-solid fa-phone text-amber-500 w-4 text-center text-xs"></i>
                <span className="group-hover:text-amber-500 transition-colors select-all cursor-pointer">
                  (11) 94682-2225
                </span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <i className="fa-solid fa-phone text-amber-500 w-4 text-center text-xs"></i>
                <a
                  href="tel:11999474730"
                  className="hover:text-amber-500 transition-colors"
                >
                  (11) 99947-4730
                </a>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <i className="fa-solid fa-envelope text-amber-500 w-4 text-center text-xs"></i>
                <a
                  href="mailto:fiberglass.moveis@gmail.com"
                  className="hover:text-amber-500 transition-colors break-all"
                >
                  fiberglass.moveis@gmail.com
                </a>
              </div>
            </div>

            <h5 className="text-zinc-400 font-bold text-[10px] uppercase tracking-wider mb-1">
              Horário de Atendimento
            </h5>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Seg à Sex: 9h às 12h — 13h às 17h
            </p>
          </div>
        </div>

        {/* Linha de Rodapé Inferior */}
        <div className="border-t border-zinc-900 mt-20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-zinc-600 text-xs tracking-wide">
              &copy; {new Date().getFullYear()} FiberGlass Móveis. Todos os direitos reservados.
            </p>
            <p className="text-zinc-600 text-xs tracking-wide">
              Desenvolvido por{" "}
              <span className="text-zinc-400 font-medium hover:text-amber-500 transition-colors cursor-pointer">
                @matheusotho
              </span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;