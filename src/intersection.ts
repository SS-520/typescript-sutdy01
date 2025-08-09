export {};

// 型エイリアスでPitcher1を定義
type Pitcher1 = {
  throwingSpeed: number;
};

// 型エイリアスでBatter1を定義
type Batter1 = {
  battingAverage: number;
};

// ピッチャー：大魔神佐々木
const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

// バッター：落合博満
const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367,
};

// 球速と打率両方持たせる

// 愚直に再定義する場合→とても手間、修正も大変
// type TwowayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

// intersectionを利用してスマートに設定
type TwowayPlayer = Pitcher1 & Batter1;

// 「型 & 型 & ...」で既存の型を組み合わせて新たな型を作成できる
// メンテも省エネ！

// 二刀流・大谷翔平
const OtaniShohei: TwowayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
