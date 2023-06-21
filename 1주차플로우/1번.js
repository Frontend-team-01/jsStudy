function maxValue(arr) {
  arr.sort(); // 파라미터로 입력받은 배열을 오름차순 정렬
  arr.reverse(); // 내림차순 정렬
  return `{
  maxValue ${Math.max.apply(null, arr)},
  sortArr = [${arr}]
  }`; // 배열의 최댓값, 내림차순 결과를 객체 형태로 반환
}

const a = maxValue([1, 2, 3, 4, 5]);
console.log(a);
