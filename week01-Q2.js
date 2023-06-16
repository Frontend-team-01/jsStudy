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


//2. 편의점 물건 확인하기
    const stock = {
        '야채곱창' : 5,
        '바나나우유' : 10,
        '삼각김밥' : 15,
        '도시락' : 10,
        '샌드위치' : 10
    };

    function stockCheck (item, quanity) {
        if (item in stock) {
            if (stock[item]=== quanity){
                console.log(`${item}의 갯수가 전산표와 일치합니다`);
            } else {
                console.log('전산표와 일치하지 않습니다.');
            }
        }else {
            console.log(`${item}` + ' : 항목없음')
        }
    }

    stockCheck('야채곱창', 3); //전산표와 일치하지 않습니다. 출력
    stockCheck('삼각김밥', 15) //삼각김밥의 갯수가 전산표와 일치합니다 출력
    stockCheck('사과', 2)

   
    