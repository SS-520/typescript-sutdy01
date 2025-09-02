export {};

/** INDEX SIGNATURE
 *  オブジェクトの添え字アクセスのための型
 *  定常メンバと併用可能
 *
 *  How to write index signatures
 *    { [index:typeForIndex]:typeForValue }
 *    { [index:入る想定の型]:いつものアノテーション }
 */

// 変数profileに空のオブジェクトを設定して初期化
// 動的にいろんなプロパティを入れていくオブジェクトとして設定
// let profile: { name?: string } = {};  // プロパティが入る可能性でオプショナル設定していく？
// let profile: { [index: string]: string | number } = {}; // 型が多くなると可読性が落ちる

// インターフェイスで型を変数宣言の外部で定義する
interface Profile {
  name: string;
  underTwenty: boolean; // 二十歳判定
  // error TS2411: Property 'underTwenty' of type 'boolean' is not assignable to 'string' index type 'string | number'.
  // インデックスシグネチャの型と互換性がない→シグネチャ側に追加する
  // インデックス指定したいない→初期化時に必須のプロパティになる
  [index: string]: string | number | boolean;
}
let profile: Profile = { name: 'Ham', underTwenty: false };
// 初期化時に名前を設定する→インターフェイスのメンバとしても設定する

// 未宣言のプロパティに代入しようとする
profile.name = 'Ham'; // error TS2339: Property 'name' does not exist on type '{}'.
// そんなプロパティは無い、と怒られる
// →事前に設定する？毎回設定する？→メンテナンス性が悪い
// インデックスシグネチャの登場！

profile.age = 43; // error TS2322: Type 'number' is not assignable to type 'string'.
// number型を想定していない
// →ユニオン型で追加していく

// 更に追加
profile.nationality = 'Japan';

console.log(profile);
