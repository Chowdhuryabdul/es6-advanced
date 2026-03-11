// Here we have added one with every element of loop and give these in a array
const numbers = [1, 2, 3, 4, 5];
let temp = []
for(let i = 0; i < numbers.length; i++){
   const element = numbers[i];
   const add = element + 1;
   temp.push(add)
}
// console.log(temp);

// We can do the same thing by using Map and it will be in one line. Map also run a loop behind the scene.  and map always return a array
// By the parenthesis after map, we have called all the value or element whic we used to get throug looping

// const newArray = numbers.map(value => console.log(value)); here value is a single element which is inside the Array. 

// here we do not need to return as it implicitly return it, but if we make the body then we must return it. 
// const newArray = numbers.map(value => value + 1);
const newArray = numbers.map(value => {
    return value + 1
});
// console.log(newArray);


// if i want to square every element of this array

const numbers1 = [1, 2,3 ,4 ,5];
const newArrayWithSquare = numbers1.map(number => number * number);
console.log(newArrayWithSquare);

const friends = ['raim', 'karim', 'hero alom'];
// i can use multiple parameet with the element, in that case i have to bring it under a parethesis and use coma between this. here i can write index which will give me index of array element
const friendsArrayWithMao = friends.map((element, index) => {
    console.log(index);
    // console.log(element);
  return element
});
console.log(friendsArrayWithMao);