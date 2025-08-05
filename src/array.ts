export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];
// Array<要素の型>でも宣言できるが非推奨（読解知識程度）
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

// 二次元配列
let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300],
];

// 共用型の配列
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
// string OR number OR booleanが入る配列、の意味
