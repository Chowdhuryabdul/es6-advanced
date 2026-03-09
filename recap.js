// Object and array destructuring 

const persone = {
    name: 'rahim',
    age: 10,
    profession: 'teacher'
};

const {name, age, profession} = persone;
// console.log(age);

const friends = ['rahim', 'karim'];
const numbers = [1, 2, 2,3 ,4, 5]
console.log(Math.max(...numbers));
const [he, she] = friends
// console.log(he, she);

const newArray = ['age', 'typd', ...numbers]
// console.log(newArray);

for (let key in persone){
    // console.log(`
    //     key: ${key}, and value ${persone[key]}
    //     `);
}

for(let [key, value ]of Object.entries(persone)){
    console.log(`
        key is ${key}, value ${value}
        `);
}

// want to delete sth from object

delete persone.name;
console.log(persone);