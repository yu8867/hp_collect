import React from "react";
import { FadeIn } from "./FadeIn";

export const Ritual: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-stone-100/50">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl tracking-widest font-light mb-6">
              朝の儀式
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed">
              おいしい淹れ方よりも、
              <br />
              心地よい時間を大切にしてください。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              step: "01",
              title: "整える",
              desc: "お湯を沸かしながら、\nカップを温める。\n心も一緒に温める時間。",
            },
            {
              step: "02",
              title: "蒸らす",
              desc: "お湯を少し注ぎ、30秒。\n膨らむ豆の香りを、\n胸いっぱいに吸い込む。",
            },
            {
              step: "03",
              title: "待つ",
              desc: "最後の一滴が落ちるまで、\n窓の外を眺める。\n何もしない贅沢。",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 200}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-stone-400 font-light mb-6">
                  {item.step}
                </div>
                <h3 className="text-lg tracking-widest mb-4">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-loose whitespace-pre-wrap font-light">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={600} className="mt-20">
          {/* Image: Close up of coffee dripping into a glass carafe, natural light, minimalist setting */}
          <div className="w-full max-w-lg mx-auto aspect-video rounded-lg overflow-hidden opacity-80">
            <img
              src="ritual.png"
              alt="Coffee brewing ritual"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
