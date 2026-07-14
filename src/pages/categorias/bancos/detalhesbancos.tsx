import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import banco1 from "../../../assets/categorias/bancos/banco-safira.jpeg";
import banco2 from "../../../assets/categorias/bancos/banco-tablet.jpeg";


interface itemBancos {
  name: string;
  slug: string;
  img: string;
  categoryLabel: string;
  complementoDescricao: string;
}

export function DetalhesBancos() {
  // Captura o parâmetro dinâmico exato definido no App.tsx (:slug)
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Reconstitui o slug completo para bater exatamente com a propriedade mapeada no array
  const currentSlug = `/categoria-bancos/${slug}`;

  const produtos: itemBancos[] = [
    {
      name: "Banco Safira",
      slug: "/categoria-bancos/banco-safira",
      img: banco1,
      categoryLabel: "Design Único",
      complementoDescricao: "combina design sofisticado, durabilidade e exclusividade, tornando-se a escolha perfeita para condomínios, áreas externas e projetos que exigem elegância e qualidade.",
    },
    {
      name: "Banco Tablet",
      slug: "/categoria-bancos/banco-tablet",
      img: banco2,
      categoryLabel: "Sofisticado",
      complementoDescricao: "é a escolha ideal para quem busca unir um design exclusivo à elegância de uma peça imponente. Perfeito para compor jardins, condomínios, áreas externas, espaços abertos e diversos outros ambientes.",
    },
  ];

  // Filtra e encontra a poltrona ativa na rota
  const produto = produtos.find((p) => p.slug === currentSlug);

  // Força o scroll para o topo ao renderizar a página do produto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlug]);

  // Fallback caso o slug não coincida com nenhum produto mapeado
  if (!produto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h2 className="text-xl font-bold text-zinc-950 mb-4">Mobiliário não encontrado</h2>
        <button onClick={() => navigate("/categoria-bancos")} className="px-5 py-2.5 bg-zinc-950 text-white text-xs font-bold rounded-xl">
          Voltar para Bancos
        </button>
      </div>
    );
  }

  // Geração do link de WhatsApp Automatizado com o nome do produto
  const numeroWhats = "5511980129528";
  const mensagemWhats = encodeURIComponent(`Olá, tenho interesse em saber mais sobre o produto: ${produto.name}`);
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhats}&text=${mensagemWhats}`;

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 selection:bg-amber-600 selection:text-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Breadcrumb Executivo */}
        <nav className="mb-10 text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2 select-none">
          <Link to="/" className="hover:text-zinc-950 transition-colors">Início</Link>
          <span className="text-zinc-300">/</span>
          <Link to="/categoria-bancos" className="hover:text-zinc-950 transition-colors">Bancos</Link>
          <span className="text-zinc-300">/</span>
          <span className="text-amber-600 font-black">{produto.name}</span>
        </nav>

        {/* Layout Split Screen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Foto de Destaque com Moldura Fina Premium */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200/60 shadow-md group"
          >
            <img 
              src={produto.img} 
              alt={produto.name} 
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/[0.01] pointer-events-none" />
          </motion.div>

          {/* Dados Técnicos e Comerciais */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8 text-left"
          >
            {/* Títulos e Tags de Luxo */}
            <div className="space-y-3">
              <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 rounded-md inline-block">
                {produto.categoryLabel}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-zinc-950 tracking-tight leading-none">
                {produto.name}
              </h1>
              <div className="w-12 h-[3px] bg-amber-500 rounded-full" />
            </div>

            {/* Descrição Obrigatória Customizada */}
            <div className="space-y-3">
              <h3 className="text-zinc-400 text-[11px] font-black uppercase tracking-wider">
                Descrição de Arquitetura
              </h3>
              <p className="text-zinc-700 text-sm md:text-base leading-relaxed font-normal">
                <span className="font-bold text-zinc-950">{produto.name}</span>  {produto.complementoDescricao}
              </p>
            </div>

            {/* Grid de Acabamentos Premium */}
            <div className="space-y-4 pb-2 border-t border-zinc-100">
              <h3 className="text-zinc-400 text-[11px] font-black uppercase tracking-wider">
                Detalhes de Acabamento
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { title: "Material de Engenharia", value: "Fibra de Vidro" },
                  { title: "Acabamento", value: "Pintura automotiva de alta qualidade" },
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/40 space-y-0.5">
                    <span className="block text-[13px] font-bold text-zinc-950">{item.title}</span>
                    <span className="block text-[13px] text-zinc-500 leading-normal">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Botão de Contato com Mensagem Personalizada */}
            <div className="">
              <a
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-amber-600 shadow-lg hover:shadow-amber-600/10 active:scale-[0.99] transition-all duration-300 group"
              >
                <i className="fa-brands fa-whatsapp text-lg transition-transform group-hover:scale-110"></i>
                <span>Verificar Disponibilidade no WhatsApp</span>
              </a>
              <span className="block text-[14px] text-zinc-400 font-medium mt-2.5 sm:ml-1">
                *sob encomenda.
              </span>
            </div>

          </motion.div>
        </div>

      </div>
    </main>
  );
}

export default DetalhesBancos;