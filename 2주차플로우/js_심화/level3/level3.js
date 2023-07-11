/* 
레시피 재료 추가하기
*/
const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', (e) => {
    event.preventDefault();
});


let inputName;
let inputWeight;
let showTbl;

// 추가
function addItem() {
    console.log('추가');
    inputName = document.getElementById('input-name').value;
    inputWeight = document.getElementById('input-weight').value;
    showTbl = document.getElementById('show-tbl');

    console.log(inputName);
    console.log(inputWeight);

    const content1 = inputName;
    const content2 = inputWeight;

    // https://zetawiki.com/wiki/자바스크립트_HTML_테이블_행_추가/삭제
    let newRow = showTbl.insertRow(showTbl.rows.length); // 하단에 추가
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    cell1.innerHTML = content1;
    cell2.innerHTML = content2;
    cell3.innerHTML = `<button onclick="deleteRow()">삭제</button>`;
}

// 삭제
function deleteRow() {
    console.log('삭제')
    if (showTbl.rows.length < 1) return;
    showTbl.deleteRow(showTbl.rows.length - 1); // 하단부터 삭제
}

// 제출 {key : value} 가져오기
const itemList = [];
let submitList;

// 중복 값 https://hianna.tistory.com/459

function submit() {
    console.log('제출')
    let submitList = document.querySelector('#ingredient-list');

    const ingredient = document.getElementById('input-name').value;
    const weight = document.getElementById('input-weight').value;

    const newList = document.createElement('li');
    console.log(newList);

    // 콘솔창용
    a['재료'] = ingredient;
    a['무게'] = weight;
    console.log(a);

    const spanElement = document.createElement('span');
    const span2Element = document.createElement('span');

    spanElement.innerHTML = `${ingredient} : `;
    span2Element.innerHTML = weight;

    newList.append(spanElement);
    newList.append(span2Element);

    submitList.append(newList);
}



