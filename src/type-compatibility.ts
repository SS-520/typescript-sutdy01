export {};

/** 型の互換性
 *
 */

//
// 互換性がある場合 //
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

// 型の確認
console.log(typeof fooCompatible);
console.log(typeof barCompatible);

fooCompatible = barCompatible;
// anyはstringも含むので代入可能 → 互換性がある
console.log(typeof fooCompatible); // string型を代入したのでstring型になった

//
// 互換性がない場合 //
let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;  // error TS2322: Type 'number' is not assignable to type 'string'.

let fooString: string;
let barString: string = 'string';

fooString = barString; // string型にstring型のデータを代入→○

// リテラル系も互換性があるか検証
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;
// stringLiteral型はstring型の一部なので代入できる（互換性がある）

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;
// numberLiteral型はnumber型の一部なので代入できる（互換性がある）

// インターフェイスとクラスの互換性検証
interface Animal {
  age: number;
  name: string;
}
// AnimalとPersonは互いに独立している
class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal; // Animal型の変数me
me = new Person(43, 'はむさん');
// number型同士ならオブジェクトの型は関係なく代入できる

// error TS2741: Property 'name' is missing in type 'Person' but required in type 'Animal'.
// 対処1:Animalのメンバnameを削除してPersonクラスと名前とメンバの型を揃える
// 対処2:Personクラスのメンバに同変数名のstring型のメンバを追加する
// →「構造的部分型」と呼ばれる（頻出）
