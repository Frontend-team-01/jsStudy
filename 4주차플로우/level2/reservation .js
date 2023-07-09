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
const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
  event.preventDefault();
});

const userName = document.getElementById("user-name");
const userPhone = document.getElementById("user-phone");
const user = document.querySelector("button");

user.addEventListener("click", find);

console.log(RESERVATION_LIST[0]["number"]);

function find() {
  let resultHTML = "";
  for (let i = 0; i < RESERVATION_LIST.length; i++) {
    if (userName === RESERVATION_LIST[i]["name"] && userPhone === RESERVATION_LIST[i]["phone"]) {
      resultHTML += `<div>${RESERVATION_LIST[i]["number"]}</div>`;
    } else {
      alert("일치하는 내역이 없습니다");
    }
  }
  document.getElementById("reservation-number").innerHTML = resultHTML;
}
