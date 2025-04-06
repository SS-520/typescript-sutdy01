export {}; // This file is a module

let name = 'typescript';

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1; // Error: Type '1' is not assignable to type 'boolean'.
console.log({ isFinished });
