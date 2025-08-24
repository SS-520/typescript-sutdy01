export {};

// TypeScriptでのclassの基礎実習

//Person型のインスタンス（実体）を作る雛形（class）を定義
class Person {
  // 引数のアノテーションはコンストラクタ定義前に制約をかける
  name: string;
  age: number;

  // constructorで初期化
  // Personインスタンス作成時に渡した引数で作る実態の中身を定義
  // コンストラクタ＝メソッドなので、関数と同様に引数にもアノテーションを定義
  //
  // コンストラクタのメソッドの「戻り値」は記述しない（言語仕様・returnがない）
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // profileメソッド（関数）を設定
  pofile() {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Person('Taro', 30); //Personクラスのオブジェクトtaroを作成
// let hanako = new Person(); //Personクラスのオブジェクトhanakoを作成

console.log(taro);
console.log(taro.pofile());
