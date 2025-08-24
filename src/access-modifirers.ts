export {};

// TypeScriptでのclassのアクセス修飾子

//Person型のインスタンス（実体）を作る雛形（class）を定義
class Person {
  // メンバ変数の宣言
  // 引数のアノテーションはコンストラクタ定義前に制約をかける
  public name: string; // public：オブジェクト外から呼び出し可能を意味するアクセス修飾子（デフォルトなので記述不要）
  // private age: number; // private：オブジェクト外から呼び出し不可能を意味するアクセス修飾子
  protected age: number;
  protected nationality: string; // protected：オブジェクト外から呼び出しNG・子クラスからは呼び出しOKなアクセス修飾子

  // constructorで初期化
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  // profileメソッド（関数）を設定
  pofile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

// Personから派生する子クラスAndroidを定義
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality); // 親クラスと同じ初期化処理を行う
  }

  pofile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`; //ageはPersonクラス内でのみアクセス可能（子クラスでは呼ばれない）
  }
}

let taro = new Person('Taro', 30, 'Japan'); //Personクラスのオブジェクトtaroを作成
// let hanako = new Person(); //Personクラスのオブジェクトhanakoを作成

console.log(taro);
console.log(taro.pofile()); // profile内からなのでprivate変数にアクセスできる
console.log(taro.name);
// console.log(taro.age);  // ageはprivate変数なのでインスタンスから呼び出せない
// console.log(taro.nationality);  //nationalityはprotected変数なのでインスタンスから呼び出せない
