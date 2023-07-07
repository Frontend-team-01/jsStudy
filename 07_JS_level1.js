// import { BANK_LIST, ACCOUNT_FORM } from './account.js';
class bank{
  constructor(id,bankName){
    this.id = id;
    this.bankName = bankName;
  }
}

const banks = [
    new bank (1, '성용은행'),
    new bank (2, '사과은행'),
    new bank (3, '코딩은행'),
    new bank (4, '자바은행'),
    new bank (5, '파이은행'),
    new bank (6, '리엑은행'),
    new bank (7, '자스은행'),
    new bank (8, '모두은행')
];

  const ACCOUNT_FORM = {
    1: '00-00000000-00',
    2: '00-0000000-000',
    3: '00-000000-0000',
    4: '00-000-0000-000',
    5: '00-0000-000000',
    6: '00-000000000-0',
    7: '00-0000-000000',
    8: '00-00-00000000'
  };
  
  // console.log(bankList[1])
  // const result = banks.find((bank)=> bank.id == '3')
  // console.log(result)
  const bankList = document.getElementById('bank-selector') 
function submitBtn(){
  console.log("addItem 실행")
    
    const accountInput = document.getElementById('account-input')
    const content = accountInput.value
    console.log(content.length)

    if(content.length==12){
  // alert('계좌가 입력되었습니다.')
        let formatNum = '';
          if(document.banks.option[0].selected){
            alert('성용은행이 선택되었습니다')
            console.log(content)
            formatNum = content.replace(/(\d{2})(\d{8})(\d{2})/, '$1-********-$3')
          } else if (document.banks.option[1].selected){
            formatNum = content.replace(/(\d{2})(\d{7})(\d{3})/, '$1-$2-***')
          } else if (document.banks.option[2].selected){
            formatNum = content.replace(/(\d{2})(\d{6})(\d{4})/, '$1-******-$3')
          } else if (document.banks.option[3].selected){
            formatNum = content.replace(/(\d{3})(\d{3})(\d{4})(\d{3})/, '$1-$2-****-$3')
          } else if (document.banks.option[4].selected){
            formatNum = content.replace(/(\d{2})(\d{4})(\d{6})/, '$1-****-$3')
          } else if (document.banks.option[5].selected){
            formatNum = content.replace(/(\d{2})(\d{9})(\d{1})/, '$1-*********-$3')
          } else if (document.banks.option[6].selected){
            formatNum = content.replace(/(\d{2})(\d{4})(\d{6})/, '$1-****-$3')
          } else if (document.banks.option[7].selected){
            formatNum = content.replace(/(\d{2})(\d{2})(\d{8})/, '$1-$2-********')
          }
        
        console.log(formatNum)
        const myList = document.getElementById("account-list")
        console.log(myList.getElementsByTagName("li").length)
        let list_number = myList.getElementsByTagName("li").length +1;
        const newList = document.createElement('li')
        formatNum.innerText = ('결과')
        formatNum.setAttribute("id", `${list_number}th-item`)
        formatNum.appendChild(newText)

        myList.append(newList)
        accountInput.value =""
    
    } else {
    alert("계좌를 입력하세요")
    }
}

