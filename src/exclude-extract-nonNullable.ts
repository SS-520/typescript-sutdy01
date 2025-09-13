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
 *
 */

// SomeTypesからstring型とnumber型を除外した型を再構築
type FunctionTypeByExclude = Exclude<SomeTypes, string | number>;
// type FunctionTypeByExclude = () => void

// SomeTypesからDebugTypeを除外した型を再構築
type NonFunctionTypeByExclude = Exclude<SomeTypes, DebugType>;
// type NonFunctionTypeByExclude = string | number

// ※関数型を除外する別方法
type TypeExcludingFunction = Exclude<SomeTypes, Function>;
// Exclude<元関数, Function（関数の型の総称）>
// メンテナンスコストを減らせる！

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

// SomeTypesからstring型とnumber型を残した型を再構築
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
//  type NonFunctionTypeByExtract = string | number

// ※関数型のみ抽出する別方法
type TypeExtractingFunction = Extract<SomeTypes, Function>;
// Extract<元関数, Function（関数の型の総称）>
// メンテナンスコストを減らせる！

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
