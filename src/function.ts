export {};

// returnする型のアノテーションは引数の後につける
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.78, 86));
