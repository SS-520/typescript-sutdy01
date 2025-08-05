export {};

// 必ず例外処理とする関数を定義
// 値が戻ってくることはない→呼び元に戻ってこないnever型関数

// 型推論だとvoid型になる
function error(msg: string): never {
  throw new Error(msg);
}

// エラーハンドリング込みの処理
try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  // 例外処理が起きるのでこっちに入る
  console.log({ error });
}

/**
 * void型→ 戻り値：ない 呼び元：返る
 * never型→ 戻り値：ない 呼び元：返らない
 */

// 検証

let foo: void = undefined; //void:値の概念があるのでundefinedを代入可能
// let bar: never = undefined; //never:値の概念がないのでデータ代入不可能
let bar2: never = error('only me!'); //エラーのみ代入可能（そういう仕様）
