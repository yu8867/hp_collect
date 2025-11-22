import { MenuItem, FeatureItem } from "../types";

export const BURGER_MENU: MenuItem[] = [
  {
    id: "1",
    name: "THE STACK",
    description: "黒毛和牛パティ2枚×厚切りベーコン。肉の塔が、理性を破壊する。",
    price: "¥2,480",
    imageUrl: "https://picsum.photos/600/600?random=1", // AI Prompt: A massive double cheeseburger with thick bacon, overflowing meat juices, dark moody lighting, professional food photography, macro shot.
    tags: ["No.1 人気", "肉量 400g"],
  },
  {
    id: "2",
    name: "CHEESE VOLCANO",
    description: "特製レッドチェダーソースの奔流。溢れ出すマグマを飲み干せ。",
    price: "¥2,180",
    imageUrl: "https://picsum.photos/600/600?random=2", // AI Prompt: A gourmet burger completely covered in flowing melted yellow and red cheddar cheese sauce, steam rising, dark background, vibrant colors.
    tags: ["濃厚", "辛口"],
  },
  {
    id: "3",
    name: "TRUFFLE BLACK",
    description:
      "黒トリュフ香るソースとマッシュルーム。大人の欲望を満たす漆黒の贅沢。",
    price: "¥2,880",
    imageUrl: "https://picsum.photos/600/600?random=3", // AI Prompt: A luxury burger with black truffle sauce, sautéed mushrooms, charcoal black bun, elegant moody lighting, cinematic look.
    tags: ["期間限定", "香り高い"],
  },
  {
    id: "4",
    name: "AVOCADO MOUNTAIN",
    description:
      "完熟アボカド1/2個を贅沢に使用。濃厚なコクと和牛の旨味が絡み合う。",
    price: "¥2,380",
    imageUrl: "https://picsum.photos/600/600?random=4",
    tags: ["女性人気No.1"],
  },
];

export const SIDE_MENU: MenuItem[] = [
  {
    id: "s1",
    name: "TRUFFLE FRIES",
    description:
      "トリュフオイルとパルミジャーノを纏った、禁断のフライドポテト。",
    price: "¥880",
    imageUrl: "https://picsum.photos/600/600?random=20",
    tags: [],
  },
  {
    id: "s2",
    name: "ONION RINGS",
    description: "ビール衣でカリッと揚げた、甘みたっぷりのオニオンリング。",
    price: "¥780",
    imageUrl: "https://picsum.photos/600/600?random=21",
    tags: [],
  },
  {
    id: "s3",
    name: "CAESAR SALAD",
    description: "厚切りベーコンと温泉卵のシーザーサラダ。",
    price: "¥1,180",
    imageUrl: "https://picsum.photos/600/600?random=22",
    tags: [],
  },
];

export const DRINK_MENU: MenuItem[] = [
  {
    id: "d1",
    name: "CRAFT COLA",
    description: "10種類のスパイスを調合した自家製コーラ。",
    price: "¥680",
    imageUrl: "https://picsum.photos/600/600?random=30",
    tags: [],
  },
  {
    id: "d2",
    name: "GINGER ALE",
    description: "辛口ジンジャーエール。",
    price: "¥680",
    imageUrl: "https://picsum.photos/600/600?random=31",
    tags: [],
  },
  {
    id: "d3",
    name: "CRAFT BEER",
    description: "肉料理に合う厳選クラフトビール。",
    price: "¥1,200",
    imageUrl: "https://picsum.photos/600/600?random=32",
    tags: [],
  },
];

export const FEATURES: FeatureItem[] = [
  {
    title: "黒毛和牛 100%",
    description:
      "つなぎ一切なし。噛み締めるたびに「肉」を感じる超粗挽きパティ。赤身と脂の黄金比率が、脳髄を直撃する。",
    imageUrl: "meat.png", // AI Prompt: Raw Wagyu beef patty, high quality marbling, close up, dramatic lighting, chef seasoning with salt.
  },
  {
    title: "自家製ブリオッシュ",
    description:
      "肉汁を受け止めるためだけに開発された、バター香る特製バンズ。カリッと焼かれた断面が、食欲を加速させる。",
    imageUrl: "https://picsum.photos/800/600?random=11", // AI Prompt: Freshly baked brioche burger buns, golden brown, steam rising, butter melting, dark background.
  },
];

export const STORE_INFO = {
  address: "東京都港区六本木 7-XX-XX THE STACK BLDG 1F",
  hours: "11:00 - 23:00 (L.O. 22:30)",
  tel: "03-XXXX-XXXX",
};
