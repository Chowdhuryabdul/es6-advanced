// function sum (a, b = 0){
//     const sum = a + b;
//     console.log(sum);
// }
// console.log(sum(10));

// const friends = ['sokina', 'jorina', 'korina'];
// // console.log(...friends);
// const numbers = [11, 12, 144444, 13, 15];
// function findBiggest(numbers){
//     let big = numbers[0];
//     for(let element of numbers){
//         if(element > big){
//             big = element
//         }
//     }
//     return big
// }
// console.log(findBiggest(numbers));
// console.log(Math.max(...numbers));

// const person1 = {
//     name: 'abc',
//     age: 23
// }
// const person2 = {
//     name: 'dcdf',
//     age: 25
// }

// const person3 = {
//     ...person1, person2
// }
// console.log(person3);

// const hena = {
//     name: 'hena',
//     age: 10,
//     friends: ['hero alom', 'bappa'],
//     status: 'not found'
// };
// // console.log(hena.name);

// const {name, age, friends, status} = hena;
// console.log(name,age, friends, status);
// const person = ['hero alam', {name: 'abdul'}, 'hena', 'bapparaj'];
// const [nayok, object] = person;
// console.log(nayok, object);

// const person = {
//     name : 'hena',
//     age: 10,
//     country: 'BD'
// }
// // console.log(Object.keys(person));
// // console.log(Object.values(person));
// // console.log(Object.entries(person));
// for(let key in person){
//     // console.log(key);
//     console.log(`key: ${key}, and value: ${person[key]}`);
// }

// for(let [key, value] of Object.entries(person)){
//     console.log(`the keys: ${key} and value: ${value}`);
// }

// const person = {
//     name: 'hena',
//     age: 10,
//     addrss: 'not found',
//     friends: ['rahim', 'krim', 'hero'],
//     details: {
//         job: 'yes',
//         isMarried : true,
//         status: 'not know',
//         father: {
//             name: 'abc'
//         }
//     }
// }

// console.log(person?.details?.mother?.name);

// const numbers = [1, 2, 3, 4, 5];
// let newArray = [];
// for(let number of numbers){
//    const add = number + 1;
//    console.log(add);
//    newArray.push(add)
// }
// console.log(newArray);
// const newArray = numbers.map(value =>{
//     return value + 1
// })
// console.log(newArray);

// const squareNumber = numbers.map(Element => Element * Element)
// console.log(squareNumber);
// const friends = ['raim', 'karim', 'hero alom'];
// const friendsArray = friends.map((element, index) =>{
//     console.log(index, element);
//     return index
// })
// console.log(friendsArray);
const products = [
    {id:1, name: 'iphone', color: 'black', price: 1200, brand: 'apple'},
    {id:2, name: 'Xawmi', color: 'gold', price: 100, brand: 'xawmi'},
    {id:3, name: 'samsung', color: 'gold', price: 1500, brand: 'sam'},
    {id:4, name: 'iphone', color: 'gold', price: 1000, brand: 'apple'},
    {id:5, name: 'xawmi', color: 'black', price: 1100, brand: 'xawmi'}
]
const producsoverprice = products.filter(product => product.price >200 );
// console.log(producsoverprice);
const removeOne = products.filter(product => product.id != 3);
// console.log(removeOne);;

const numbers = [12, 133, 14, 5, 6, 20, 29];
const greaterThan10 = numbers.filter(x => x > 10);
const evenNumbers = numbers.filter(x => x % 2 === 0)
// console.log(evenNumbers);
const findNumberGreaterThan10 = numbers.find(x => x > 10);
// console.log(findNumberGreaterThan10);

const students = [
    {id:1, name: 'abdul', marks: 50},
    {id:2, name: 'nabdul', marks: 60},
    {id:3, name: 'babdul', marks: 80},
    {id:4, name: 'kabdul', marks: 20},
]

const findTheNames = students.map(element => element.name);
const findtheBestStudent = students.find(element => element.marks > 40)
console.log(findtheBestStudent);