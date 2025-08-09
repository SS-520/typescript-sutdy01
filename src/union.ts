export {};

// 変数valueにnumberもstringも設定したい！
let value: number | string = 1;
value = 'foo'; // 型推論で「numberじゃないの？」とエラーが出る

/** union型：事前に決めた型なら入れられるようになる
 *  「|」＝or的な作用
 */

value = 100;
