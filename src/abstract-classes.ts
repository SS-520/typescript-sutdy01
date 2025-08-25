export {};

/** 抽象メソッド
 *  処理の実体がない
 * 　→オーバーライドで実体構築が必須
 *  「こんなメソッドがあるよ」の宣言だけ
 */

abstract class Animal {
  // 抽象メソッドはabstractをつける
  // 抽象メソッドは抽象クラス内で宣言できる→クラスにもabstractをつけて抽象クラス化
  abstract cry(): string;
}

// 抽象メソッドはオーバーライドが前提
// 抽象クラスを基に継承クラスを作り、その内部でオーバーライドする
class Lion extends Animal {
  // 抽象メソッドcryをオーバーライド
  cry(): string {
    return 'roar';
  }
}

// 抽象クラスを継承する場合、抽象メソッドを必ず実装しなければならない
// error TS2515: Non-abstract class 'Tiger' does not implement inherited abstract member cry from class 'Animal'.
class Tiger extends Animal {
  // 抽象メソッドcryをオーバーライド
  cry(): string {
    return 'grrr';
  }
}
