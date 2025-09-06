export {};

// 例 Profile型を作成
type Profile = {
  name: string; //必須プロパティ
  age: number; //必須プロパティ
};

// インスタンスを作成
const me: Profile = {
  name: 'Ham',
  age: 43,
};

console.log(me);
me.age++;
console.log(me); // age:44

// 例：リードオンリーな型
type PersonalDataType = Readonly<Profile>;
/**
  type PersonalDataType = {
    readonly name: string;
    readonly age: number;
  }
 */
// 中身
// type Readonly<T> = { readonly [P in keyof T]: T[P] };

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40,
};

console.log(friend);
// friend.age++; // error TS2540: Cannot assign to 'age' because it is a read-only property.
console.log(friend); // age:44
