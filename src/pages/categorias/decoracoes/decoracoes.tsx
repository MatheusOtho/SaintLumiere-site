import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import decoracao1 from "../../../assets/categorias/decoracoes/conjunto-bolas-natalinas-modelo-1.jpg";
import decoracao2 from "../../../assets/categorias/decoracoes/conjunto-bolas-natalinas-modelo-2.jpg";
import decoracao3 from "../../../assets/categorias/decoracoes/modulo-circular.jpg";
import decoracao4 from "../../../assets/categorias/decoracoes/quebra-nozes.jpg";
import decoracao5 from "../../../assets/categorias/decoracoes/torre-bolas-natalinas.jpg";
import decoracao6 from "../../../assets/categorias/decoracoes/urso-natalino-modelo-1.jpg";
import decoracao7 from "../../../assets/categorias/decoracoes/urso-natalino-modelo-2.jpg";
import decoracao8 from "../../../assets/categorias/decoracoes/urso-natalino-modelo-3.jpg";

import bannerDecoracoes from "../../../assets/categorias/decoracoes/bannerDecoracoes.jpg";

interface ItemDecoracao {
  name: string;
  slug: string;
  img: string;
  categoryLabel: string;
}

export function Decoracoes() {
  // Garante que o usuário entre no topo da página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lista estruturada com o mesmo padrão de objeto do Destaques.tsx
  const itensDecoracoes: ItemDecoracao[] = [
    {
      name: "Conjunto de Bolas Natalinas Modelo 1",
      slug: "/categoria-decoracoes/conjunto-bolas-natalinas-modelo-1",
      img: decoracao1,
      categoryLabel: "Design Natalino",
    },
    {
      name: "Conjunto de Bolas Natalinas Modelo 2",
      slug: "/categoria-decoracoes/conjunto-bolas-natalinas-modelo-2",
      img: decoracao2,
      categoryLabel: "Design Natalino",
    },
    {
      name: "Modelo Circular",
      slug: "/categoria-decoracoes/modulo-circular",
      img: decoracao3,
      categoryLabel: "Decoração Inovadora",
    },
    {
      name: "Escultura Quebra Nozes",
      slug: "/categoria-decoracoes/quebra-nozes",
      img: decoracao4,
      categoryLabel: "Design Natalino",
    },
    {
      name: "Torre de Bolas Natalinas",
      slug: "/categoria-decoracoes/torre-de-bolas-natalinas",
      img: decoracao5,
      categoryLabel: "Design Natalino",
    },
    {
      name: "Urso Natalino com Balões",
      slug: "/categoria-decoracoes/urso-natalino-com-baloes",
      img: decoracao6,
      categoryLabel: "Design Natalino",
    },
    {
      name: "Urso Natalino com Gorro",
      slug: "/categoria-decoracoes/urso-natalino-com-gorro",
      img: decoracao7,
      categoryLabel: "Design Natalino",
    },
    {
      name: "Urso Natalino Modelo 3",
      slug: "/categoria-decoracoes/urso-natalino-modelo-3",
      img: decoracao8,
      categoryLabel: "Design Natalino",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] pb-24 mt-20 selection:bg-amber-600 selection:text-white">
      
      {/* Banner Superior Premium */}
      <section className="relative h-[45vh] sm:h-[55vh] w-full overflow-hidden bg-zinc-950 select-none">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={bannerDecoracoes}
            alt="Banner Coleção Decorações de Alto Padrão"
            className="w-full h-full object-cover opacity-60 brightness-90 transform scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-zinc-950/40 to-transparent" />
        </div>

        {/* Texto Centralizado do Banner */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase rounded-md backdrop-blur-sm">
              <span>Decorações em Fibra</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none uppercase">
              Decorações
            </h1>
            <p className="text-zinc-300 text-xs sm:text-sm max-w-md mx-auto font-normal leading-relaxed">
              Design exclusivo e acabamento de qualidade para compor ambientes com estilo e personalidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo Principal: Grid de Produtos Idêntico ao Destaques.tsx */}
      <section className="container mx-auto px-4 lg:px-8 max-w-6xl mt-16 relative z-20">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {itensDecoracoes.map((decoracoes, idx) => (
            <motion.div
              key={decoracoes.slug}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group flex flex-col"
            >
              {/* Imagem do Card - Proporção de Destaques [4/5] */}
              <Link
                to={decoracoes.slug}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden block bg-zinc-100 border border-zinc-200/50 shadow-sm"
                aria-label={`Ver detalhes de ${decoracoes.name}`}
              >
                <img
                  src={decoracoes.img}
                  alt={decoracoes.name}
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

              {/* Metadados / Detalhes do Produto (Alinhado estritamente à esquerda) */}
              <div className="pt-4 px-1 space-y-1.5 text-left flex flex-col items-start">
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                  {decoracoes.categoryLabel}
                </span>
                
                <Link 
                  to={decoracoes.slug}
                  className="block group-hover:text-amber-600 transition-colors duration-200"
                >
                  <h3 className="text-base font-black text-zinc-950 tracking-tight leading-tight">
                    {decoracoes.name}
                  </h3>
                </Link>

                <Link
                  to={decoracoes.slug}
                  className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-950 text-xs font-bold transition-colors duration-200 pt-0.5"
                >
                  <span>Especificações</span>
                  <i className="fa-solid fa-chevron-right text-[8px] transform group-hover:translate-x-0.5 transition-transform"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Linha de rodapé decorativa */}
        <div className="mt-24 text-center border-t border-zinc-200/60 pt-10">
          <p className="text-xs text-zinc-400 font-medium">
            Projetos corporativos, residenciais, comerciais e dentre outros? Entre em contato conosco sobre.
          </p>
        </div>

      </section>
    </main>
  );
}

export default Decoracoes;