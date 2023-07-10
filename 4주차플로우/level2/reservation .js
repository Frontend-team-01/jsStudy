export const RESERVATION_LIST = [
  {
    name: "김성용",
    phone: "010-1234-1234",
    number: "1234-1234-1234",
  },
  {
    name: "김사과",
    phone: "010-1111-1111",
    number: "1111-1111-1111",
  },
  {
    name: "김성용",
    phone: "010-2222-2222",
    number: "2222-2222-2222",
  },
  {
    name: "이멜론",
    phone: "010-3333-3333",
    number: "3333-3333-3333",
  },
  {
    name: "오랜지",
    phone: "010-4444-4444",
    number: "4444-4444-4444",
  },
  {
    name: "박수박",
    phone: "010-5555-5555",
    number: "5555-5555-5555",
  },
  {
    name: "박수박",
    phone: "010-6666-6666",
    number: "6666-6666-6666",
  },
  {
    name: "김성용",
    phone: "010-7777-7777",
    number: "7777-7777-7777",
  },
  {
    name: "오랜지",
    phone: "010-8888-8888",
    number: "8888-8888-8888",
  },
  {
    name: "김성용",
    phone: "010-9999-9999",
    number: "9999-9999-9999",
  },
  {
    name: "반하나",
    phone: "010-0000-0000",
    number: "0000-0000-0000",
  },
];

let userName = document.getElementById("user-name");
let userPhone = document.getElementById("user-phone");
let eventBtn = document.querySelector("button");

eventBtn.addEventListener("click", show);
// 버튼을 클릭하면 show 함수가 실행

function show() {
  let find = RESERVATION_LIST.find((user) => user["name"] === userName.value && user["phone"] === userPhone.value);
  // find에 할당되는 객체는 내가 입력한 이름&번호를 가진 객체
  if (find) {
    // 만약 find가 true이면 아래 구문을 실행
    let num = find["number"];
    // num 변수에는 내가 입력한 이름&번호를 가진 객체의 number값이 할당된다.
    let resultHTML = "";
    resultHTML += `<div>${num}</div>`;
    document.getElementById("reservation-number").innerHTML = resultHTML;
  } else {
    // find가 false이면 alert창을 띄움.
    return alert("일치하는 내역이 없습니다.");
  }
}
