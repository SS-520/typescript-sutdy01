export {};

// TypeScriptならではのconstructorの使い方

class Person {
  // メンバ変数宣言→削除可能
  // public name: string;
  // protected age: number;

  // constructor(name: string, age: number) {}
  // ↓のように書き換え可能
  constructor(public name: string, protected age: number) {}
  // コンストラクタ引数内にアクセス修飾子を明示
  // 　※アクセス修飾子のpublicも要明示
  // → メンバ宣言と初期化を一気に実行してくれる！！
  //
  //
  // 初期化も削除
  // this.name = name;
  // this.age = age;
}

const me = new Person('はむさん', 43);
console.log(me);
