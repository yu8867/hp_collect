import React from "react";
import { FadeIn } from "./FadeIn";

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 px-6 bg-stone-50">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-12 text-stone-800">
            何もしない時間を、
            <br className="md:hidden" />
            売っています。
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="space-y-8 text-stone-600 text-sm md:text-base leading-loose font-light">
            <p>
              私たちのコーヒーは、
              <br />
              目を覚ますためのカフェインではありません。
            </p>
            <p>
              それは、忙しない日常の中に
              <br />
              「句読点」を打つための道具。
            </p>
            <p>
              お湯を沸かす音。
              <br />
              豆が膨らむ香り。
              <br />
              一口目の、静かな安らぎ。
            </p>
            <p>
              効率を追い求める世界から、
              <br />
              少しだけ離れる時間をあなたに。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={400} className="mt-16">
          {/* Image: Minimalist landscape of Finland lake and forest, foggy morning, 
                 muted greens and greys, cinematic wide shot */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <img
              src="silence.png"
              alt="Finnish forest landscape"
              className="object-cover w-full h-full opacity-80"
            />
          </div>
          <p className="mt-4 text-xs text-stone-400 tracking-widest text-right">
            FINLAND, 06:00 AM
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
