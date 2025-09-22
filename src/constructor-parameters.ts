export {};

/** ConstructorParameter
 *
 *  クラスのインスタンスを作成する際の引数型、を抽出する機能
 *
 * 
 *  type ConstructorParameters<T extends abstract new (...args: any) => any> 
      = T extends abstract new (...args: infer P) => any ? P : never;
 *  type ConstructorParameters<インスタンス作成可能な型⇒classの型>
      = 条件「classの型の中身≒引数をPとして推測・代入」 ? 真「P」: 偽「never」;
 *  ⇒実質真のみ⇒構造物P（引数）が返る
 */

// 例用のclassを作成

class Person {
  name: string;
  age: number;

  // 初期化
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// クラスを用いてインスタンス作成
let taro = new Person('Taro', 30);

// 確認
console.log(taro); //  Person { name: 'Taro', age: 30 }

// ConstructorParameter解説用にPersonクラスの型を取得
type PersonType = typeof Person;

// PersonTypeをConstructorParameterで使用してみる

type Profile = ConstructorParameters<PersonType>;
// type Profile = [name: string, age: number]
// タプル型のデータが返される

// 取得した型で構造物を作成
const profile: Profile = ['Ham', 43];
console.log(profile); //  [ 'Ham', 43 ]

// 作成した構造物を展開・引数にしてインスタンスを作成
const ham = new Person(...profile);
console.log(ham); // Person { name: 'Ham', age: 43 }
