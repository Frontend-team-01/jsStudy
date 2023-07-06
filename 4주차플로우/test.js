const inputBox = document.querySelector("input");

inputBox.addEventListener("input", () => {
  inputBox.setAttribute("maxlength", "10");
  // inputBox의 maxlength를 9 >> 10으로 변경
  if (/^\d+$/.test(inputBox.value)) {
    return alert("숫자가 입력되었습니다");
  }
});
// 정규표현식을 사용해 숫자가 입력되면 alert() 나오게 설정

const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
  event.preventDefault();
});

const appendBox = document.getElementById("list_data");
const sendBtn = document.getElementById("send");
const resetBtn = document.getElementById("reset");
const list = [];

sendBtn.addEventListener("click", append);
resetBtn.addEventListener("click", reset);

// 추가
function append() {
  let itemObj = {
    item: appendBox.value,
    itemId: randomID(),
  };
  list.push(itemObj);
  render();
}

function randomID() {
  return Math.random().toString(36).substr(2, 16);
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    resultHTML += `<div class="display">
      <div>${list[i].item}</div>
      <div>
      <button onclick="deleteTask('${list[i].itemId}')">삭제</button>
      <button>수정</button>
      </div>
    </div>
  `;
  }
  document.getElementById("list").innerHTML = resultHTML;
}

// 초기화
function reset() {
  list.splice(0, list.length);
  render();
}

// 삭제
function deleteTask(id) {
  for (let j = 0; j < list.length; j++) {
    if (list[j].itemId === id) {
      list.splice(j, 1);
      break;
    }
  }
  render();
}
