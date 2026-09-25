import React, { useState, useEffect } from 'react';
import { 
  Search, ShoppingCart, User, Menu, ChevronRight, ChevronLeft, 
  Star, Truck, CreditCard, Smartphone, Tv, Refrigerator, 
  WashingMachine, Gamepad2, Heart, X, Trash2, Plus, Minus,
  ArrowRight, ShieldCheck, Headphones, MapPin
} from 'lucide-react';

const CasasBahiaPremium = () => {
  // Estados Globais
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeBanner, setActiveBanner] = useState(0);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const banners = [
    {
      id: 1,
      title: "Semanas do Smartphone",
      subtitle: "iPhone e Samsung com preços de custo e frete grátis",
      image: "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "from-red-600 to-red-800",
      cta: "Aproveitar Agora"
    },
    {
      id: 2,
      title: "Eletro Premium",
      subtitle: "Geladeiras e Lavadoras com até 12x sem juros",
      image: "https://images.pexels.com/photos/19599329/pexels-photo-19599329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "from-blue-600 to-blue-800",
      cta: "Ver Ofertas"
    },
    {
      id: 3,
      title: "Mundo Gamer",
      subtitle: "PS5, Xbox e Notebooks Gamer em oferta",
      image: "https://images.pexels.com/photos/12019611/pexels-photo-12019611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "from-purple-600 to-indigo-800",
      cta: "Equipar meu Setup"
    }
  ];

  const categories = [
    { name: "Smartphones", icon: <Smartphone />, img: "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&w=150" },
    { name: "TVs e Vídeo", icon: <Tv />, img: "https://images.pexels.com/photos/15259088/pexels-photo-15259088.jpeg?auto=compress&cs=tinysrgb&w=150" },
    { name: "Geladeiras", icon: <Refrigerator />, img: "https://images.pexels.com/photos/8082207/pexels-photo-8082207.jpeg?auto=compress&cs=tinysrgb&w=150" },
    { name: "Lavadoras", icon: <WashingMachine />, img: "https://images.pexels.com/photos/33686459/pexels-photo-33686459.jpeg?auto=compress&cs=tinysrgb&w=150" },
    { name: "Games", icon: <Gamepad2 />, img: "https://images.pexels.com/photos/12019611/pexels-photo-12019611.jpeg?auto=compress&cs=tinysrgb&w=150" },
    { name: "Eletroportáteis", icon: <Search />, img: "https://images.pexels.com/photos/19599329/pexels-photo-19599329.jpeg?auto=compress&cs=tinysrgb&w=150" },
  ];

  const products = [
    { id: 1, name: "iPhone 15 Pro Max 256GB Titânio", price: 7499.00, oldPrice: 8900.00, rating: 4.9, reviews: 1240, image: "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Oferta Relâmpago", discount: "16%" },
    { id: 2, name: "Smart TV LG OLED Evo 65\" 4K", price: 5899.00, oldPrice: 7200.00, rating: 4.8, reviews: 890, image: "https://images.pexels.com/photos/15259088/pexels-photo-15259088.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Mais Vendido", discount: "18%" },
    { id: 3, name: "Geladeira Samsung Bespoke Inox", price: 4200.00, oldPrice: 5100.00, rating: 4.7, reviews: 450, image: "https://images.pexels.com/photos/8082207/pexels-photo-8082207.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Frete Grátis", discount: "17%" },
    { id: 4, name: "PlayStation 5 Slim + God of War", price: 3899.00, oldPrice: 4400.00, rating: 5.0, reviews: 2100, image: "https://images.pexels.com/photos/12019611/pexels-photo-12019611.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Estoque Limitado", discount: "11%" },
    { id: 5, name: "Lava e Seca LG AI DD 11kg", price: 4100.00, oldPrice: 4900.00, rating: 4.6, reviews: 320, image: "https://images.pexels.com/photos/33686459/pexels-photo-33686459.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Melhor Preço", discount: "16%" },
    { id: 6, name: "Air Fryer Philips Walita Digital", price: 849.00, oldPrice: 1100.00, rating: 4.4, reviews: 1500, image: "https://images.pexels.com/photos/19599329/pexels-photo-19599329.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Essencial", discount: "22%" },
  ];

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }));
  };

  const removeItem = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className={`min-h-screen bg-[#F5F7FA] font-sans text-slate-900 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Top Utility Bar */}
      <div className="bg-[#003399] text-white text-[11px] py-2 px-4 flex justify-between items-center font-medium">
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap no-scrollbar">
          <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 cursor-pointer transition-all"><Truck size={13} /> Frete Grátis para capitais</span>
          <span className="hidden md:flex items-center gap-1.5 opacity-90 hover:opacity-100 cursor-pointer transition-all"><CreditCard size={13} /> Até 24x no Cartão Casas Bahia</span>
          <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 cursor-pointer transition-all"><ShieldCheck size={13} /> Compra 100% Segura</span>
        </div>
        <div className="hidden sm:flex gap-4">
          <span className="cursor-pointer hover:underline">Ajuda</span>
          <span className="cursor-pointer hover:underline">Meus Pedidos</span>
        </div>
      </div>

      {/* Premium Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMenuOpen(true)} className="p-2 hover:bg-gray-100 rounded-xl transition-all active:scale-90">
              <Menu size={26} className="text-[#003399]" />
            </button>
            <div className="text-2xl font-black text-red-600 tracking-tighter cursor-pointer select-none">
              CASAS <span className="text-[#003399]">BAHIA</span>
            </div>
          </div>

          <div className="flex-1 relative group">
            <input 
              type="text" 
              placeholder="Busque por produtos, marcas ou categorias..." 
              className="w-full bg-gray-100 border-transparent rounded-2xl py-2.5 px-5 pr-12 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-1 top-1 bottom-1 px-4 bg-[#003399] text-white rounded-xl hover:bg-blue-700 transition-all active:scale-95">
              <Search size={18} />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-2 cursor-pointer group transition-all">
              <div className="p-2 bg-gray-100 rounded-full group-hover:bg-blue-100 transition-colors">
                <User size={22} className="text-[#003399]" />
              </div>
              <div className="text-[11px] leading-tight">
                <p className="text-gray-400">Olá, entre ou</p>
                <p className="font-bold text-slate-700">Crie sua conta</p>
              </div>
            </div>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-all active:scale-90"
            >
              <ShoppingCart size={24} className="text-[#003399]" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-bounce">
                  {cart.reduce((a, b) => a + b.qty, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-xs h-full bg-white shadow-2xl animate-slide-in">
            <div className="p-5 border-b flex justify-between items-center bg-gradient-to-r from-[#003399] to-blue-700 text-white">
              <span className="font-bold text-lg">Menu Principal</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="overflow-y-auto h-full pb-20">
              <div className="p-4 bg-gray-50 border-b">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer">
                  <User size={20} className="text-blue-600" />
                  <span className="font-semibold text-sm">Minha Conta</span>
                </div>
              </div>
              {categories.map((cat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 hover:bg-blue-50 cursor-pointer border-b border-gray-50 transition-all group">
                  <div className="p-2 bg-gray-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {cat.icon}
                  </div>
                  <span className="font-medium text-slate-700 group-hover:text-blue-700">{cat.name}</span>
                  <ChevronRight size={16} className="ml-auto text-gray-300 group-hover:text-blue-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="absolute right-0 top-0 w-full max-w-md h-full bg-white shadow-2xl animate-slide-right flex flex-col">
            <div className="p-5 border-b flex justify-between items-center bg-gray-50">
              <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
                <ShoppingCart size={24} className="text-blue-600" />
                Meu Carrinho
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <ShoppingCart size={64} className="mb-4 text-gray-300" />
                  <p className="text-lg font-medium">Seu carrinho está vazio</p>
                  <p className="text-sm">Que tal dar uma olhadinha nas ofertas?</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-blue-200 transition-all">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-800 line-clamp-1">{item.name}</h4>
                      <p className="text-blue-600 font-black text-md">R$ {item.price.toFixed(2)}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 bg-white rounded-lg border px-2 py-1">
                          <button onClick={() => updateQty(item.id, -1)} className="text-gray-400 hover:text-red-500"><Minus size={14} /></button>
                          <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="text-gray-400 hover:text-blue-500"><Plus size={14} /></button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50 space-y-4">
                <div className="flex justify-between items-center text-slate-600">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-bold text-slate-900">R$ {cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-green-600 text-sm">
                  <span className="font-medium">Frete</span>
                  <span className="font-bold">GRÁTIS</span>
                </div>
                <div className="flex justify-between items-center text-xl font-black text-slate-900 pt-2 border-t">
                  <span>Total</span>
                  <span>R$ {cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-[#003399] text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                  Finalizar Compra <ArrowRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[550px] overflow-hidden bg-slate-200">
        {banners.map((banner, index) => (
          <div 
            key={banner.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === activeBanner ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.color} opacity-60 z-20`} />
            <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-30 flex flex-col justify-center px-8 md:px-24 text-white max-w-3xl">
              <div className="flex items-center gap-2 mb-4 animate-fade-in-up">
                <span className="bg-white text-red-600 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Oferta Limitada</span>
                <span className="h-px w-12 bg-white/50" />
              </div>
              <h1 className="text-4xl md:text-7xl font-black mb-4 leading-tight drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {banner.title}
              </h1>
              <p className="text-lg md:text-2xl mb-8 opacity-90 font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                {banner.subtitle}
              </p>
              <button className="bg-white text-[#003399] font-black py-4 px-10 rounded-full w-fit hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                {banner.cta}
              </button>
            </div>
          </div>
        ))}
        <button 
          onClick={() => setActiveBanner(prev => (prev === 0 ? banners.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-md transition-all"
        >
          <ChevronLeft size={30} />
        </button>
        <button 
          onClick={() => setActiveBanner(prev => (prev === banners.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-md transition-all"
        >
          <ChevronRight size={30} />
        </button>
      </section>

      {/* Categories Quick Access */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 border-4 border-white shadow-sm group-hover:border-blue-500 transition-all duration-300 ring-1 ring-gray-200">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <span className="text-[11px] md:text-xs font-bold text-slate-600 group-hover:text-blue-600 transition-colors text-center leading-tight">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Ofertas do Momento</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Os mais desejados</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all">
            Ver todas as ofertas <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group relative border border-gray-100 hover:-translate-y-2">
              <button className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-all shadow-sm">
                <Heart size={18} />
              ```jsx
</button>

<div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-gray-50">
<img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
<div className="absolute top-2 left-2 flex flex-col gap-1">
<span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase shadow-lg">
{product.tag}
</span>
<span className="bg-green-500 text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase shadow-lg">
-{product.discount}
</span>
</div>
</div>

<div className="flex-1 flex flex-col">
<div className="flex items-center gap-1 mb-2">
<div className="flex text-yellow-400">
{[...Array(5)].map((_, i) => (
<Star key={i} size={10} fill={i < Math.floor(product.rating)? "currentColor": "none"} />
))}
</div>
<span className="text-[10px] text-gray-400 font-medium">({product.reviews})</span>
</div>

<h3 className="text-xs font-bold text-slate-700 line-clamp-2 mb-3 h-8 group-hover:text-blue-600 transition-colors">
{product.name}
</h3>

<div className="mt-auto space-y-1">
<p className="text-[10px] text-gray-400 line-through font-medium">R$ {product.oldPrice.toFixed(2)}</p>
<div className="flex items-baseline gap-1">
<span className="text-[10px] font-bold text-slate-900">R$</span>
<span className="text-xl font-black text-[#003399]">{product.price.toFixed(2)}</span>
</div>
<p className="text-[10px] text-blue-600 font-bold mb-4">em até 12x sem juros</p>

<button
onClick={() => addToCart(product)}
className="w-full bg-white text-[#003399] border-2 border-[#003399] font-black py-2.5 rounded-xl text-xs hover:bg-[#003399] hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2 group/btn"
>
<ShoppingCart size={14} className="group-hover/btn:animate-bounce" />
Adicionar
</button>
</div>
</div>
</div>
))}
</div>
</section>

{/* Trust Badges Section */}
<section className="bg-white border-y border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex items-center gap-5 p-6 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-colors group">
<div className="p-4 bg-white rounded-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
<Truck size={32} />
</div>
<div>
<h4 className="font-bold text-slate-800">Entrega Ultra Rápida</h4>
<p className="text-xs text-slate-500">Receba seus produtos em até 24h em capitais.</p>
</div>
</div>
<div className="flex items-center gap-5 p-6 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-colors group">
<div className="p-4 bg-white rounded-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
<ShieldCheck size={32} />
</div>
<div>
<h4 className="font-bold text-slate-800">Garantia Estendida</h4>
<p className="text-xs text-slate-500">Proteção total para seus eletrônicos por até 2 anos.</p>
</div>
</div>
<div className="flex items-center gap-5 p-6 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-colors group">
<div className="p-4 bg-white rounded-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
<Headphones size={32} />
</div>
<div>
<h4 className="font-bold text-slate-800">Suporte Especializado</h4>
<p className="text-xs text-slate-500">Atendimento humano e rápido via WhatsApp.</p>
</div>
</div>
</div>
</section>

{/* Footer */}
<footer className="bg-[#003399] text-white mt-20 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="space-y-6">
<div className="text-3xl font-black tracking-tighter">
CASAS <span className="text-red-500">BAHIA</span>
</div>
<p className="text-sm text-blue-200 leading-relaxed opacity-80">
Líder em varejo tecnológico, transformando a experiência de compra digital com inovação e confiança.
</p>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all"><Smartphone size={20} /></div>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all"><MapPin size={20} /></div>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all"><User size={20} /></div>
</div>
</div>

<div>
<h4 className="font-black mb-8 text-lg uppercase tracking-wider border-b border-blue-400 pb-2 w-fit">Institucional</h4>
<ul className="space-y-4 text-sm text-blue-200 font-medium">
<li className="hover:text-white cursor-pointer transition-all flex items-center gap-2"><ChevronRight size={12} /> Sobre a Empresa</li>
<li className="hover:text-white cursor-pointer transition-all flex items-center gap-2"><ChevronRight size={12} /> Relações com Investidores</li>
<li className="hover:text-white cursor-pointer transition-all flex items-center gap-2"><ChevronRight size={12} /> Sustentabilidade</li>
<li className="hover:text-white cursor-pointer transition-all flex items-center gap-2"><ChevronRight size={12} /> Trabalhe Conosco</li>
</ul>
</div>

<div>
<h4 className="font-black mb-8 text-lg uppercase tracking-wider border-b border-blue-400 pb-2 w-fit">Ajuda & Suporte</h4>
<ul className="space-y-4 text-sm text-blue-200 font-medium">
<li className="hover:text-white cursor-pointer transition-all flex items-center gap-2"><ChevronRight size={12} /> Central de Ajuda</li>
<li className="hover:text-white cursor-pointer transition-all flex items-center gap-2"><ChevronRight size={12} /> Trocas e Devoluções</li>
<li className="hover:text-white cursor-pointer transition-all flex items-center gap-2"><ChevronRight size={12} /> Acompanhar Pedido</li>
<li className="hover:text-white cursor-pointer transition-all flex items-center gap-2"><ChevronRight size={12} /> Termos de Uso</li>
</ul>
</div>

<div>
<h4 className="font-black mb-8 text-lg uppercase tracking-wider border-b border-blue-400 pb-2 w-fit">App Oficial</h4>
<div className="flex flex-col gap-4">
<div className="bg-black border border-white/20 rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-900 transition-all group">
<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black">A</div>
<div className="text-left">
<p className="text-[10px] uppercase opacity-60 font-bold">Download on</p>
<p className="text-sm font-black">App Store</p>
</div>
</div>
<div className="bg-black border border-white/20 rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-900 transition-all group">
<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black">G</div>
<div className="text-left">
<p className="text-[10px] uppercase opacity-60 font-bold">Get it on</p>
<p className="text-sm font-black">Google Play</p>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 pt-10 border-t border-blue-800 text-center text-[11px] text-blue-300 font-medium">
<p>© 2026 Casas Bahia Premium Clone - Interface de Alta Performance para Testes de UI/UX.</p>
</div>
</footer>

<style>{`
@keyframes slide-in {
from { transform: translateX(-100%); }
to { transform: translateX(0); }
}
@keyframes slide-right {
from { transform: translateX(100%); }
to { transform: translateX(0); }
}
@keyframes fade-in {
from { opacity: 0; }
to { opacity: 1; }
}
@keyframes fade-in-up {
from { opacity: 0; transform: translateY(20px); }
to { opacity: 1; transform: translateY(0); }
}
.animate-slide-in { animation: slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-slide-right { animation: slide-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
.animate-fade-in-up { animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`}</style>
</div>
);
};

export default CasasBahiaPremium;
