import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  Phone,
  ChevronDown,
  Flame,
  ShoppingBag,
  Menu as MenuIcon,
  X,
  ArrowRight,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import {
  BURGER_MENU,
  SIDE_MENU,
  DRINK_MENU,
  FEATURES,
  STORE_INFO,
} from "./constants";

type Page = "home" | "menu";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset scroll when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: Page, anchor?: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    if (anchor) {
      // Small timeout to allow page render before scrolling
      setTimeout(() => {
        const element = document.getElementById(anchor);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-orange selection:text-white pb-24">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-black/95 backdrop-blur-md py-4 border-b border-white/10"
            : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button
            onClick={() => navigateTo("home")}
            className="text-2xl md:text-3xl font-black tracking-tighter italic relative z-50"
          >
            THE <span className="text-brand-orange">STACK</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 font-bold text-sm tracking-widest">
              <li>
                <button
                  onClick={() => navigateTo("home", "concept")}
                  className="hover:text-brand-orange transition-colors uppercase"
                >
                  Concept
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("menu")}
                  className={`hover:text-brand-orange transition-colors uppercase ${
                    currentPage === "menu" ? "text-brand-orange" : ""
                  }`}
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("home", "access")}
                  className="hover:text-brand-orange transition-colors uppercase"
                >
                  Access
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden z-50 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center transition-all duration-300 ${
            mobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-8 text-center font-black text-2xl tracking-widest">
            <li>
              <button
                onClick={() => navigateTo("home")}
                className="hover:text-brand-orange transition-colors"
              >
                HOME
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("home", "concept")}
                className="hover:text-brand-orange transition-colors"
              >
                CONCEPT
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("menu")}
                className="hover:text-brand-orange transition-colors text-4xl"
              >
                MENU
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("home", "access")}
                className="hover:text-brand-orange transition-colors"
              >
                ACCESS
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {currentPage === "home" ? (
          <HomePage onOrderClick={() => navigateTo("menu")} />
        ) : (
          <MenuPage />
        )}
      </main>

      {/* Footer (Common) */}
      <footer className="bg-black py-12 text-center text-gray-600 text-xs border-t border-white/5 pb-32">
        <div className="flex justify-center gap-4 mb-8">
          {/* Social icons placeholder */}
          <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-brand-orange transition-colors cursor-pointer">
            <Instagram className="w-5 h-5 m-1 text-gray-400 hover:text-black transition-colors" />
          </div>
          <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-brand-orange transition-colors cursor-pointer">
            <Twitter className="w-5 h-5 m-1 text-gray-400 hover:text-black transition-colors" />
          </div>
          <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-brand-orange transition-colors cursor-pointer">
            <Facebook className="w-5 h-5 m-1 text-gray-400 hover:text-black transition-colors" />
          </div>
        </div>
        <p className="tracking-widest mb-2">THE STACK BURGER</p>
        <p>&copy; 2024 THE STACK BURGER. ALL RIGHTS RESERVED.</p>
      </footer>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-50 bg-gradient-to-t from-black via-black/80 to-transparent pt-10 pointer-events-none">
        <button
          onClick={() => navigateTo("menu")}
          className="pointer-events-auto w-full max-w-md mx-auto bg-brand-orange text-white font-black text-xl py-4 rounded-sm shadow-[0_0_20px_rgba(255,69,0,0.6)] animate-pulse_glow hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
        >
          <Flame className="w-6 h-6 fill-white" />
          メニューを見る
        </button>
      </div>
    </div>
  );
};

