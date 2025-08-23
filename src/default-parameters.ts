export {};

/** デフォルト引数の設定
 *  昇降給率にデフォルトを設定する
 *  →関数実行時に引数が能動的に渡されない場合、デフォルト引数が渡される
 *
 *  デフォルト引数は設定されないこともある
 *  →オプショナルの一種としてアノテーションの設定時は[?]を付ける
 */

const nextYearSalary: (currentSalary: number, rate?: number) => number = (
  currentSalary: number,
  rate: number = 1.1
): number => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));
