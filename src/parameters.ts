export {};

/** Parameter
 *  関数が受け取る引数と同じ構造の形を取り扱う際に使用するユーティリティ
 *
 *  type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
 *  type Parameters<関数 = 条件「関数を結果の推測結果（型）をPに代入」 ? 真「P」 : 偽「never」;
 *  ⇒常に真になるので実質常に「真：P」を返す
 *
 *  使い方：Parameters<型タイプ>⇒構造がタプル型として返る
 *          →そのままアノテーションの型として使用できる
 *
 *  ※他者が書いたコードやライブラリから取り込んだ関数の使い勝手を上げる
 */

// 例題 例用の関数を作成
const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Ham', 43);

// Parameters<>で型の構造を取得
type Profile = Parameters<typeof debugProfile>;
// type Profile = [name: string, age: number]

// debugProfileと同じ構造のオブジェクトを作成
const profile: Profile = ['Gloria', 76];
// const profile: Profile = ['Gloria', '76'];
//  型 'string' を型 'number' に割り当てることはできません。ts(2322)

console.log(profile); //  [ 'Gloria', 76 ]

// 構造物なので、展開すれば関数の引数としても使用できる
debugProfile(...profile); //「...構造物」⇒構造物を展開して('Gloria', 76)として引数に与えている
// { name: 'Gloria', age: 76 }
