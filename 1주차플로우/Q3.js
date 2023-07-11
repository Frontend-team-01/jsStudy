/*

-- 실패/예외 --
console.log('결과값이 없습니다.')

-- 성공 --
console.log('[]')


*/

const arr = [1, 2, 3, 4, 5];

function find(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 10;
    }

    console.log(arr); // [11, 12, 13, 14, 15]

    if (arr.includes(num)) {
        // 특정 문자가 있으면 True, 실행
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === num) {
                arr.splice(j, 1);
                j--;
                return arr;
            } 
        }
        }  else {
            return '결과값이 없습니다';
        }
    }


const a = find(arr, 19);
console.log(a); // 왜 undefined가 나올까요?..

//* 더하는 방법 2
// 각 요소의 값을 호출하여 변환할 수 있게 해주는 함수

/*
let add_arr = arr.map(function (element) {
    return element + 10;
});

console.log(add_arr);

*/
