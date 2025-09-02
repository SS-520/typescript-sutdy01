export {};

/** 型アサーション
 *  互換性のある型に変換すること
 *  ※互換性のない型（number⇔string）は変換できない
 */

let name: any = 'Ham';
// let length: number = name.length; //　①手動で直接アノテーション
// let length = name.length as number; //　②代入内容を型アサーション
let length = (name as string).length; //　③代入元の変数の型を固定する
// let length = (<string>name).length; //　変数 as 型と同様（非推奨・JSXの記法と混同される）
//   型の決定は早い段階であるほど良い○

// この時点でのlengthはany型が推論されている
// 実際はnameの文字数＝numberが格納されている変数
// stringなどが入る余地を与えたくない
// ①手動でアノテーションしてしまう
// 代入されるデータを用いてアノテーションする→アサーション

console.log(length);
