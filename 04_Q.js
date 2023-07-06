/* 
---성공---
[2,3] [짝수의 개수, 홀수의 개수]
*/

const arr = [1, 2, 3, 4, 5]
const _evenArr = arr.filter((item) => item%2===0)
const _oddArr = arr.filter((item2) => item2%2!=0)
console.log(_evenArr.length, _oddArr.length,"<- 짝수의 갯수,홀수의 갯수")