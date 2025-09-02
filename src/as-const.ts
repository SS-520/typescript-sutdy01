export {};

/** constアサーション
 *  データの書き換えはないことをコンパイラに伝える処理
 *  変数単体：'as const'を記述した時点の内容で型推論が外れ、リテラルとして設定される
 *  オブジェクト：const設定されたオブジェクトは、オブジェクト変数自体は再代入不可だが、各プロパティへは再代入可能
 *  → as constをつけることで再代入不可（readonly）になる
 */

let name = 'Atsushi';
name = 'Ham'; //  現時点ではstring型なら再代入可能

let nickname = 'Ham' as const; //let nickname: "Ham"
// nickname = 'Hamtaro'; //error TS2322: Type '"Hamtaro"' is not assignable to type '"Ham"'.
nickname = 'Ham';
// 'Ham'しか代入できない文字列リテラルとしての制約がかかる

// オブジェクトでも使える
// let profile = {
//   name: 'Atsushi',
//   height: 178,
// };

// profile.name = 'Ham'; // 現時点で再代入可能

let profile = {
  name: 'Atsushi', //readonly name: "Atsushi";
  height: 178, //readonly height: 178;
} as const;
// １要素ずつにreadonlyと記述しなくても一括でreadonlyにできる

// profile.name = 'Ham'; // error TS2540: Cannot assign to 'name' because it is a read-only property.
