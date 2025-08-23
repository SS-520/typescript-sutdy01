export {};

/** オプショナルな引数：渡さなくても動作する引数
 * 必須：身長, 体重
 * オプション：コンソールログで出力するかどうか？
 * 引数名の後ろに[?]を追加
 *

 * bmi(身長, 体重, true) → 出力する
 * bmi(身長, 体重, false) → 出力しない
 * bmi(身長, 体重) → 出力しない
 */

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

bmi(1.78, 86, true);
