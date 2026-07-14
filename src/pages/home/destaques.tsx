import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Importações dos assets de destaques fornecidos
import destaque1 from "../../assets/home/destaques/cadeira-erotica-spicy.jpg";
import destaque2 from "../../assets/home/destaques/mesa-modelo-cloud.jpg";
import destaque3 from "../../assets/home/destaques/mesa-modelo-cone.jpg";
import destaque4 from "../../assets/home/destaques/poltrona-modelo-quite.jpg";
import destaque5 from "../../assets/home/destaques/poltronas-modelo-stone.jpg";
import destaque6 from "../../assets/home/destaques/torre-bolas-natalinas.jpg";
import destaque7 from "../../assets/home/destaques/vaso-modelo-domo.jpg";
import destaque8 from "../../assets/home/destaques/vaso-quadrado.jpg";
import destaque9 from "../../assets/home/destaques/vasos-geometricos.jpg";

interface ProdutoDestaque {
  name: string;
  slug: string; // Identificador amigável para a URL
  category: "mobiliario" | "vasos" | "decoracao";
  categoryLabel: string;
  img: string;
}

export function Destaques() {
  const [activeFilter, setActiveFilter] = useState<string>("todos");

  // Array de produtos usando os slugs requisitados
  const produtos: ProdutoDestaque[] = [
    {
      name: "Cadeira Erótica Spicy",
      slug: "/categoria-cadeiras-eroticas/cadeira-erotica-spicy",
      category: "mobiliario",
      categoryLabel: "Mobiliário Exclusivo",
      img: destaque1,
    },
    {
      name: "Mesa Modelo Cloud",
      slug: "/categoria-mesas/mesa-modelo-cloud",
      category: "mobiliario",
      categoryLabel: "Mesas",
      img: destaque2,
    },
    {
      name: "Mesa Modelo Cone",
      slug: "/categoria-mesas/mesa-modelo-cone",
      category: "mobiliario",
      categoryLabel: "Mesas",
      img: destaque3,
    },
    {
      name: "Poltrona Modelo Quite",
      slug: "/categoria-poltronas/poltrona-quite",
      category: "mobiliario",
      categoryLabel: "Poltronas",
      img: destaque4,
    },
    {
      name: "Poltrona Modelo Stone",
      slug: "/categoria-poltronas/poltrona-stone",
      category: "mobiliario",
      categoryLabel: "Poltronas",
      img: destaque5,
    },
    {
      name: "Torre de Bolas Natalinas",
      slug: "/categoria-decoracoes/torre-de-bolas-natalinas",
      category: "decoracao",
      categoryLabel: "Decoração Natalina",
      img: destaque6,
    },
    {
      name: "Vaso Modelo Domo",
      slug: "/categoria-paisagismo/vaso-modelo-domo",
      category: "vasos",
      categoryLabel: "Vasos & Paisagismo",
      img: destaque7,
    },
    {
      name: "Vaso Quadrado em Fibra",
      slug: "/categoria-paisagismo/vaso-quadrado-fibra",
      category: "vasos",
      categoryLabel: "Vasos & Paisagismo",
      img: destaque8,
    },
    {
      name: "Vasos Geométricos",
      slug: "/categoria-paisagismo/vasos-geometricos",
      category: "vasos",
      categoryLabel: "Vasos & Paisagismo",
      img: destaque9,
    },
  ];

  // Filtros de navegação rápidos
  const filtros = [
    { id: "todos", label: "Todos" },
    { id: "mobiliario", label: "Mobiliário" },
    { id: "vasos", label: "Vasos" },
    { id: "decoracao", label: "Decoração" },
  ];

  const produtosFiltrados =
    activeFilter === "todos"
      ? produtos
      : produtos.filter((p) => p.category === activeFilter);

  return (
    <section id="destaques" className="py-24 md:py-32 bg-[#fafafa] border-t border-zinc-100">
      <div className="container mx-auto px-4">
        
        {/* Header da Seção */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200/60 text-zinc-500 text-[11px] font-bold tracking-wider uppercase rounded-md">
              <span>Curadoria de Design</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-950">
              Produtos em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300">
                Destaque
              </span>
            </h2>
            <p className="text-zinc-500 text-sm font-normal max-w-sm mx-auto">
              As peças mais desejadas por arquitetos e designers de interiores.
            </p>
          </motion.div>
        </div>

        {/* Filtros de Categoria Estilo Minimalista */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filtros.map((filtro) => (
            <button
              key={filtro.id}
              onClick={() => setActiveFilter(filtro.id)}
              className={`relative px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 ${
                activeFilter === filtro.id
                  ? "text-white"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/40"
              }`}
            >
              <span className="relative z-10">{filtro.label}</span>
              {activeFilter === filtro.id && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-zinc-950 rounded-xl shadow-md shadow-zinc-950/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {produtosFiltrados.map((prod) => (
              <motion.div
                layout
                key={prod.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col"
              >
                {/* Imagem do Card */}
                <Link
                  to={prod.slug}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden block bg-zinc-100 border border-zinc-200/50 shadow-sm"
                  aria-label={`Ver detalhes de ${prod.name}`}
                >
                  <img
                    src={prod.img}
                    alt={prod.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    loading="lazy"
                  />
                  
                  {/* Gradiente de sombra interno para o hover */}
                  <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-black/[0.05] transition-colors duration-300 mix-blend-multiply" />

                  {/* Seta e Efeito de Desfoque que surge no Hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <div className="w-12 h-12 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-400">
                      <i className="fa-solid fa-eye text-xs"></i>
                    </div>
                  </div>
                </Link>

                {/* Metadados / Detalhes do Produto (Alinhado à esquerda) */}
                <div className="pt-4 px-1 space-y-1.5 text-left flex flex-col items-start">
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                    {prod.categoryLabel}
                  </span>
                  
                  <Link 
                    to={prod.slug}
                    className="block group-hover:text-amber-600 transition-colors duration-200"
                  >
                    <h3 className="text-base font-black text-zinc-950 tracking-tight leading-tight">
                      {prod.name}
                    </h3>
                  </Link>

                  <Link
                    to={prod.slug}
                    className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-950 text-xs font-bold transition-colors duration-200 pt-0.5"
                  >
                    <span>Especificações</span>
                    <i className="fa-solid fa-chevron-right text-[8px] transform group-hover:translate-x-0.5 transition-transform"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}

export default Destaques;