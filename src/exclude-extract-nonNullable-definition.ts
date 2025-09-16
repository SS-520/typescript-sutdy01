export {};

//// 除外（Exclude）・抽出（Extract）・null NG////

// 例
// 引数無、戻り値無の無名関数の型を定義
type DebugType = () => void;

// DebugTypeを含むユニオン型を定義
type SomeTypes = string | number | DebugType;

/**
 ** ユーティリティ型：Exclude（除外する）
 *  指定したユニオン型から指定の型を除外して、新規の型を作成（再構築）する
 *
 *  type Exclude<T, U> = T extends U ? never : T;
 *  type Exclude<元の型, 除外したい型> = T extends U ? never : T;
 *  ↓
 *  ・Conditional Types（三項演算子と類似）
 *  ・Distributive Conditional Types：Conditional Typesの中でもジェネリクス型に適用され、かつ型引数（T）にユニオン型 が与えられた場合の性質を指す
 *  Exclude<T, U> = T extends U ? never : T;
 *  Exclude<T, U> = 「型Tは型Uに割り当て可能か？」 ? trueの処理 : falseの処理;
 *  Exclude<元の型, 除外したい型>
 *    = 元の型 は 除外したい型に割当て可能 ? 可能→除外する : 不可能→除外しない（再構築に含める）;
 *
 */

//
// SomeTypesからstring型とnumber型を除外した型を再構築
type FunctionTypeByExclude = Exclude<SomeTypes, string | number>;
// type FunctionTypeByExclude = () => void

// 分解・分析用に型定義
// type MyExclude<T, U> = T extends U ? never : T;
// 実際に起きていること
// type MyExclude<T, U> = SomeTypes extends string | number ? never : T;
// type MyExclude<T> = SomeTypes extends string | number ? never : T;
// <T> = SomeTypes = string | number | DebugType;
type MyExclude =
  | (string extends string | number ? never : string)
  // string extends string | number → true → never（除外対象）
  | (number extends string | number ? never : number)
  // number extends string | number → true → never（除外対象）
  | (DebugType extends string | number ? never : DebugType);
// DebugType extends string | number → false → DebugType（除外非対象）
// →type MyExclude = never | never | DebugType
// 結論：type MyExclude = DebugType になる

//
// 自分で定義した練習用Excludeを使用
// type MyFunctionTypeByExclude = MyExclude<SomeTypes, string | number>;
type MyFunctionTypeByExclude = MyExclude;
// type MyFunctionTypeByExclude = () => void

/**
 ** ユーティリティ型：Extract（抽出する）
 *  指定したユニオン型から指定の型を抽出して、新規の型を作成（再構築）する
 *
 *  type Extract<T, U> = T extends U ? T : never;
 *  type Extract<元の型, 抽出したい型> = T extends U ? never : T;
 *
 */

// SomeTypesからDebugTypeのみ残した型を再構築
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
// type FunctionTypeByExtract = () => void

/**
 ** ユーティリティ型：NonNullable(null＋undefine →NG)
 *  指定したユニオン型からnullとundefinedを取り除いて、新規の型を作成（再構築）する
 *
 *  type NonNullable<T> = T & {};
 *  type NonNullable<元の型> = T & {};
 *
 */

//  nullとundifinedを含む元のユニオン型を定義
type NullableTypes = string | number | null | undefined;

// nullとundefinedを除外した型を再構築
type NonNullableTypes = NonNullable<NullableTypes>;
// type NonNullableTypes = string | number
