const arr = [1, 2, 3, 4, 5];
const even = [];
const odd = [];

function solution(counter) {
  for (let i = 0; i < counter.length; i++) {
    if (counter[i] % 2 === 0) {
      even.push(counter[i]);
    } else {
      odd.push(counter[i]);
    }
  }
  return `[${even.length}, ${odd.length}]`;
}

const a = solution(arr);
console.log(a);