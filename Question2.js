const arr = [
  ["야채곱창", "바나나우유", "삼각김밥", "도시락", "샌드위치"],
  [5, 10, 15],
];
let test = "야채곱창" + 5;

if (test === arr[0][0] + arr[1][0]) {
   console.log(test) = "일치합니다."
} else if(test === arr[0][1] + arr[1][1]){
    console.log(test) = "일치합니다."
} else if(test === arr[0][2] + arr[1][2]){
    console.log(test) = "일치합니다."
} else if(test === arr[0][3] + arr[1][1]){
    console.log(test) = "일치합니다."
} else if(test === arr[0][4] + arr[1][1]){
    console.log(test) = "일치합니다."
}  else {
    console.log(test) = "불일치합니다."
}

console.log(test)
// console.log(arr[0][0] + arr[1][1]);
