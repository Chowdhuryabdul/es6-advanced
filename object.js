const person = {
    name: 'hena',
    age: 10,
    addrss: 'not found',
    friends: ['rahim', 'krim', 'hero'],
    details: {
        job: 'yes',
        isMarried : true,
        status: 'not know',
        father: {
            name: 'abc'
        }
    }
};


// if want to access the properties of this objec
console.log(person.name);
console.log(person.friends[2]);
// if i want access to job inn details object 
console.log(person.details.job);
// if i have another object inside this
console.log(person.details.father.name);


/* if in case i need to aceess one element inside the object which will be defined later and not exist in the current object. In such case if i use the previous system to access that it will crash the whole website as nothing is existed there like this. here you see "mother " input which is not there.  if it is show undefiend it is not a probel and will not crash the website. if i want to save my website from crash, then i need to use -- optional chaining*/
// when we want to access the nested object, then we will use the optional chaining to avoid error. it will give undefiend but will not crash the program.
// console.log(person.details.mother.name);

console.log(person.details.mother?.name); /* - here if i give ? this sign after mother, it will show undefined as it is not in the Object, but it will not crash. so when we access the nested object we will use the optional chaining after every input. this question mark means when the first ? will be true, then it will go later otherwise it will provide undefined after first checking and will not go further.*/
console.log(person?.details?.mother?.name);

// Dot Notation and Bracket Notation 

const sir = {
    name: 'rahim',
    1: 'kutta',
    true: 'marrid',
    details:{
        address: 'not found',
        father:{
            name: 'abcd'
        }
    }
}
// when to use dot notation and bracket notation 
// In most case i will use the bracket notation as it is so powerful 
// if in the object you have exceptional key or property in the object such as (number, word with hypen and true), then you can not access with the dot notation. if you want to access with the dot notation it will give error. you have to use bracket notation.

console.log(sir.name);
console.log(sir['name']);
console.log(sir['details']['father']['name']);
// console.log(sir.1); i have recved error
console.log(sir[1]);
console.log(sir[true]);