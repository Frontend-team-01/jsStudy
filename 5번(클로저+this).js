const Car = (function (km) {
  let num = km;

  function Car() {}

  Car.prototype.onOff; // 시동 onOff에 대한 변수 설정

  Car.prototype.decrease = function () {
    function drive() {
      if (this.onOff === true) {
        return console.log("시동 걸림");
      } else {
        return console.log("시동 꺼짐");
      }
    }

    if (num >= 40) {
      console.log("안전위험으로 시동이 종료됩니다.");
      return drive();
    } else {
      this.onOff = true;
      drive(); // onOff를 true로 바꾸고 drive 함수를 호출하여 "시동 걸림"을 출력. (x)
      while (num >= 0) {
        --num;
        console.log(`남은 주행 거리는 ${num + 1}km 입니다.`);
        if (num === 0) {
          return console.log("주행 완료");
        }
      }
    }
  };

  return Car;
})(28); // 즉시 실행 함수 사용 ()안에 주행거리 입력

const counter = new Car();

console.log(counter.decrease());
