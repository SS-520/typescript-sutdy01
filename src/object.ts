export {};

let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1992 };
// アノテーションをobjectにするとプロパティが異なっても再代入可能
// →型制約が緩い→想定外の代入のリスクがある

let profile2: { name: string } = { name: 'Ham' };
// profile2 = { birthYear: 1992 };
profile2 = { name: 'Nimo' };
// {}だけでアノテーションすると再代入可能
// アノテーションで宣言したプロパティと型のみ再代入可能にできる

/**
 * オブジェクト構造が判明している場合はなるべく厳密に制約をかける！
 */
