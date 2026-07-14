import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Importações dos assets de categorias fornecidos
import Categoria1 from "../../assets/home/categorias/banco-em-fibra.jpg";
import Categoria2 from "../../assets/home/categorias/cadeira-erotica-em-fibra.jpg";
import Categoria3 from "../../assets/home/categorias/decoracao-em-fibra.jpg";
import Categoria4 from "../../assets/home/categorias/mesa-em-fibra.jpg";
import Categoria5 from "../../assets/home/categorias/poltrona-em-fibra.jpg";
import Categoria6 from "../../assets/home/categorias/projetos-em-fibra.jpg";
import Categoria7 from "../../assets/home/categorias/vasos-em-fibra.jpg";

export function Categorias() {
  // Lista de categorias mapeada para as 7 imagens importadas com layout Bento Grid Assimétrico
  const categoriasData = [
    {
      name: "Bancos",
      img: Categoria1,
      icon: "fa-chair",
      link: "/categoria-bancos",
      gridClass: "col-span-2 row-span-2 h-full", // Destaque Maior
    },
    {
      name: "Poltronas",
      img: Categoria5,
      icon: "fa-couch",
      link: "/categoria-poltronas",
      gridClass: "col-span-2 md:col-span-1 row-span-1",
    },
    {
      name: "Vasos & Paisagismo",
      img: Categoria7,
      icon: "fa-seedling",
      link: "/categoria-paisagismo",
      gridClass: "col-span-2 md:col-span-1 row-span-1",
    },
    {
      name: "Mesas",
      img: Categoria4,
      icon: "fa-table",
      link: "/categoria-mesas",
      gridClass: "col-span-2 row-span-1", // Destaque Largo
    },
    {
      name: "Decorações",
      img: Categoria3,
      icon: "fa-wand-magic-sparkles",
      link: "/categoria-decoracoes",
      gridClass: "col-span-1 row-span-1",
    },
    {
      name: "Cadeiras Exclusivas",
      img: Categoria2,
      icon: "fa-fire",
      link: "/categoria-cadeiras-eroticas",
      gridClass: "col-span-1 row-span-1",
    },
    {
      name: "Projetos Especiais",
      img: Categoria6,
      icon: "fa-gem",
      link: "/categoria-projetos-especiais",
      gridClass: "col-span-2 row-span-1",
    },
  ];

  return (
    <section id="categorias" className="py-24 md:py-32 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-4">
        
        {/* Header Minimalista Premium */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-500 text-[11px] font-bold tracking-wider uppercase rounded-md">
              <span>Coleções</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-950">
              Nossas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500">
                Categorias
              </span>
            </h2>
            <p className="text-zinc-500 text-sm font-normal max-w-sm mx-auto">
              Mobiliário de alta resistência e design refinado esculpido em fibra de vidro.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Dinâmico */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[150px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.05 } },
          }}
        >
          {categoriasData.map((cat, index) => (
            <motion.div
              key={index}
              className={cat.gridClass}
              variants={{
                hidden: { opacity: 0, scale: 0.97, y: 15 },
                show: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 90,
                    damping: 16,
                  },
                },
              }}
            >
              <Link
                to={cat.link}
                className="group relative w-full h-full rounded-2xl overflow-hidden block bg-zinc-50 border border-zinc-200/50 shadow-sm"
                aria-label={`Ver categoria ${cat.name}`}
              >
                {/* Imagem de Fundo com Zoom Cinematográfico no Hover */}
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  loading="lazy"
                />

                {/* Gradiente de Mascaramento Sutil (Escuro embaixo, invisível em cima) */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent transition-opacity duration-300" />

                {/* Badge Invisível com Desfoque (Surge Elegantemente no Hover) */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-zinc-900 flex items-center justify-center opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                  <i className={`fa-solid ${cat.icon} text-xs text-amber-600`}></i>
                </div>

                {/* Legenda e Detalhes Inferiores */}
                <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between z-10">
                  <div className="space-y-1.5">
                    <h3 className="text-sm md:text-base font-bold text-white tracking-tight">
                      {cat.name}
                    </h3>
                    {/* Linha de Feedback que cresce lateralmente */}
                    <div className="w-4 h-[2px] bg-amber-500 group-hover:w-14 transition-all duration-300 rounded-full" />
                  </div>

                  {/* Seta Dinâmica Minimalista */}
                  <div className="w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 text-white flex items-center justify-center opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg shrink-0">
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </div>
                </div>

                {/* Contorno interno de Luxo ao passar o mouse */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-colors duration-300 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Categorias;