/* 
---성공---
console.log("전산표와 일치합니다.")

---예외(실패)---
console.log("전산표와 일치하지 않습니다.")
console.log("품목이 없습니다.")
*/

function 편의점(product,count) {

  const menus={야채곱창:5, 바나나우유:10, 삼각김밥:15, 도시락:10, 샌드위치:10};
  
  if (product in menus) { 
    if (count === menus[product]) {
        console.log(`"전산표와 일치합니다."`);
      } else {
        console.log(`"전산표와 일치하지 않습니다."`);
      }     
  } else {
    console.log(`"${product}" (품목 없음)`);
  }
}

//편의점('콜라',10)
//편의점('바나나우유',10)
편의점('바나나우유',7)
