const a = [1, 2, 3, 4, 5];

const maxValue = a.sort((a, b) => b - a)[0];

console.log(`최댓값 : ${maxValue}`);

console.log(a);

// const a = maxvalue([5, 3, 4, 2, 1]);
// console.log(a);

// function maxvalue(a) {
// const maxValue = Math.max(...a); // 배열에서 최댓값 구하기
// const sortedArr = a.sort((a, b) => b - a); // 내림차순으로 정렬하기
// return { maxValue, sortedArr };
// }

// const result = maxvalue([1, 2, 3, 4, 5]);
// console.log(result.maxValue); // 최댓값 출력
// console.log(result.sortedArr); // 내림차순으로 정렬된 배열 출력
