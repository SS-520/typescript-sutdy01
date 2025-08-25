export {};

class Me {
  // メンバ宣言時に初期化 → コンストラクタで動的に初期化しない固定値
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work(): string {
    // return "Hey, guys! Are you interested in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`; // クラス内のメンバを使用する場合thisで指定する
  }
}

// let me = new Me(); // staticメンバはインスタンス化せずにアクセス可能
// console.log(me.isProgrammer); //error TS2576: Property 'isProgrammer' does not exist on type 'Me'.

// staticメンバへのアクセス方法
// → クラスを直接指定する
console.log(Me.isProgrammer);

// staticなメソッドへのアクセス
console.log(Me.work());
