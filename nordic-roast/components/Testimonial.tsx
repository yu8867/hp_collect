import React from "react";
import { FadeIn } from "./FadeIn";
import { TestimonialData } from "../types";

const reviews: TestimonialData[] = [
  {
    id: "1",
    text: "コーヒーを淹れる5分間だけは、スマホを置くようになりました。\nそんな「余白」が、今の私には必要だったみたいです。",
    author: "K.S (32) / Designer",
  },
  {
    id: "2",
    text: "酸味が苦手だと思っていましたが、\nこの浅煎りは果物のような甘みがありました。\n朝の光の中で飲むのが楽しみです。",
    author: "M.T (28) / Writer",
  },
  {
    id: "3",
    text: "酸味が苦手だと思っていましたが、\nこの浅煎りは果物のような甘みがありました。\n朝の光の中で飲むのが楽しみです。",
    author: "M.T (28) / Writer",
  },
  {
    id: "3",
    text: "酸味が苦手だと思っていましたが、\nこの浅煎りは果物のような甘みがありました。\n朝の光の中で飲むのが楽しみです。",
    author: "M.T (28) / Writer",
  },
];

export const Testimonial: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-center text-xs tracking-[0.2em] text-emerald-800 uppercase mb-16">
            Stories
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {reviews.map((review, i) => (
            <FadeIn key={review.id} delay={i * 200}>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="text-2xl text-stone-300 font-serif">"</div>
                <p className="text-stone-600 leading-loose text-sm font-light">
                  {review.text}
                </p>
                <p className="text-xs text-stone-400 tracking-wider mt-4">
                  {review.author}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
