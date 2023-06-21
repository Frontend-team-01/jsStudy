let even = [];
let odd = [];
// 짝수 값과 홀수 값을 저장할 빈 배열을 생성

function solution(countNumber) {
  for (let i = 0; i < countNumber.length; i++) {
    // 반복문을 사용하여 파라미터로 전달받은 배열을 순회
    if (countNumber[i] % 2 === 0) {
      // 만약 배열의 i번째 인덱스가 짝수이면
      even.push(countNumber[i]);
      // even으로 정의된 빈 배열에 추가
    } else {
      // 만약 배열의 i번째 인덱스가 홀수이면
      odd.push(countNumber[i]);
      // odd로 정의된 빈 배열에 추가
    }
  }
  return `[${even.length}, ${odd.length}]
[짝수의 개수, 홀수의 개수]`;
}

const arr = [1, 2, 3, 4, 5];
const a = solution(arr);
console.log(a);
