import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoHeader from "../assets/logo-da-fiberglass-header.png";

interface CategoryItem {
  label: string;
  path: string;
  description: string;
  icon: string;
}

interface NavLinkItem {
  label: string;
  path: string;
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState<boolean>(false);
  
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMenu = (): void => setIsMenuOpen((prev) => !prev);
  const closeMenu = (): void => {
    setIsMenuOpen(false);
    setIsMobileCategoriesOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 180);
  };

  const mainLinks: NavLinkItem[] = [
    { label: "Início", path: "/" },
    { label: "Contato", path: "/contato" },
    { label: "Sobre Nós", path: "/sobrenos" },
  ];

  const categoryLinks: CategoryItem[] = [
    { label: "Bancos", path: "/categoria-bancos", description: "Design e sofisticação para jardins e interiores.", icon: "fa-chair" },
    { label: "Cadeiras Eróticas", path: "/categoria-cadeiras-eroticas", description: "Peças conceituais com discrição e design.", icon: "fa-heart" },
    { label: "Decorações", path: "/categoria-decoracoes", description: "Peças exclusivas para transformar ambientes.", icon: "fa-lightbulb" },
    { label: "Mesas", path: "/categoria-mesas", description: "Superfícies impecáveis para reuniões e jantares.", icon: "fa-table" },
    { label: "Paisagismo", path: "/categoria-paisagismo", description: "Vasos e complementos para harmonização verde.", icon: "fa-seedling" },
    { label: "Poltronas", path: "/categoria-poltronas", description: "O máximo em conforto e ergonomia refinada.", icon: "fa-couch" },
    { label: "Projetos Especiais", path: "/categoria-projetos-especiais", description: "Móveis sob medida para o seu projeto autoral.", icon: "fa-compass-drafting" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 transition-transform duration-200 hover:scale-[1.02]" aria-label="FiberGlass Móveis - Home">
          <img src={logoHeader} alt="FiberGlass Móveis" className="h-10 md:h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={`group relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              location.pathname === "/" ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Início
            <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 transition-transform duration-300 origin-left ${location.pathname === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
          </Link>

          {/* MEGA DROPDOWN CATEGORIAS */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`group flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isDropdownOpen || categoryLinks.some(link => location.pathname === link.path) ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <span>Categorias</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-amber-500" : ""}`}></i>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] bg-white/95 backdrop-blur-xl border border-gray-100/80 rounded-2xl shadow-2xl shadow-gray-300/40 p-4 grid grid-cols-2 gap-2 z-50"
                >
                  {categoryLinks.map((category) => {
                    const isCatActive = location.pathname === category.path;
                    return (
                      <Link
                        key={category.path}
                        to={category.path}
                        onClick={() => setIsDropdownOpen(false)}
                        className={`group/item flex gap-3 p-3 rounded-xl transition-all duration-200 text-left ${
                          isCatActive 
                            ? "bg-amber-50/70 text-amber-900" 
                            : "hover:bg-gray-50 text-gray-700 hover:text-gray-900"
                        }`}
                      >
                        <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          isCatActive ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-500 group-hover/item:bg-amber-50 group-hover/item:text-amber-500"
                        }`}>
                          <i className={`fa-solid ${category.icon} text-sm`}></i>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-semibold text-sm tracking-tight">{category.label}</span>
                          <span className="text-xs text-gray-400 line-clamp-1 group-hover/item:text-gray-500 transition-colors">
                            {category.description}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Demais Links */}
          {mainLinks.slice(1).map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>
            );
          })}
          
          <a
            href="https://wa.me/5511980129528"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-sm shadow-emerald-500/20 transition-all duration-200"
          >
            <i className="fa-brands fa-whatsapp text-base"></i>
            <span>WhatsApp</span>
          </a>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <i className={`fa-solid text-xl transition-transform duration-200 ${isMenuOpen ? "fa-times rotate-90" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Drawer CORRIGIDO COM DYNAMIC HEIGHT) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-x-0 top-0 bottom-0 h-[100dvh] bg-white z-50 flex flex-col overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Mobile Header - Fixo no Topo */}
            <div className="px-4 py-4 border-b border-gray-100 flex items-center justify-between bg-white flex-shrink-0">
              <span className="font-bold text-gray-900 tracking-tight">Menu</span>
              <button onClick={closeMenu} className="p-2 text-gray-400 hover:text-gray-600">
                <i className="fa-solid fa-times text-xl"></i>
              </button>
            </div>

            {/* Mobile Body - Única parte que rola se o conteúdo for grande */}
            <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1.5 subpixel-antialiased">
              <Link
                to="/"
                onClick={closeMenu}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold ${
                  location.pathname === "/" ? "bg-amber-50 text-amber-800" : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                <span>Início</span>
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </Link>

              {/* Accordion Categorias */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsMobileCategoriesOpen(!isMobileCategoriesOpen)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-left text-gray-800 hover:bg-gray-50 ${
                    isMobileCategoriesOpen ? "bg-gray-50/80" : ""
                  }`}
                >
                  <span>Categorias</span>
                  <i className={`fa-solid fa-chevron-down text-xs text-gray-400 transition-transform duration-200 ${isMobileCategoriesOpen ? "rotate-180" : ""}`}></i>
                </button>
                
                <AnimatePresence>
                  {isMobileCategoriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 flex flex-col gap-1 mt-1 border-l-2 border-gray-100"
                    >
                      {categoryLinks.map((category) => (
                        <Link
                          key={category.path}
                          to={category.path}
                          onClick={closeMenu}
                          className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg ${
                            location.pathname === category.path ? "text-amber-700 font-semibold" : "text-gray-600"
                          }`}
                        >
                          <i className={`fa-solid ${category.icon} text-xs text-gray-400 w-4`}></i>
                          <span>{category.label}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Links Restantes */}
              {mainLinks.slice(1).map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold transition-all ${
                      isActive ? "bg-amber-50 text-amber-800" : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <i className="fa-solid fa-chevron-right text-xs"></i>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Fixed Bottom CTA - Agora travado perfeitamente na base */}
            <div className="flex-shrink-0 p-4 bg-white border-t border-gray-100 pb-safe-bottom mb-2">
              <a
                href="https://wa.me/5511980129528"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-xl font-bold transition-colors w-full shadow-lg shadow-emerald-500/10"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Fale no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;