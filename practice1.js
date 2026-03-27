const person = {
    name: 'rakib',
    age: 30,
    profession: {first: 'teacher', second: 'private'},
    friends: ['rahhim', 'karim'],
    1: 123
}

// Optional chaining
const {name, age} = person;
// console.log(age);
// get keys, values and entries
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

for(let element in person){
    // console.log(element);
}

for(let [keys, values] of Object.entries(person)){
    // console.log(keys, values);
}

// console.log(person.profession.second);
// console.log(person.friends[1]);;
// console.log(person[1]);
// console.log(person.father?.first);


// Map-Filter-Find-Foreach
const products = [
    {id: 1, name: 'iphone1', price: 1000, brand: 'apple'},
    {id: 2, name: 'iphone1', price: 10003, brand: 'apple'},
    {id: 3, name: 'samsung', price: 10003, brand: 'samsung'},
    {id: 4, name: 'xawmi', price: 10005, brand: 'xawmi'},
    {id: 5, name: 'iphone', price: 1000, brand: 'apple'},
];
const increasePrice = products.map(element =>{
    if(element.id === 1){
        return{
            ...element,
            price: element.price + 100
        }
    //    element.price = element.price + 100;
    }
    return element
})

// console.log(increasePrice);

products.forEach(p => {
   if(p.price === 1000){
    // console.log(p);
   }
})

const someProducts = products.filter(p => {
    // if(p.price > 1000){
    //     console.log(p);
    // }
    if(p.id !== 2){
        // console.log(p);
    }
})

const singleProduct = products.find(p=> p.brand === 'apple')
// console.log(singleProduct);

class individual{
    constructor(profession, age, name){
        this.profession = profession;
        this.age = age
        this.name = name
    }

    work(){
        console.log(`This person his name is ${this.name} lives here`);
    }
}

// const thePerson = new individual ('teachr', 19, 'mamun');
// console.log(thePerson);
// thePerson.work()

class another extends individual {
    constructor(profession, age, name, color){
        super(profession, age, name)
        this.color = color;
    
    }
    type(){
        console.log(`this ${this.name} is working hard`);
    }
}

const theNewPerson = new another ('teachre', 19, 'mamun', 'white');
// console.log(theNewPerson);

class secondPerson extends individual {
    constructor (profession, age, name, location){
        super(profession, age, name)
        this.location = location;
    }
    live(){
        console.log(`Secondperosn, his name ${this.name} livs in ${this.location}. his color is ${this.color}.`);
    }
}

const theSecondNewPerson = new secondPerson ('teacher', 19, 'mamun', 'BD');
console.log(theSecondNewPerson);
theSecondNewPerson.live()