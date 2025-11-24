import React, { useState, useEffect } from "react";
import {
  Gamepad2,
  Brain,
  Lightbulb,
  Rocket,
  CheckCircle2,
  Menu,
  X,
  Star,
  Users,
  Laptop,
} from "lucide-react";
import { SITE_CONTENT } from "./constants";
import { SectionTitle } from "./components/SectionTitle";
import { Button } from "./components/Button";
import { StickyFooter } from "./components/StickyFooter";
import { Testimonials } from "./components/Testimonials";
import { Stats } from "./components/Stats";
import { FAQ } from "./components/FAQ";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

// Types for feature icons
const IconMap = {
  Brain: Brain,
  Heart: Users,
  Sparkles: Lightbulb,
};

// Smooth scroll handler
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0 font-sans bg-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white">
              <Rocket size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter text-brand-blue">
              RoboKids
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="font-bold text-gray-600 hover:text-brand-blue transition-colors"
            >
              特徴
            </a>
            <a
              href="#curriculum"
              onClick={(e) => handleNavClick(e, "curriculum")}
              className="font-bold text-gray-600 hover:text-brand-blue transition-colors"
            >
              コース
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="font-bold text-gray-600 hover:text-brand-blue transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="bg-brand-yellow px-4 py-2 rounded-full font-bold text-gray-900 shadow-sm hover:bg-yellow-400 hover:scale-105 transition-all"
            >
              無料体験
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-xl absolute w-full animate-fade-in">
            <a
              href="#features"
              className="font-bold text-gray-700 py-2 hover:text-brand-blue transition-colors"
              onClick={(e) => handleNavClick(e, "features")}
            >
              特徴
            </a>
            <a
              href="#curriculum"
              className="font-bold text-gray-700 py-2 hover:text-brand-blue transition-colors"
              onClick={(e) => handleNavClick(e, "curriculum")}
            >
              コース
            </a>
            <a
              href="#faq"
              className="font-bold text-gray-700 py-2 hover:text-brand-blue transition-colors"
              onClick={(e) => handleNavClick(e, "faq")}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="font-bold text-brand-pink py-2 hover:text-brand-purple transition-colors"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              無料体験予約
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20 overflow-hidden relative bg-gradient-to-b from-blue-50 to-white">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/20 rounded-full blur-3xl -z-10"></div>
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-brand-pink rounded-full animate-bounce opacity-60" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-brand-yellow rounded-full animate-bounce opacity-60" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-brand-blue rounded-full animate-bounce opacity-60" style={{ animationDelay: "1.5s" }}></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div
            className={`w-full md:w-1/2 text-center md:text-left z-10 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-block bg-brand-pink text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-4 animate-bounce shadow-md">
              {SITE_CONTENT.hero.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-900 mb-4 whitespace-pre-wrap">
              {SITE_CONTENT.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium whitespace-pre-wrap leading-relaxed">
              {SITE_CONTENT.hero.subtitle}
            </p>
            <div className="hidden md:block">
              <Button onClick={() => smoothScrollTo("contact")}>
                {SITE_CONTENT.cta.button}
              </Button>
            </div>
          </div>

          <div
            className={`w-full md:w-1/2 relative group transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="absolute inset-0 bg-brand-blue rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-gray-200 aspect-[4/3]">
              <img
                src="hero.png"
                alt="Happy kids coding"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Floating Badges */}
            <div
              className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <Gamepad2 className="text-brand-purple" />
              <span className="font-bold text-sm">楽しい！</span>
            </div>
            <div
              className="absolute -top-4 -left-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2 animate-bounce"
              style={{ animationDuration: "4s" }}
            >
              <Laptop className="text-brand-blue" />
              <span className="font-bold text-sm">将来役立つ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section (PASONA: Problem/Agitation) */}
      <section className="py-16 bg-brand-purple text-white relative">
        {/* Decorative Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 2px, transparent 2.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            <span className="border-b-4 border-brand-yellow pb-1">
              {SITE_CONTENT.problem.title}
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <ul className="space-y-4">
                {SITE_CONTENT.problem.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-yellow w-6 h-6 shrink-0 mt-0.5" />
                    <span className="text-lg font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {/* Prompt used: {IMAGE_PROMPTS.problem} */}
              <img
                src="concern.png"
                alt="Worried parent"
                className="rounded-xl shadow-lg opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-yellow text-brand-purple font-black p-4 rounded-full shadow-lg transform rotate-3">
                でも大丈夫！
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (PASONA: Solution) */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle color="blue">
            {SITE_CONTENT.solution.title}
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {SITE_CONTENT.solution.features.map((feature, idx) => {
              const Icon = IconMap[feature.icon as keyof typeof IconMap];
              return (
                <div
                  key={idx}
                  className="bg-blue-50 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-blue-100 group"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={40} className="text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section
        id="curriculum"
        className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50"
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle color="pink">
            {SITE_CONTENT.curriculum.title}
          </SectionTitle>

          <div className="flex flex-col gap-6 mt-8">
            {SITE_CONTENT.curriculum.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col md:flex-row gap-6 items-center border-l-8 border-brand-pink hover:translate-x-2 transition-transform"
              >
                <div className="w-full md:w-48 shrink-0">
                  {/* Prompt used: {IMAGE_PROMPTS.classScene} */}
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-32 md:h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {item.grade}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <section id="faq">
        <FAQ />
      </section>

      {/* CTA Section (Offer & Action) */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-brand-yellow/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-brand-pink/20 rounded-full blur-2xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Star
              className="inline-block text-brand-yellow w-12 h-12 animate-spin mb-4"
              style={{ animationDuration: "8s" }}
              fill="currentColor"
            />
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 whitespace-pre-wrap">
              {SITE_CONTENT.cta.main}
            </h2>
            <p className="text-gray-600 mb-8">
              プログラミングは、21世紀の「読み書きそろばん」。
              <br className="hidden md:block" />
              まずは気軽に、ロボットを動かす楽しさを体験してください。
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-brand-blue/20 mb-8 hover:shadow-2xl transition-shadow">
            <p className="font-bold text-brand-blue mb-4 text-lg">
              参加無料・手ぶらでOK！
            </p>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="保護者様のお名前"
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
              />
              <input
                type="email"
                placeholder="メールアドレス"
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
              />
              <Button
                fullWidth
                shadow={false}
                onClick={() => alert("デモ：申し込み完了！")}
              >
                {SITE_CONTENT.cta.button}
              </Button>
            </div>
            <p className="text-xs text-red-500 mt-4 font-bold">
              {SITE_CONTENT.cta.sub}
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-12 text-center text-gray-400 text-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white">
              <Rocket size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">
              RoboKids
            </span>
          </div>
          <p className="mb-2">子どもたちの未来を、プログラミングで切り拓く</p>
          <p>&copy; 2024 RoboKids Programming School. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky Mobile Footer */}
      <StickyFooter />
    </div>
  );
}

export default App;
