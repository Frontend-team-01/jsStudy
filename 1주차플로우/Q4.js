const arr= [1,2,3,4,5];
const a = solution(arr);


function solution(arr) {
    const a = { 'even': 0, 'odd': 0}
    for (let i = 0; i <arr.length; i++) {
        if (arr[i] % 2 === 1) {
        a['odd'] += 1
        } else {
        a['even'] += 1
        }
    }
    console.log([a['even'], a['odd']])
    console.log(`[짝수의 개수, 홀수의 개수]`)
    return [a['even'], a['odd']]
}