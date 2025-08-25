export {};

/** 継承
 *
 */

// 大元のクラス
class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run.';
  }

  // 初期化処理
}

// Animalクラスを継承したクラス
//  元クラスのコンストラクタの機能も継承している
class Lion extends Animal {
  // コンストラクタ内でnameの初期化が2回行われているので整理する（public name: stringの部分）
  // * Lionクラス特有のメンバの宣言をコンストラクタの外でやる
  public speed: number;

  // 初期化処理のオーバーロード
  constructor(name: string, speed: number) {
    super(name); //親クラスの機能を呼び出す → 親クラスでは引数nameがあるので記述
    // nameの初期化→親クラスで実行
    // speedの初期化→手動で実行
    this.speed = speed;
  }
  run(): string {
    // return `I can run 80km/h.`;  //I can runが親クラスと重複→親クラスを利用する

    // const parentMsg: string = super.run(); // 一度試しに出力してみる
    // console.log({ parentMsg });  // 一度試しに出力してみる
    return `${super.run()} ${this.speed}km/h.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());
