export {};

/** Literal: 逐語的な、一語一句ずつ
 *  転じて、格納内容の一覧を事前に指定する
 *  union型を併用
 */

// 文字列のリテラル型 //

// 日月火水木金土を格納する変数dayOfTheWeek
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';

// 想定外な文字列の格納されてしまう
// dayOfTheWeek = '31';

// 数値のリテラル型 //
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13;

// 真偽値のリテラル型
// そもそも真偽値がtrueかfalseしかない
// trueかfalseしか設定したくない場合などでは活用できる
let TRUE: true = true;
// TRUE = false;
