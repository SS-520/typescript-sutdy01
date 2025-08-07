export {};

// aliase:別名

type Mojiretsu = string;
// type 任意の変数（大文字始まり） = 型; でエイリアス設定可能

const fooString: string = 'Hello'; // 通常の設定
const fooMojiretsu: Mojiretsu = 'Hello'; // エイリアスでの設定

// 例
const example1 = {
  name: 'Ham',
  age: 43,
};

// オブジェクトの雛形をエイリアスとして設定してしまう
type Profile = {
  name: string;
  age: number;
};

// 雛形設定したオブジェクトエイリアスを用いれば簡単に制約をかけられる
const example2: Profile = {
  name: 'Ham',
  age: 43,
};

// 既存のオブジェクトから構造を転用しエイリアスとして用いる
// 大元であるexample1に変化が発生していも自動追従可能
type Profile2 = typeof example1;
