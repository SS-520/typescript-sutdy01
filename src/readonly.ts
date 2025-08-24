export {};

// 読み取り専用にする修飾子
// 読み取りできる＝privateでもprotectedでもないのでpublicであるという暗黙の了解

class CrediCard {
  // readonly owner: string; // readonlyで読み取り専用にできる

  // constructor(owner: string) {
  //   this.owner = owner;
  // }

  // コンストラクタで宣言と初期化をまとめてやる方法で記述
  constructor(public readonly owner: string) {}
  //  readonlyの場合publicがなくても動作するが、
  //  不親切かつreadonlyを外した場合エラーになる
  //  → publicを明示する方が安全
}

let myCrediCard = new CrediCard('はむさん');

// 読み取り可能か確認
console.log(myCrediCard.owner);
// 変更してみる
// myCrediCard.owner = 'ベーコン'; // error TS2540: Cannot assign to 'owner' because it is a read-only property.
