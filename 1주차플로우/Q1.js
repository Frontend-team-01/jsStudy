// 배열 생성 (빈 배열)
let arr = [];
const a = maxValue([1,2,3,4,5])

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;

let test;

for (let i=0; i<5; i++) {
    for (let j=0; j<5-1; j++)
        if(arr[j] < arr[j+1]) {
            test = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = test;
    }
}

console.log(arr);
console.log(a);





// 결과값 {
//     maxValue: 5,
//     sortArr = [5,4,3,2,1] }