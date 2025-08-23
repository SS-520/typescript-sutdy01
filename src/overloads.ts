export {};

/** オーバーロード
 *  ひとつの関数に異なる関数シグネチャを複数もつ関数
 *  関数シグネチャ：どのような引数を取るか、どのような戻り値を返すかといった関数の型
 *
 *  オーバーロード→異なる引数や戻り値のパターンがいくつかある関数！
 *  シグネチャ宣言→型安全の門番くん！
 */

// 関数doubleに対し、2パターンのシグネチャを宣言（※実態定義の前に記述）
function double(value: number): number; //引数と戻り値がnumberの関数double
function double(value: string): string; //引数と戻り値がstringの関数double

// ①引数の数値を2倍にする関数doubleを定義
// function double(value: number): number {
//   return value * 2;
// }

// ②引数の文字列を重ねて表示する関数doubleを定義
// function double(value: string): string {
//   return value + value;
// }

// 2パターンのシグネチャを宣言したdouble関数の実態を定義
//  引数と戻り値には事前宣言のシグネチャの型しか受け付けない
//  →関数の実態ではany型で実装しても、宣言シグネチャ以外の型は入ってこないので型安全が保たれる
function double(value: any): any {
  if (typeof value === 'number') {
    // 引数の型がnumberの時の処理
    return value * 2;
  } else {
    // numberかstringしか入ってこないので「else if (typeof value === 'string')」での
    // ダブルチェックは不要
    //
    // 引数の型がstringの時の処理
    return value + value;
  }
  // else {
  // 引数の型がnumber, string以外の処理→例外処理扱い
  // throw 'numberでもstringでもないので、引数の型を確認してください。';
  // }
}

console.log(double(100)); // 引数number
console.log(double('Hello')); // 引数string
// console.log(double(true)); // 引数boolean
// シグネチャ未宣言の型はコンパイルエラー
// →関数の実態でも考慮不要になる
