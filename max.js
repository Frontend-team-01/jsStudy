// let maxvalue =[1,2,3,4,5]
// let a = maxvalue
// console.log(a)


// {
//     maxvalue:5,
//     sortArr=[5,4,3,2,1]
// }

const values =[1,2,3,4,5];

const max =Math.max(...values);
console.log(max)

values.sort((a,b) => b - a);
console.log(values);