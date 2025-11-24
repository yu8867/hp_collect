import React from "react";
import { FadeIn } from "./FadeIn";
import { JournalEntry } from "../types";

const entries: JournalEntry[] = [
  {
    id: "1",
    date: "OCT 24, 2023",
    category: "CULTURE",
    title: "静寂のための、5分間",
    excerpt:
      "フィンランドには「カハヴィタウコ」という言葉があります。仕事の手を止めて、ただコーヒーを飲む時間。それは逃避ではなく、自分を取り戻すための儀式です。",
    imageUrl: "break.png",
    imagePrompt:
      "Close up of a ceramic coffee cup held by hands in a wool sweater, soft daylight, hygge atmosphere",
  },
  {
    id: "2",
    date: "NOV 08, 2023",
    category: "BREWING",
    title: "冬の朝、最初の一杯",
    excerpt:
      "気温が氷点下になる朝。窓の霜が解けていくのを眺めながら、深呼吸するように豆を挽く。冬ならではのコーヒーの楽しみ方について、少し書き留めておきます。",
    imageUrl: "winter.png",
    imagePrompt:
      "Frosty window pane with morning light shining through, blurred snowy landscape background, tranquil and silent",
  },
];

export const Journal: React.FC = () => {
  return (
    <section
      id="journal"
      className="py-24 md:py-32 px-6 border-t border-stone-100 bg-stone-50/50"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20">
            <div>
              <span className="text-emerald-800 text-xs tracking-[0.2em] uppercase block mb-4">
                Journal
              </span>
              <h2 className="text-2xl md:text-3xl tracking-widest font-light text-stone-800">
                北欧の暮らしと、
                <br />
                コーヒーの記録
              </h2>
            </div>
            <a
              href="#"
              className="hidden md:block text-xs tracking-widest text-stone-400 hover:text-stone-800 transition-colors border-b border-transparent hover:border-stone-300 pb-1 mt-8 md:mt-0"
            >
              VIEW ALL NOTES
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {entries.map((entry, index) => (
            <FadeIn key={entry.id} delay={index * 200}>
              <article className="group cursor-pointer">
                {/* Image: {entry.imagePrompt} */}
                <div className="aspect-[3/2] overflow-hidden rounded-lg mb-8 bg-stone-100">
                  <img
                    src={entry.imageUrl}
                    alt={entry.title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-[1.5s] ease-out group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="flex items-center gap-4 text-[10px] tracking-widest text-stone-400 mb-4">
                  <span>{entry.date}</span>
                  <span className="w-8 h-[1px] bg-stone-200"></span>
                  <span>{entry.category}</span>
                </div>
                <h3 className="text-xl font-light tracking-wide text-stone-800 mb-4 group-hover:text-emerald-800 transition-colors duration-300">
                  {entry.title}
                </h3>
                <p className="text-sm text-stone-600 leading-loose font-light line-clamp-3">
                  {entry.excerpt}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <a
            href="#"
            className="text-xs tracking-widest text-stone-400 hover:text-stone-800 border-b border-stone-200 pb-1"
          >
            VIEW ALL NOTES
          </a>
        </div>
      </div>
    </section>
  );
};
