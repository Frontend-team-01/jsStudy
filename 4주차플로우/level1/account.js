export const BANK_LIST = {
  1: "성용은행",
  2: "사과은행",
  3: "코딩은행",
  4: "자바은행",
  5: "파이은행",
  6: "리엑은행",
  7: "자스은행",
  8: "모두은행",
};

export const ACCOUNT_FORM = {
  1: "00-00000000-00",
  2: "00-0000000-000",
  3: "00-000000-0000",
  4: "00-000-0000-000",
  5: "00-0000-000000",
  6: "00-000000000-0",
  7: "00-0000-000000",
  8: "00-00-00000000",
};

const bankList = document.getElementById("bank-selector");

bankList.addEventListener("click", selectBank);

function selectBank() {
  let resultHTML = "";
  for (let bank in BANK_LIST) {
    resultHTML += `
    <option value="${bank}">${BANK_LIST[bank]}</option>
    `;
  }
  bankList.innerHTML = resultHTML;
}

const inputBox = document.querySelector("input");
const sendBtn = document.querySelector("button");
const accountNum = String(inputBox.value);

function num() {
  Arr = [accountNum];
}
