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
const bodyItem = document.querySelector("tbody");
appendItem.addEventListener("click", append);
const itemList = [];

function append() {
  itemList.push(item.value);
  const result = {};
  itemList.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });
  console.log(result);
  if (!(result[item.value] === 1)) {
    return alert("중복 요소 발생");
  }
  render();
}

function render() {
  let elements = document.createElement("tr");
  for (let i = 0; i < itemList.length; i++) {
    elements.innerHTML = `
    <td>${itemList[i]}</td>
    <td>${gram.value}</td>
    <td><button>삭제</button></td>
    `;
  }
  bodyItem.insertBefore(elements, null);
  console.log(itemList);
}
