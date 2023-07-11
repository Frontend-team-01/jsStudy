/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이가 80인 배열은 길이를 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]

*/

function division(arr, chunk) {
    const result = [];

    while (arr.length > 0) {
        let temp;
        // splice() 사용 하여 특정길이만큼 분리 
        temp = arr.splice(0, chunk);
        // 배열을 0 ~ chunk 만큼 분리
        result.push(temp);
    }

    return result;
}

const myArray = Array(80)
    .fill()
    .map((_, i) => i + 1); // 1~80 배열만듦

console.log(myArray);


const chunk = 5;

const newArray = division(myArray, chunk);

console.log(newArray);
