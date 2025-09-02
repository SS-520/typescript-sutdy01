export {};

/** nullable
 *  値の情報が確定していないときなどに暫定的にnullを許容する処理
 *  →ユニオン型を使う
 *
 *  tsconfig.jsonファイルで"strictNullChecks": trueだと
 *  プロパティの値にnullが許容されない（デフォルト）
 *  ※falseにするとnull祭ができてしまうので非推奨
 *
 */

let profile: { name: string; age: number | null } = {
  name: 'Ham',
  // age: null, //error TS2322: Type 'null' is not assignable to type 'number'.
  age: null, // union型で一時的にnullを許容する（値が確定したら消そう）
};
