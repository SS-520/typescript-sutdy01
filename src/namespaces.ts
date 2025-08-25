export {};

/** 名前空間
 *  近い概念：フォルダが違えば同じ名前のファイルを作れる
 *  → 異なるnamespace内に配置されたクラスは名称が重複してもコンパイルエラーにならない
 */

namespace Japanese {
  // namespaceのネスト構造
  //
  // 1つめのnamespace
  // 上位のnamespaceの外からアクセスしたいものには「export」をつける
  export namespace Tokyo {
    // 上位のnamespaceの外からアクセスしたいものには「export」をつける
    export class Person {
      constructor(public name: string) {}
    }
  }

  // 2つめのnamespace
  export namespace Osaka {
    // 上位のnamespaceの外からアクセスしたいものには「export」をつける
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  // 同じ名前（クラス名）で重複→コンパイルエラーに繋がる
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

// namespace内のクラスにアクセスする
const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
