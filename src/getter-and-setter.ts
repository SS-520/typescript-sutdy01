export {};

/** TypeScriptのアクセサについての学習
 *
 *  * アクセサ：オブジェクトの中のプロパティの値を取り出したり、変更したりする関数
 *  * 主に「getter（読み取り専用）」と「setter（）」の2つを使用
 *  * クラス外部から直接参照・閲覧できないようにし「カプセル化（情報隠蔽）」のために使用
 *  * getter：getキーワードを伴うメソッド
 *  * setter：setキーワードを伴うメソッド
 *  * メソッド実行時に「()」を伴わない仕様
 */

/** 要件
 *
 *  * owner
 *    * 所有者
 *    * 初期化時に設定可能
 *    * 途中変更不可能 → private変数にする
 *    * 参照可能 → クラス内にgetterを定義
 *
 *  * secretNumber
 *    * 個人番号
 *    * 初期化時に設定可能
 *    * 途中で変更可能 → クラス内にsetterを定義
 *    * 参照不可 → private変数にする
 *
 *    *
 */

class MyNumberCard {
  private _owner: string;
  // getterメソッドでowner()を使用するので「_変数名」に変更する（プログラミングの慣例）

  private _secretNumber: number;
  // setterメソッドでsecretNumber()を使用するので「_変数名」に変更する（プログラミングの慣例）

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // ownerをprivate変数にしたことで「外部参照可能」の要件が満たせない
  // →getter用意
  get owner() {
    return this._owner;
  }

  // secretNumberをprivate変数にしたことで「途中変更可能」の要件が満たせない
  // →setterを用意
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  // debug用メソッド
  debugPrint(): string {
    return `secretNumber: ${this._secretNumber}`;
  }
}
// 実体を作成
let card = new MyNumberCard('はむさん', 1234567890);

// secretNumberをデバッグで確認
console.log(card.debugPrint());
card.secretNumber = 1111111111; // setterで変更
console.log(card.debugPrint());

// cardのownerを変更
// card.owner = 'Ham'; // error TS2540: Cannot assign to 'owner' because it is a read-only property.

// cardのsecretNumberを変更
// card.secretNumber = 1098765432; // error TS2341: Property 'secretNumber' is private and only accessible within class 'MyNumberCard'.

console.log(card.owner);
// console.log(card.secretNumber); // error TS2341: Property 'secretNumber' is private and only accessible within class 'MyNumberCard'.

console.log(card.secretNumber); // 実行結果 → 「undefined」
