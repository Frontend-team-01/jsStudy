/* 
레시피 재료 추가하기
*/
const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
  event.preventDefault();
});

const item = document.getElementById("first");
const gram = document.getElementById("second");
const appendItem = document.querySelector("button");
const submitItem = document.getElementById("submit_button");
const bodyItem = document.querySelector("tbody");
const itemList = [];
const gramList = [];

// 추가 이벤트

appendItem.addEventListener("click", append);

function append() {
  let obj = {
    name: item.value,
    id: randomID(),
  };
  // click 이벤트가 발생하면 input태그의 값(item.value)를 itemList에 push
  // click 이벤트가 발생하면 input태그의 값(gram.value)를 gramList에 push
  itemList.push(obj["name"]);
  gramList.push(gram.value);
  // result 객체를 생성
  const result = {};
  // itemList 배열을 순회하며 item.value를 key, item.value의 갯수를 value로 가지는 객체를 생성
  itemList.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });
  console.log(result);
  // item.value의 value가 1이 아니면, 즉 중복값이 발생하면 item.value의 갯수가 2 이상이 됨.
  if (!(result[item.value] === 1)) {
    // 중복값 발생시 itemList에 마지막 인덱스(중복값)을 제거한다.
    // 삭제 이벤트를 하지 않을 경우 "itemList.pop();" 구문은 생략 가능
    itemList.pop();
    gramList.pop();
    // 중복값 발생시 요소를 추가하지 않고 alert()를 return
    return alert("이미 존재하는 재료입니다.");
  }
  // 중복값이 발생하지 않으면 render() 함수를 실행한다.
  render();
}

// render() 함수는 tbody에 요소를 추가한다.
function render() {
  let elements = document.createElement("tr");
  for (let i = 0; i < itemList.length; i++) {
    elements.innerHTML = `
    <td>${itemList[i]}</td>
    <td>${gramList[i]}</td>
    `;

    // document.createElement('td')
    // document.createElement('button').addEventListener()
    // td . apped(but)

    // elements.appendChild(td)
  }
  bodyItem.appendChild(elements);
  console.log(itemList);

  // let delList = document.querySelectorAll(".delete");
  // for (let i = 0; i < delList.length; i++) {
  //   delList[i].addEventListener("click", function () {
  //     bodyItem.removeChild(elements)[i];
  //   });
  // }
}

// 삭제 이벤트를 위해서 고유 id를 생성하는 함수
function randomID() {
  return Math.random().toString(36).substr(2, 16);
}

// 삭제 이벤트

// 제출 이벤트

submitItem.addEventListener("click", submit);

function submit() {
  let resultHTML = "";
  for (let i = 0; i < itemList.length; i++) {
    resultHTML += `
    <li>${itemList[i]} : ${gramList[i]}</li>
    `;
  }
  document.getElementById("ingredient-list").innerHTML = resultHTML;
}