/* --- Home Page Component --- */
const HomePage: React.FC<{ onOrderClick: () => void }> = ({ onOrderClick }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('hamburger2.png')",
            filter: "brightness(0.5)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10"></div>

        <div className="relative z-20 text-center px-4 animate-fade-in-up w-full">
          <p className="text-brand-orange font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 text-sm md:text-xl uppercase drop-shadow-lg">
            Authentic Burger Experience
          </p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter mb-6 drop-shadow-xl italic">
            肉汁、
            <br className="md:hidden" />
            解禁。
          </h2>
          <p className="text-gray-300 text-sm md:text-lg max-w-lg mx-auto mb-10 font-medium leading-relaxed px-4">
            理性を捨てろ。本能で喰らえ。
            <br />
            一滴も逃したくない、至高の黒毛和牛体験。
          </p>

          <button
            onClick={() => {
              document
                .getElementById("concept")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex flex-col items-center gap-2 text-white/70 hover:text-brand-orange transition-colors mx-auto mt-8 md:mt-12 cursor-pointer"
          >
            <span className="text-xs tracking-widest">SCROLL</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-brand-orange" />
          </button>
        </div>
      </section>

      {/* Concept Section */}
      <section
        id="concept"
        className="py-20 md:py-32 px-6 bg-black relative overflow-hidden"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-12">
            <Flame className="text-brand-orange w-6 h-6" />
            <h3 className="text-brand-orange font-black tracking-widest text-lg">
              OUR OBSESSION
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                本能を呼び覚ます、
                <br />
                圧倒的<span className="text-brand-orange">肉塊</span>。
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                「ハンバーガーは、ジャンクフードではない。肉料理だ。」
              </p>
              <p className="text-gray-400 leading-relaxed mb-12 text-sm md:text-base">
                私たちが追求したのは、綺麗にまとまった味ではない。
                一口食べた瞬間に脳内物質が溢れ出すような、暴力的かつ繊細な旨味の奔流。
                THE
                STACKは、あなたの「肉への渇望」を完全に満たすために存在する。
              </p>
            </div>
            <div className="relative px-4 md:px-0">
              <img
                src="hamburger.png"
                alt="Concept Visual"
                className="w-full h-auto object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-4 -left-0 md:-left-4 w-24 h-24 bg-brand-orange/20 backdrop-blur-sm border border-brand-orange/50"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 md:mt-24">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-neutral-900/50 p-6 md:p-8 border border-white/5 hover:border-brand-orange/30 transition-colors group"
              >
                <div className="h-48 overflow-hidden mb-6">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-brand-orange transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-loose">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Menu Preview */}
      <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-brand-orange font-black tracking-widest text-lg mb-2">
              RECOMMENDED
            </h3>
            <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">
              THE{" "}
              <span className="stroke-text text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                BEST
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {BURGER_MENU.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group relative bg-black border border-white/10 overflow-hidden hover:border-brand-orange/50 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-brand-orange text-black text-xs font-bold px-2 py-1 uppercase tracking-tighter shadow-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="p-6 relative -mt-12 z-10">
                  <h3 className="text-2xl font-black italic mb-2 group-hover:text-brand-orange transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 h-12 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-end justify-between border-t border-white/10 pt-4">
                    <span className="text-3xl font-black tracking-tighter">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={onOrderClick}
              className="inline-flex items-center gap-2 border border-white px-8 py-4 hover:bg-white hover:text-black transition-colors tracking-widest font-bold"
            >
              VIEW ALL MENU <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Access Section (Global on Home) */}
      <section
        id="access"
        className="py-20 px-6 bg-black border-t border-white/5"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">ACCESS</h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            <div className="w-full md:w-1/2 max-w-lg space-y-8 text-center md:text-center">
              <div className="flex flex-col items-center gap-2">
                <MapPin className="text-brand-orange w-8 h-8 mb-2" />
                <div>
                  <p className="font-bold text-lg mb-1 tracking-widest text-gray-500">
                    ADDRESS
                  </p>
                  <p className="text-white text-xl font-medium">
                    {STORE_INFO.address}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="text-brand-orange w-8 h-8 mb-2" />
                <div>
                  <p className="font-bold text-lg mb-1 tracking-widest text-gray-500">
                    OPEN HOURS
                  </p>
                  <p className="text-white text-xl font-medium">
                    {STORE_INFO.hours}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Phone className="text-brand-orange w-8 h-8 mb-2" />
                <div>
                  <p className="font-bold text-lg mb-1 tracking-widest text-gray-500">
                    TEL
                  </p>
                  <p className="text-white text-2xl font-mono tracking-wider">
                    {STORE_INFO.tel}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder - Centered */}
            <div className="w-full md:w-1/2 max-w-lg aspect-video bg-neutral-900 relative group overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://picsum.photos/800/600?grayscale&blur=2"
                alt="Map Location"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="w-8 h-8 text-brand-orange animate-bounce" />
                  <span className="bg-black/80 px-4 py-2 text-xs tracking-widest border border-white/20">
                    GOOGLE MAPS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* --- Menu Page Component --- */
const MenuPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-neutral-900 min-h-screen animate-fade-in-up">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <p className="text-brand-orange font-bold tracking-widest mb-4">
            FULL LINEUP
          </p>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6">
            ALL <span className="text-brand-orange">MENUS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            厳選された食材、計算し尽くされた味のレイヤー。
            <br />
            あなたの本能を満たす全てがここに。
          </p>
        </div>

        {/* Burgers */}
        <div className="mb-20">
          <h3 className="text-3xl font-black mb-10 border-l-4 border-brand-orange pl-4">
            BURGERS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
            {BURGER_MENU.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row gap-6 bg-black p-6 border border-white/10 hover:border-brand-orange/50 transition-colors group"
              >
                <div className="w-full md:w-40 h-40 flex-shrink-0 overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.tags.length > 0 && (
                    <span className="absolute top-0 left-0 bg-brand-orange text-black text-[10px] font-bold px-2 py-1">
                      {item.tags[0]}
                    </span>
                  )}
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-black italic">{item.name}</h4>
                      <span className="text-xl font-bold text-brand-orange">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
                    <button className="text-sm font-bold text-white hover:text-brand-orange transition-colors flex items-center gap-2">
                      ORDER <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sides & Drinks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Sides */}
          <div>
            <h3 className="text-3xl font-black mb-10 border-l-4 border-brand-orange pl-4">
              SIDES
            </h3>
            <div className="space-y-6">
              {SIDE_MENU.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-dashed border-white/20 pb-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/5 rounded-full overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-lg">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Drinks */}
          <div>
            <h3 className="text-3xl font-black mb-10 border-l-4 border-brand-orange pl-4">
              DRINKS
            </h3>
            <div className="space-y-6">
              {DRINK_MENU.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-dashed border-white/20 pb-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/5 rounded-full overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-lg">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
