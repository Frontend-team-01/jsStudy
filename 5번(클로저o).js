let onOff = true;
/*
시동의 onOff 여부를 나타내는 전역 변수
전역 변수로 사용하였으므로 함수 내부에서 사용 가능
기본값은 시동을 걸었다는 가정을 하고 true로 설정
*/

function drive() {
  if (onOff === true) {
    console.log(`시동이 걸렸습니다.
시동이 걸렸으므로 다시 걸 수 없습니다.`);
  } else {
    console.log(`시동이 꺼졌습니다.
시동이 꺼졌으므로 다시 끌 수 없습니다.`);
  }
}

/*
drive 함수는 시동의 on/off 상태를 console에 출력해주는 함수
시동의 on/off 여부를 나타내는 전역변수 let onOff가 
true일때 시동이 걸리고
false일때 시동이 꺼진다.
*/

function car(aux, km) {
  // 외부 함수
  let counter = km;
  return function () {
    // 클로저 함수를 반환한다.
    drive();

    if (counter >= 40) {
      onOff = false;
      console.log("안전 위험으로 시동이 종료됩니다. (목표 거리가 40km 이상)");
      return drive();
    } else {
      counter = aux(counter);
      return counter;
    }
  };
}

/*
car 함수의 호출(71번째 줄)로 return되는 함수는 외부함수인 car보다 생존 주기가 길다.
이때 반환되는 함수는 외부 함수 car에 정의 되어 있는 counter 변수를 참조하고 있다.
car 함수가 호출되어 함수를 return 하는 순간 car 실행 컨텍스트는 실행 컨텍스트 스택에서 제거된다.
하지만 car 함수의 렉시컬 환경은 소멸되지 않고 return 되는 함수에 의해 참조된다. 
따라서 return값으로 반환되는 함수는 클로저 함수이다. (외부 함수의 변수를 참조 및 변경 & 외부 함수보다 긴 생존 주기)
*/

function decrease(n) {
  while (n >= 0) {
    --n;
    console.log(`최종 목표 거리까지 ${n + 1}km 남았습니다.`);
    if (n === 0) {
      onOff = false;
      console.log("주행 완료");
      return drive();
    }
  }
}

/*
decrease 함수는 car 함수를 호출할때 car 함수의 매개변수로 입력.
매개변수 km으로 입력 받는 값이 40 이하일 때 decrease 함수는 클로저 함수의 else 구문에서 호출되고
이때 주행거리를 1km씩 줄여가면서 console 창에 출력한다
만약 주행거리가 0이 된다면 시동의 on/off를 관리하는 전역변수 let onOff의 값을 false로 바꾸고 drive 함수 호출
drive 함수를 호출한 시점에서 onOff의 값은 false이므로 시동을 끄고 주행을 완료한다.
*/

const distance = car(decrease, 20);
distance();
