export {};

let absence: null = null;
// 型推論ではanyしか出ない→nullのみ代入なら手動でnull型指定が必要

// absence = 'hello'; // null以外代入付加！

let data: undefined = undefined;
// 型推論ではanyしか出ない→undefinedのみ代入なら手動でnull型指定が必要

// data = 123; // undefined以外代入付加！
