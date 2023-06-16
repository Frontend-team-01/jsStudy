//1. 가장 큰 값 구하기

function maxValue(arr) {
    const max = Math.max (...arr);

    const sortArr = arr.sort((a, b) => b - a);
    //오름차순 내림차순 정렬 (딥다이브 JS 531p)

    const result = {
        max: max,
        sortArr: sortArr
    };

    return result;
}

const numbers = [1, 2, 3, 4, 5];
const result = maxValue(numbers);
console.log(result);