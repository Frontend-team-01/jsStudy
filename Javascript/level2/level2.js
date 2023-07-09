import { RESERVATION_LIST } from './reservation .js';
//console.log(RESERVATION_LIST);

/* 
예약 고객확인하기



*/

const $confirmBtn =document.querySelector('.confirmBtn')
const $name = document.querySelector('.user-name')
const $phone = document.querySelector('user-phone')
const content = $phone

$confirmBtn.addEventListener('click',()=>{
    if(!$name.value.trim()||!$phone.value.trim()){ 
        return alert('내용을 입력해주세요')
    } else if($name.value == RESERVATION_LIST.$name && $phone.value == RESERVATION_LIST.$phone){
        
        const myList = document.getElementById("reservation-number")
        const newList = document.createElement('p')
        newText.innerText = content
        myList.appendChild(newText)

        myList.append(newList)
    } else {
        alert("정보와 다릅니다")
    }

    document.querySelector('.user-name').value =''
    document.querySelector('.user-phone').value =''
})

