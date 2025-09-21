export {};

/** return type
 *  「関数の戻り値の型」を返すユーティリティ
 *
 *  type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
 */

// 例題
function add(a: number, b: number) {
  return a + b;
}
// ↑のfunctionの戻り値の型を知りたい！
// （今回はシンプルな関数だが、複雑な関数になったときのため）

// return typeを使う
type ReturnTypeFromAdd = ReturnType<typeof add>;
// type ReturnTypeFromAdd = number
// 型を動的に制約する場面などでも使用できる

// 動作確認
console.log(add(3, 6));
