const arr = [1, 2, 3, 4, 5];
const a = addArr(arr, 11);
// console.log(a);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] + 10;
// } 기존 for문 이용한 합

// map함수를 이용한 합
let addArr = arr.map(function (element) {
  return element + 10;
});

// console.log(addArr);

let test = 11;

if (test > 10 && test < 16) {
  addArr.filter((value) => value != test); // filter함수 작동안됨 이유모름
  console.log(addArr + "(값 있음)");
} else {
  console.log("결과값이 없습니다" + "(값 없음)");
}

// 결과값
// [12,13,14,15] ( 값 있음 )
// ”결과값이 없습니다“ ( 값 없음 )
