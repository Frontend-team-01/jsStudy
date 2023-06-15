function find(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 10;
  } // 배열에 인덱스를 순회하면서 10을 더한다.

  if (arr.includes(num)) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === num) {
        arr.splice(j, 1);
        return arr;
      }
    } // 10을 추가한 배열에 num 값이 있으면 해당값을 삭제하고 배열을 반환
  } else {
    return "결과값이 없습니다";
  } // num 값이 없으면 "결과값이 없습니다"를 출력
}

const arr = [1, 2, 3, 4, 5];
const a = find(arr, 11);
console.log(a);
