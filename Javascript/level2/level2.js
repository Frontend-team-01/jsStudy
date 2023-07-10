import { RESERVATION_LIST } from './reservation .js';
// console.log(RESERVATION_LIST[1].name);

/* 
예약 고객확인하기



*/

const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const $userName = document.getElementById("user-name");
const $userPhone = document.getElementById("user-phone");
const $eventBtn = document.querySelector("button");
  
  $eventBtn.addEventListener("click", view);
  
  
  function view() {
    if(!$userName.value.trim()||!$userPhone.value.trim()){ 
        return alert('내용을 입력해주세요')
    }
    
    let find = RESERVATION_LIST.find((user) => 
    user["name"] === $userName.value && user["phone"] === $userPhone.value);

    if (find) {
      let num = find["number"];
      let resultHTML = "";
      resultHTML += `<div>${num}</div>`;
      document.getElementById("reservation-number").innerHTML = resultHTML;
    } else {
      return alert("일치하는 고객이 없습니다.");
    }
  }