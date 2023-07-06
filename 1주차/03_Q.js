/* 
---성공---
console.log("[12,13,14,15] (값있음)")

---예외(실패)---
console.log("결과값이 없습니다")
*/

const arr = [1, 2, 3, 4, 5]
const newArr = arr.map((item, index, arr) => item + 10);
console.log(newArr)   //[ 11, 12, 13, 14, 15 ]

const filterArr = newArr.filter((item) => item >=0);
console.log(filterArr) //[ 11, 12, 13, 14, 15 ]

const filterArr2 = newArr.filter((item2) => item2 < 0);
console.log(filterArr2,"결과값이 없습니다")  //[] 결과값이 없습니다

const spArr = filterArr.splice(1)
console.log(spArr, "(값있음)") // [ 12, 13, 14, 15 ] (값있음)

