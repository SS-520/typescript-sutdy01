export {};

/** mapped型
 *
 *  Utility Types（TypeScriptで標準装備の型）の一つ
 *
 *  「○ in keyof △」で「複数の要素を１つずつ処理」している状況
 *  ※知っておくとアレンジが効く
 */

// 例 Profile型を作成
type Profile = {
  name: string; //必須プロパティ
  age: number; //必須プロパティ
};

// Profile型のpartial版を作成
type PartialProfile = Partial<Profile>;

//
// 具体的に変換中に行われている処理
//  type Partial<T> = { [P in keyof T]?: T[P] };

type PropertyTypes = keyof Profile;
// type PropertyTypes = "name" | "age"
// → Profileオブジェクトのプロパティ名を文字列リテラル型のユニオン型として受け取っている
//
// P in keyof T
// Tの中身（nameやage）を1つずつPとして扱って処理を行える
// [P in keyof T]? → [文字列リテラル]?（?はオプショナル設定）
// １行ずつ書くと
//    T["name","age"]
//    ① name?: name[の型のstring]
//    ② age?: age[の型のnumber]
//    を持つ型がPropertyTypesになる（という処理）

// 自力で記述すると以下のようになる
// カスタマイズもできる（例：null許容)
type AllOptional<T> = { [P in keyof T]?: T[P] | null };
type AllOptionalProfile = AllOptional<Profile>;
/**
type AllOptionalProfile = {
  name?: string | undefined;
  age?: number | undefined;
}
***
type AllOptionalProfile = {
  name?: string | null | undefined;
  age?: number | null | undefined;
}
 */
