import React from "react";
import { FadeIn } from "./FadeIn";
import { CoffeeProduct } from "../types";

const products: CoffeeProduct[] = [
  {
    id: "light",
    name: "AAMU (Morning)",
    tagline: "朝霧のように軽やかな",
    description:
      "レモンティーのような透き通った酸味と、\nほのかに香るジャスミンの余韻。\n重たい朝の空気を、優しく解きほぐします。",
    roastLevel: "Light",
    imageUrl: "light-bean.png",
    imageAlt: "Light roast coffee beans close up",
    imagePrompt:
      "Macro shot of light roast coffee beans, high key lighting, soft focus, minimal composition",
  },
  {
    id: "medium",
    name: "ILTA (Evening)",
    tagline: "午後の陽だまりのような",
    description:
      "ナッツの香ばしさと、キャラメルのような甘み。\n読書の合間に、ふっと肩の力を抜くための\n優しいバランスに仕上げました。",
    roastLevel: "Medium",
    imageUrl: "medium-bean.png",
    imageAlt: "Hand pouring coffee",
    imagePrompt:
      "Close up of hand pouring water over coffee grounds, warm sunlight hitting the steam, cinematic",
  },
];

export const Lineup: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-32">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-emerald-800 text-xs tracking-[0.2em] uppercase block mb-4">
              Our Beans
            </span>
            <h2 className="text-2xl md:text-3xl tracking-widest font-light">
              季節の豆を、少しずつ。
            </h2>
          </div>
        </FadeIn>

        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12 md:gap-20`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <FadeIn delay={200}>
                {/* Image: {product.imagePrompt} */}
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-stone-100">
                  <img
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <FadeIn delay={400}>
                <span className="inline-block px-3 py-1 border border-stone-300 text-[10px] tracking-widest text-stone-500 rounded-full mb-6">
                  {product.roastLevel.toUpperCase()} ROAST
                </span>
                <h3 className="text-2xl font-light tracking-wide mb-2">
                  {product.name}
                </h3>
                <p className="text-emerald-800 text-sm italic serif mb-8 opacity-80">
                  {product.tagline}
                </p>
                <p className="text-stone-600 leading-loose whitespace-pre-wrap text-sm md:text-base font-light">
                  {product.description}
                </p>
              </FadeIn>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
