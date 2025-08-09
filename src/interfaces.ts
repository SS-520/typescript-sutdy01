export {};

// 型エイリアスで定義する場合
// エイリアス＝別名定義なので「＝」で結ぶ
type ObjectType = {
  name: string;
  age: number;
};

let object: ObjectType = {
  name: 'Ham-san',
  age: 43,
};

// interfaceで定義する場合
// インターフェイス＝接続口なので「＝」不要
interface ObjectInterface {
  name: string;
  age: number;
}

let object2: ObjectInterface = {
  name: 'Ham-san',
  age: 43,
};

/** interfaceとtype（型エイリアス）の違い・使い分け参考資料
 * 【公式ドキュメント】 https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
 * 【interfaceとtypeの違い、そして何を使うべきかについて】 https://zenn.dev/luvmini511/articles/6c6f69481c2d17
 * 【[TypeScript] interface vs type（とそれぞれの違いについて）】 https://zenn.dev/hsato_workman/articles/b9ff07e7619877
 *
 * ・プロジェクト方針による
 * ・昨今のtypescriptのトレンドだとtypeの方が使う場面が多い？
 */
