export {};

/** enum：列挙
 *  列挙＝複数あるので変数は複数形にする
 *  中身に連番を自動で振ってくれる
 */

enum Months {
  January = 1, // 先頭の数値を上書きできる
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

/** jsでやろうとすると
 * const Months =  {
  January: 0,
  February: 1,
  ...
  }
  の形になる
 */

// 文字列のenum型 //
enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green });
// COLORS.YELLOW; //プロパティ 'YELLOW' は型 'typeof COLORS' に存在しません。

// 必要な場面でenumに追加できる
enum COLORS {
  YELLOW = '#FFFF00',
  // GRAY //初期化してないとエラーが出るのでわかりやすい
}

COLORS.YELLOW;
