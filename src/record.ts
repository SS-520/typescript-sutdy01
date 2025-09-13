export {};

/** record型
 *
 *  2つのgenerics型を、型引数に持つ特殊型
 *  例： Record<K, T>
 *  K：ユニオン型を指定
 *
 */

// 例
// 都道府県情報（九州抜粋）
type Qshu = 'Fukuoka' | 'Kumamoto' | 'Oita' | 'Saga'; // 文字リテラルのユニオン型

// 感染者情報の型エイリアス設定
type Covit19InfectionInfo = {
  kanji_name: string; //氏名（漢字）
  confirmed_cases: number; // 感染者数
};

// covit19の国内幹線情報を格納した変数を定義
// 型制約をしていない状況
// const covit19Japan = {
//   Fukuoka: { kanji_name: '福岡', confirmed_cases: 1960 },
//   Kumamoto: { kanji_name: '熊本', confirmed_cases: 249 },
//   Oita: { kanji_name: '大分', confirmed_cases: 5 },
//   Saga: { kanji_name: '佐賀', confirmed_cases: true },
//   // 事前登録していない情報を追加できる, プロパティに対応していない型を設定できてしまう
// };

/** 愚直に型制約を行う場合の書き方（非効率）
const covit19Japan: {
  Fukuoka: Covit19InfectionInfo;
  Kumamoto: Covit19InfectionInfo;
  Oita: Covit19InfectionInfo;
  Saga: Covit19InfectionInfo;
} = {略}
 */

// record型ですっきりさせる
// Record<ユニオン型（リスト）, 構造定義をしたエイリアス型>
const covit19Japan: Record<Qshu, Covit19InfectionInfo> = {
  Fukuoka: { kanji_name: '福岡', confirmed_cases: 1960 },
  Kumamoto: { kanji_name: '熊本', confirmed_cases: 249 },
  Oita: { kanji_name: '大分', confirmed_cases: 5 },
  Saga: { kanji_name: '佐賀', confirmed_cases: 13 }, // Qshu型にSagaを追加してconfirmed_casesを数値に修正する
  // error TS2353: Object literal may only specify known properties, and 'Saga' does not exist in type 'Record<Qshu, Covit19InfectionInfo>'.
  // error TS2322: Type 'boolean' is not assignable to type 'number'.
};
