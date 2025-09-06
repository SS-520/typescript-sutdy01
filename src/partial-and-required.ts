export {};

/** partial型
 *
 *  Utility Types（TypeScriptで標準装備の型）の一つ
 *  ※partial：「部分的」の意
 *
 *  既存の型のプロパティを一括で全部オプショナル属性として定義してくれる型
 *  既存の型をメンテナンスするとオプショナル変換以外自動同期→メンテナンスの不備が減る！
 */

// 例 Profile型を作成
type Profile = {
  name: string; //必須プロパティ
  age: number; //必須プロパティ
  zipCode: number; //追加必須プロパティ
  height?: number; //追加任意プロパティ
};

//  Profileと同じ要素だが、全プロパティをオプショナルとしたい場合
//  Profileをコピーして全プロパティにオプショナル設定をつける→メンテナンス性が悪い
//  ！partial機能を使おう！

// 例：型PartialTypeを定義
// 型名 = Partial<元の型>で設定完了
type PartialProfile = Partial<Profile>;

//

/** requires型
 *
 *  Utility Types（TypeScriptで標準装備の型）の一つ
 *  ※required：「必須」の意
 *
 *  既存の型のプロパティを一括で全部必須属性として定義してくれる型
 *  既存の型をメンテナンスすると必須変換以外自動同期→メンテナンスの不備が減る！
 *  partial型と対になる機能
 */

// 例：型PartialTypeを定義
// 型名 = Required<元の型>で設定完了
type RequiredProfile = Required<Profile>;
