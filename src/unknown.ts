export {};

// 型安全を担保したany型

const kansu = (): number => 43; //number43を返す関数

// kansu()の実行結果を格納する関数を定義

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

// 計算させてみる

let sumAny = numberAny + 10; //any型に10を足す

// console.log(typeof numberUnknown); // numberUnknownの実態の型を取得

// unknown型の実態がnumberなら計算を実行
// ===で比較しているので厳密な比較
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10; // unknown型に10を足す
  console.log(sumUnknown);
}

// any型は楽だけど型でエラー発生の原因にもなるので注意
// unknown型を設定：暫定的に型をつけて絞り込んでいける。
// 　　　　　　　　　中身が想定の型と異なる可能性を事前に指摘してくれるメリット！

/**
 * typeofを使用して特定の型であることを確認しながらコードを実行
 * →「タイプガード」！
 */
