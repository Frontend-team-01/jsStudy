const arr = [1, 2, 3, 4, 5];

function find(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] += 10;
    }
  
    if (arr.includes(num)) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[k] === num) {
          arr.shift(k, 1);
          return arr;
        }
      }
    } else {
      return console.log("결과값이 없습니다");
    } 
  }
  
  const a = find(arr, 11);
  console.log(a);