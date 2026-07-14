import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import mesa1 from "../../../assets/categorias/mesas/balcao-moderno.jpg";
import mesa2 from "../../../assets/categorias/mesas/mesa-modelo-cloud.jpg";
import mesa3 from "../../../assets/categorias/mesas/mesa-modelo-cone-2.jpg";
import mesa4 from "../../../assets/categorias/mesas/mesa-modelo-cone.jpg";
import mesa5 from "../../../assets/categorias/mesas/mesa-modelo-mushroom.jpg";
import mesa6 from "../../../assets/categorias/mesas/mesa-modelo-side.jpg";

interface ItemMesas {
  name: string;
  slug: string;
  img: string;
  categoryLabel: string;
  complementoDescricao: string;
}

export function DetalhesMesas() {
  // Captura o parâmetro dinâmico exato definido no App.tsx (:slug)
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Reconstitui o slug completo para bater exatamente com a propriedade mapeada no array
  const currentSlug = `/categoria-mesas/${slug}`;

  const produtos: ItemMesas[] = [
    {
      name: "Balcão Curvado em L",
      slug: "/categoria-mesas/balcao-curvado-em-l",
      img: mesa1,
      categoryLabel: "Comercial",
      complementoDescricao: "combina design contemporâneo, conforto e funcionalidade para valorizar qualquer ambiente comercial. Ideal para lojas, recepções, escritórios, clínicas, shoppings e diversos espaços que buscam elegância e praticidade.",
    },
    {
      name: "Mesa Modelo Cloud",
      slug: "/categoria-mesas/mesa-modelo-cloud",
      img: mesa2,
      categoryLabel: "Design Exclusivo",
      complementoDescricao: "combina o design lúdico inspirado em uma nuvem com funcionalidade e resistência, tornando-se a escolha ideal para ambientes infantis. Perfeita para playgrounds, escolas, creches, brinquedotecas, áreas de lazer, condomínios e diversos espaços que buscam unir conforto, criatividade e diversão. ",
    },
    {
      name: "Mesa Modelo Cone 2",
      slug: "/categoria-mesas/mesa-modelo-cone-2",
      img: mesa3,
      categoryLabel: "Sofisticado",
      complementoDescricao: "combina design contemporâneo, sofisticação e funcionalidade para valorizar qualquer ambiente. Ideal para residências, condomínios, shoppings, áreas comerciais, escritórios, hotéis e espaços corporativos que buscam elegância, durabilidade e um acabamento de alto padrão.",
    },
    {
      name: "Mesa Modelo Cone",
      slug: "/categoria-mesas/mesa-modelo-cone",
      img: mesa4,
      categoryLabel: "Sofisticado",
      complementoDescricao: "combina design contemporâneo, sofisticação e funcionalidade para valorizar qualquer ambiente. Ideal para residências, condomínios, shoppings, áreas comerciais, escritórios, hotéis e espaços corporativos que buscam elegância, durabilidade e um acabamento de alto padrão.",
    },
    {
      name: "Mesa Modelo Mushroom",
      slug: "/categoria-mesas/mesa-modelo-mushroom",
      img: mesa5,
      categoryLabel: "Elegante",
      complementoDescricao: "combina design inovador, elegância e funcionalidade em uma única peça. Ideal para residências, condomínios, áreas comerciais, escritórios, hotéis, restaurantes e diversos ambientes que buscam sofisticação, durabilidade e um acabamento de alto padrão.",
    },
    {
      name: "Mesa Modelo Side",
      slug: "/categoria-mesas/mesa-modelo-side",
      img: mesa6,
      categoryLabel: "Elegante",
      complementoDescricao: "combina design inovador, elegância e funcionalidade em uma única peça. Ideal para residências, condomínios, áreas comerciais, escritórios, hotéis, restaurantes e diversos ambientes que buscam sofisticação, durabilidade e um acabamento de alto padrão.",
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
        <button onClick={() => navigate("/categoria-mesas")} className="px-5 py-2.5 bg-zinc-950 text-white text-xs font-bold rounded-xl">
          Voltar para Mesas
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
          <Link to="/categoria-mesas" className="hover:text-zinc-950 transition-colors">Mesas</Link>
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
            className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200/60 shadow-md group"
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
                <span className="font-bold text-zinc-950">{produto.name}</span> {produto.complementoDescricao}
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

export default DetalhesMesas;