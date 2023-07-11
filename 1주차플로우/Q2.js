/*

-- 공통 --
console.log("---전산표 확인---")

-- 성공 --
console.log("전산표와 일치합니다.")

-- 예외/실패 --
console.log("전산표와 일치하지 않습니다.") -->표의 값 갯수가 일치하지 않을경우
console.log("물품명") --> 품목이 없는 경우


*/

function product(name, quantity) {
    console.log('---전산표 확인---');
    const menu = { 야채곱창: 5, 바나나우유: 9, 삼각김밥: 16, 도시락: 10, 샌드위치: 10 };
    const input = menu[name];

    if (!input) return console.log(name); // 문자열 실수했음!!  'name'
    if (quantity != input) return console.log('전산표와 일치하지 않습니다.');

    if (quantity === input) return console.log('전산표와 일치합니다.');
}

product('삼각김밥', 16);
