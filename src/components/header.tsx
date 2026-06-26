import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ['inicio', 'destaques', 'catalogo', 'sobre'];
      const scrollPosition = window.scrollY + 150;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          if (scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { name: 'Início', id: 'inicio' },
    { name: 'Destaques', id: 'destaques' },
    { name: 'Catálogo', id: 'catalogo' },
    { name: 'Contato', id: 'contato' },
    { name: 'Sobre', id: 'sobre' },
  ];

  return (
    <>
      {/* HEADER COM BLUR INTEGRADO E ESTRUTURA REFEITA */}
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-4 sm:px-8 lg:px-12 backdrop-blur-md border-b
          ${isScrolled 
            ? 'bg-white/70 border-black/[0.04] h-16 shadow-[0_2px_20px_rgba(0,0,0,0.02)]' 
            : 'bg-white/40 border-black/[0.02] h-20'}`}
      >
        <div className="w-full max-w-[1800px] mx-auto flex items-center justify-between text-black">
          
          {/* LOGO */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="text-[13px] sm:text-base font-light tracking-[0.35em] text-black uppercase focus:outline-none cursor-pointer transition-opacity duration-300 hover:opacity-60"
          >
            SAINT <span className="font-semibold">LUMIÈRE</span>
          </button>

          {/* NAVEGAÇÃO DESKTOP (Apenas acima de 1024px) */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-x-12">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`relative text-[10px] tracking-[0.25em] uppercase font-medium py-2 focus:outline-none cursor-pointer transition-colors duration-500 ease-out
                        ${isActive ? 'text-black' : 'text-zinc-400 hover:text-black'}`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`} 
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* AÇÃO DA DIREITA: APENAS BOTÃO DE CONTATO MÍNIMO */}
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => scrollToSection('contato')}
              className="hidden sm:inline-flex h-9 items-center justify-center border border-black/10 hover:border-black bg-black text-white hover:bg-transparent hover:text-black px-6 text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer focus:outline-none rounded-none"
            >
              Contato
            </button>

            {/* BOTÃO HAMBÚRGUER PRETO (Até 1024px) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 text-black focus:outline-none cursor-pointer relative z-50"
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between items-end">
                <span className={`h-[1px] bg-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'w-5 rotate-45 translate-y-[7.5px]' : 'w-5'}`} />
                <span className={`h-[1px] bg-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'w-0 opacity-0' : 'w-3'}`} />
                <span className={`h-[1px] bg-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'w-5 -rotate-45 -translate-y-[7.5px]' : 'w-4'}`} />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* PAINEL MOBILE BRANCO COM BLUR E TEXTURA */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden flex flex-col justify-between px-6 sm:px-12 pt-32 pb-12
          ${isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}`}
      >
        <nav className="w-full z-10">
          <ul className="flex flex-col gap-y-6 sm:gap-y-8">
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <li 
                  key={item.id}
                  className={`transition-all duration-700 ease-out transform
                    ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="group w-full text-left text-3xl sm:text-5xl font-extralight tracking-tight text-zinc-300 hover:text-black focus:outline-none cursor-pointer flex items-center justify-between"
                  >
                    <span className={`transition-colors duration-300 ${isActive ? 'text-black font-serif italic lowercase' : ''}`}>
                      {item.name}
                    </span>
                    <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-black" />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}