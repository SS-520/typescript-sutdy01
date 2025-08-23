export {};

/** Restパラメータ
 *  複数の引数をまとめて1つの配列に変換する
 *  →引数の数が複数でも全部配列に自動格納して処理してくれる
 */

/**
 *
 * メインの関数内で使う関数を定義
 *
 */

// 引数の総和を求めるアロー関数を定義
const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  //{引数}は{引数名: 引数内容}のオブジェクトとして処理される

  return accumulator + currentValue;
};

/**
 *
 * メインの関数を定義
 *
 */

const sum: (...values: number[]) => number = (...values: number[]): number => {
  // restパラメータは配列なので能動アノテーションしないとany[]になる
  // sumにもアノテーションをつける
  // 「: (...values: number[]) => number」

  // console.log(values);
  return values.reduce(reducer);
};

// メイン関数実行
console.log(sum(1, 2, 3, 4, 5));
