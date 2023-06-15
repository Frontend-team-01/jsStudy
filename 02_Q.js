let shops = {
  'VegetablesBeef': 5,
  '🍌': 10,
  '🍙': 15,
  '🍱': 10,
  '🥪': 10,
}; 

function calc(name, count) {
  if (name in shops) {
    if (count === shops[name]) {
      console.log(`"전산표와 일치합니다."`);
    } else {
      console.log(`"전산표와 일치하지 않습니다."`);
    }
  } else {
    console.log(`"${name}" (품목 없음)`);
  }
}

calc("🍙", 8);