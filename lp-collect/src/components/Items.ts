// const BASE_URL = "https://nexgen-web.com";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const PortfolioItems = [
  {
    id: "1",
    title: "THE STACK BURGER",
    category: "Restaurant / Food",
    description:
      "本格グルメバーガー店のブランドサイト。ダークUIでシズル感を演出し、メニュー一覧・店舗情報を掲載。",
    imageUrl: "burger.png",
    size: "large",
    tags: ["飲食店", "シズル感", "ダークUI"],
    urls: `${BASE_URL}/the-stack-burger/`,
  },
  {
    id: "2",
    title: "RoboKids",
    category: "Education / Kids",
    description:
      "子供向けプログラミング教室のLP。PASONAの法則を活用し、無料体験への導線を最適化。",
    imageUrl: "kid.png",
    size: "wide",
    tags: ["教育", "LP", "CTA最適化"],
    urls: `${BASE_URL}/robokids/`,
  },
  {
    id: "3",
    title: "YoRHa Archive",
    category: "Entertainment / Fan",
    description:
      "NieR:Automata風のファンサイト。ブートシーケンス演出やグリッチエフェクトで世界観を再現。",
    imageUrl: "yorha.png",
    size: "wide",
    tags: ["近未来", "アニメーション", "世界観構築"],
    urls: `${BASE_URL}/yorha/`,
  },
  {
    id: "4",
    title: "NORDIC ROAST",
    category: "Restaurant / Cafe",
    description:
      "北欧風カフェのブランドサイト。シンプルで洗練されたデザインと、メニュー・店舗情報を掲載。",
    imageUrl: "nordic-roast.png",
    size: "tall",
    tags: ["飲食店", "北欧デザイン", "シンプル"],
    urls: `${BASE_URL}/nordic-roast/`,
  },
];
