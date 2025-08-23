export {};

// 無名関数の定義・使い方
let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};
/** 無名関数の格納先の変数のアノテーション
 * 推論時→ let bmi: (height: number, weight: number) => number
 * 推論ではなく厳密にアノテーションしたい場合は推論内容（：以降）を張り付けると○
 */

console.log(bmi(1.78, 86));
