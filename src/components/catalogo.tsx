import { useState, useMemo } from 'react';
import { MessageCircle } from 'lucide-react'; // Importação do ícone de conversa/chat aplicável para WhatsApp

interface ProductItem {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

export default function Catalogo() {
  const [activeCategory, setActiveCategory] = useState<string>('TODOS');

  const categories = ['TODOS', 'COLARES', 'BRINCOS', 'BRACELETES', 'TORNOZELEIRAS'];

  const products: ProductItem[] = [
    {
      id: 1,
      name: "Colar Riviera Lumière",
      category: "COLARES",
      price: "R$ 389,00",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 2,
      name: "Brincos Orgânicos Solitaire",
      category: "BRINCOS",
      price: "R$ 249,00",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 3,
      name: "Bracelete Minimalist Arch",
      category: "BRACELETES",
      price: "R$ 319,00",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 4,
      name: "Choker Éclat Corrente",
      category: "COLARES",
      price: "R$ 298,00",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 5,
      name: "Argolas Fluidas Sculpt",
      category: "BRINCOS",
      price: "R$ 189,00",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 6,
      name: "Bracelete Linearity Duplo",
      category: "BRACELETES",
      price: "R$ 340,00",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=500",
    }
  ];

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'TODOS') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  // Função auxiliar para gerar o link do WhatsApp com mensagem personalizada baseado no produto
  const handleWhatsAppClick = (productName: string) => {
    const phoneNumber = "5511999999999"; // Substitua pelo seu número comercial real
    const text = encodeURIComponent(`Olá! Gostaria de mais informações sobre a peça: ${productName} do catálogo.`);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <section 
      id="catalogo" 
      className="relative w-full bg-[#FFFFFF] text-black py-16 sm:py-20 selection:bg-black selection:text-white border-b border-zinc-100"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= TOPO COM OS FILTROS ================= */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 border-b border-zinc-100 pb-6">
          <div>
            <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-400 uppercase block mb-1">
              PEÇAS SELECIONADAS
            </span>
            <h2 className="text-xl sm:text-2xl font-extralight tracking-tight text-zinc-950">
              Catálogo
            </h2>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-[10px] font-medium tracking-[0.15em] uppercase transition-colors duration-300 focus:outline-none cursor-pointer relative pb-1 ${
                  activeCategory === category ? 'text-black font-semibold' : 'text-zinc-400 hover:text-black'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ================= MINI GRADE COMPACTA RESPONSIVA ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => handleWhatsAppClick(product.name)}
              className="group/card flex flex-col w-full bg-white cursor-pointer"
            >
              
              {/* CONTAINER DA IMAGEM */}
              <div className="relative w-full aspect-[4/5] bg-zinc-50 overflow-hidden border border-zinc-100 transition-all duration-500">
                
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center filter-none md:filter md:grayscale group-hover/card:md:grayscale-0 group-hover/card:scale-103 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />

                <div className="absolute inset-0 bg-black/[0.01] md:group-hover/card:bg-transparent transition-colors duration-300" />
                
                {/* BOTÃO DO WHATSAPP REESTILIZADO (Verde Sutil/Premium ao interagir) */}
                <div className="absolute bottom-2 right-2 md:opacity-0 md:translate-y-1 md:group-hover/card:opacity-100 md:group-hover/card:translate-y-0 transition-all duration-300">
                  <div className="w-8 h-8 bg-white text-black border border-zinc-200 inline-flex items-center justify-center rounded-full shadow-sm active:bg-[#25D366] active:text-white active:border-[#25D366] md:hover:bg-[#25D366] md:hover:text-white md:hover:border-[#25D366] transition-all duration-300">
                    <MessageCircle size={14} strokeWidth={2} />
                  </div>
                </div>

              </div>

              {/* METADADOS COMPACTOS */}
              <div className="mt-3 flex flex-col">
                <span className="text-[8px] font-mono tracking-widest text-zinc-400 uppercase mb-0.5">
                  {product.category}
                </span>

                <h3 className="text-xs font-light text-zinc-800 tracking-tight leading-tight group-hover/card:text-black transition-colors duration-300 truncate">
                  {product.name}
                </h3>

                <div className="text-xs font-medium text-zinc-950 mt-1 font-mono">
                  {product.price}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}