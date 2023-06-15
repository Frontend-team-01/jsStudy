const inventory = {
  야채곱창: 5,
  바나나우유: 10,
  삼각김밥: 15,
  도시락: 10,
  샌드위치: 10,
}; // 객체를 사용하여 품목과 갯수를 정의

function calculate(name, count) {
  if (name in inventory) {
    // 만약 물품이 객체에 있다면?
    if (count === inventory[name]) {
      // 입력 받은 갯수와 객체에 저장된 물품의 갯수를 비교
      console.log(`"전산표와 일치합니다." (일치)`);
      // 수량이 같으면 "일치"
    } else {
      console.log(`"전산표와 일치하지 않습니다. (불일치)"`);
      // 수량이 다르면 "불일치"
    }
  } else {
    console.log(`"${name}" (품목 없음)`);
    // 물품이 객체에 없으므로 해당 물품명 출력
  }
}

calculate("야채곱창", 5);
