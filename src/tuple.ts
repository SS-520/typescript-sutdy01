export {};

// let profile = ['Ham', 43];
// let profile: (string | number)[] = ['Ham', 43];

// ユニオン型だと型指定が緩くなる
// 配列の順番に型もがちがちに指定する→tuple

let profile: [string, number] = ['Ham', 43];

// profile = [43, 'Ham']; // コンパイルエラーが起きる！

// tupleは型推論で出てこないので要手動設定！！
