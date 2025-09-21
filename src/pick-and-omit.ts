export {};

/** Pick
 *  元のオブジェクトから必要な要素だけ抽出して型を再構築するユーティリティ
 *
 *  type Pick<T, K extends keyof T> = { [P in K]: T[P] };
 *  type Pick<元オブジェクト, 元オブジェクトと互換性のある型> = { [P in K]: オブジェクトT[←のプロパティ] };
 *
 */

/** 整理
 *
 *  対象：オブジェクトのプロパティ／ユニオン型の型の中身
 *  Pick/Extract（指定対象を「抽出」して再構築）
 *  omit/Exclude（指定対象を「除外」して再構築）
 *
 */

// 例題のオブジェクトを用意
type DetailedProfile = {
  name: string; // 名前
  height: number; // 身長
  weight: number; // 体重
};

//
//// Pickについて ////
//

// 実際に必要なのがnameとweightとする
// →必要なプロパティだけ取り出して新オブジェクトを定義する

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
/**
 type SimpleProfile = {
  name: string;
  weight: number;
  }
*/

// 元オブジェクトに無いプロパティを指定
// type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight' | 'age'>;
// error TS2344: Type '"age"' does not satisfy the constraint 'keyof DetailedProfile'.
//

/** Omit
 *  元のオブジェクトから不要な要素を除外して型を再構築するユーティリティ
 *
 *  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
 *  type Pick<元オブジェクト, キーとして有りうる全ての型（Kという概念としてして扱う）> =
 *    Pick< 元オブジェクト, Exclude<keyof 元オブジェクト, K> >;
 *
 */

//
//// Omitについて ////
//

// 不要なプロパティだけ除外して新オブジェクトを定義する
type SmallProfile = Omit<DetailedProfile, 'height'>;
/**
type SmallProfile = {
  name: string;
  weight: number;
}
 */

//
// Omitを分解してみよう！
//

// 元々の定義
// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// ① 'height'が除外対象→ K='height'として代入
// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, 'height'>>;

// ② Kが固定されることでKに対する型制約が不要になる→削除
// type MyOmit<T> = Pick<T, Exclude<keyof T, 'height'>>;

// ③keyof T = DetailedProfileの中身 = 'name' | 'weight' | 'height'
//  T = DetailedProfile
//  MyOmitの詳細で直接DetailedProfileを指定しているので型引数から削除
// type MyOmit = Pick<
//   DetailedProfile,
//   Exclude<'name' | 'weight' | 'height', 'height'>
// >;

// ④ Excludeを分解 → 'name','weight','height'から'height'のみ除外 → 'name','weight'のみ残る結果
type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;

//
// 基本的な使い方
// type MySmallProfile = MyOmit<DetailedProfile, 'height'>;

// ②´ MyOmitの引数が変更されたので'height'を削除
// type MySmallProfile = MyOmit<DetailedProfile>;

// ③´ MyOmitの引数が変更されたので'height'を削除
type MySmallProfile = MyOmit;

/**
 * MySmallProfile = MyOmit
 * → MySmallProfile = Pick<DetailedProfile, 'name' | 'weight'>
 * → MySmallProfile = Pick<DetailedProfile, 'name' | 'weight'> = SimpleProfile
 */
