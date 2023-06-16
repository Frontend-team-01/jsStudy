const arr = [1, 2, 3, 4, 5];
// const a = solution(arr);
// console.log(a);

function empty(num) {
  if (num % 2 == 0) {
    console.log(num + " 짝수입니다.");
  }
  if (num % 2 == 1) {
    console.log(num + " 홀수입니다.");
  }
}

empty(10);
empty(11);

// 결과값
// [2,3]
// [짝수의 개수, 홀수의 개수]
// 머리가 돌아가질 않아요..

// 가영씨 풀이본
// const arr= [1,2,3,4,5];
// const a = solution(arr);

// function solution(arr) {
//     const a = { 'even': 0, 'odd': 0}
//     for (let i = 0; i <arr.length; i++) {
//         if (arr[i] % 2 === 1) {
//         a['odd'] += 1
//         } else {
//         a['even'] += 1
//         }
//     }
//     console.log([a['even'], a['odd']])
//     console.log([짝수의 개수, 홀수의 개수])
//     return [a['even'], a['odd']]
// }
