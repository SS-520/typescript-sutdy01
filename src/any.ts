import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// axiosでjsonを取得
// responseからデータのみ取得

/*
  どんな型が返ってくるか不明なのでanyが自動で振られて型チェックされないようにされている
  ・手動でアノテーションの設定が必要
  ・返ってくるデータを分析して設定
    1. 配列のオブジェクトが返ってくる
    2. 各オブジェクトに格納されている型を厳密に指定
      id: number
      title: string
      description: string
*/

axios.get(url).then(function (response) {
  // 返ってくるオブジェクトの具体的な構造をオリジナル（手動）で記述
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  //変数dataを独自作成した型：Articleの配列として型指定
  let data: Article[];
  data = response.data;

  // Article設定の効果の検証
  // data = [
  //   {
  //     id: 1,
  //     title: 'title', //titleを削ると、Articleで宣言した型と一致していないとエラーが出る！（anyだとエラーが出ない）
  //     description: 'description',
  //   },
  // ];
  console.log(data);
});
