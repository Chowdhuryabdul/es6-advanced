const numbers = [12, 13, 14, 15, 16, 27];
// let sum = 0; here i have take this variable to store the value after add 
// for(let number of numbers){
//     sum = sum + number;
// }
// console.log(sum);

const total = numbers.reduce((accumulator, current) => accumulator + current);
console.log(total);

// here acculatore works as stroe of the sum value after add and current represnts the current value which is to be added and stroed in accumulator.