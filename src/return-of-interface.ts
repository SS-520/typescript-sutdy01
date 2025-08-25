export {};

class Widerd {}
class Monk {}

// class Merlin extends Widerd, Monk { }
// error TS1174: Classes can only extend a single class.
//
// TypeScript：複数の「クラス」同時に継承×
// TypeScript：複数の「インターフェイス」同時に継承（実装）○
//

// 複数継承（実装）するために2つのインターフェイスを作成
// 賢者職
interface Sage {
  // 継承（実装）前提なので、処理の実態のないメソッド（シグネチャ）を定義
  ionazun(): void; //return無し
}
// 戦士職
interface Fighter {
  // 継承（実装）前提なので、処理の実態のないメソッド（シグネチャ）を定義
  swordDance(): void; //return無し
}

// Sage（賢者）インターフェイスとFighter（戦士）を同時に継承したクラスを実装
// implementsを使用
// 基インターフェイスに記述したシグネチャを定義しないとコンパイルエラー
class Lias implements Sage, Fighter {
  ionazun(): void {
    console.log('ionazun');
  }
  swordDance(): void {
    console.log('swordDance');
  }
}

const lias = new Lias();
lias.ionazun();
lias.swordDance();
