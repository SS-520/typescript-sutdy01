export {};

/**
 *
 */

// 例
// ①数値型の引数をそのまま返すアロー関数がある
// const echo = (arg: number): number => {
//   return arg;
// };

// // ②文字列型の引数をそのまま返すアロー関数がある
// const echo = (arg: string): string => {
//   return arg;
// };

// ①②は型が異なるだけで処理そのものは同じ
// →①②共通化できないか？
// generics記法で解消可能！

// 抽象的な型「T」を引数argと変数echoの型として設定
// かつ変数に代入する前に<>で抽象型を記述
// T→引数を示す。genericsの象徴。通称「型引数」
const echo = <T>(arg: T): T => {
  return arg;
};

// 出力してみる
console.log(echo<number>(100));
// <T>に相当する部分に実際の型を記述（引数として型の情報を与える）
// 実行の()には実行したい引数を通常通り設定する

// 他の型も出力してみる
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));

//
// クラスでのgenericsの使用
//

// classを定義
// 引数をそのまま返すclass
// class Mirror {
//   constructor(public value: number) {}
//   echo(): number {
//     return this.value;
//   }
// }

// 引数123を渡したMirrorインスタンスを生成して、内部関数echoを呼ぶ
// console.log(new Mirror(123).echo());

// Mirrorクラスをnumber以外でも動作するようにしたい！
// →汎用化

// クラス名の後に<T>→generics型宣言
// number型で直接指定していた箇所を汎用型Tに置換
class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

// インスタンス化時に実際の型をしていする
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Generics!').echo());
console.log(new Mirror<boolean>(false).echo());
console.log(new Mirror<number[]>([5, 6, 7]).echo());
console.log(new Mirror<string[]>(['A', 'b', 'γ']).echo());
