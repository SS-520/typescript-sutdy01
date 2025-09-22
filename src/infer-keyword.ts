export {};

/** infer （※推測する）
 *  ・条件記載箇所に使用できる特殊なキーワード
 *  ・条件の一部にgenerics型<>を宣言できるようになる
 */

// 例題
function add(a: number, b: number) {
  return a + b;
}

// return typeを使う
type ReturnTypeFromAdd = ReturnType<typeof add>;

// 動作確認
console.log(add(3, 6));

// ReturnTypeの定義を分解
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R // 戻り値の型：R
  ? R
  : any;

//  (...args: any) => any : 「配列でも何型でもよい」かつ「関数」の意 ⇒ 「Tは関数が入る」という制約がかかっている
// T extends (...args: any) => infer R ? R : any;
// 条件「T extends (...args: any) => infer R」? 真「R」 : 偽「any」;
// 「T extends (...args: any) => infer R」⇒「T extends (...args: any) を推測（infer）してRに代入してね」⇒実質any
// 「T extends (...args: any) => any」= 「T extends (...args: any) => infer R」／実質同じ
// → ReturnTypeの引数は関数が入る⇒条件文実質「真(R)」のみ取る
