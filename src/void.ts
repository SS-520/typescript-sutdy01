export {};

function returnNothing(): void {
  // void:虚無：戻り値はないよの宣言
  console.log("I don't return anything!");
  // 戻り値設定がない場合、関数実行時にundefinedが返る
  // return;  // そもそも戻り値を返す関数ではないので記述するのは目的から逸れる
}

console.log(returnNothing());
