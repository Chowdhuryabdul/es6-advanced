// Map - method 

const numbers = [12, 13, 14, 15, 16, 17, 18];
for(let number of numbers){
    const add = number + 1;
    // console.log(add);
}

const newArray = numbers.map(value => {
    return value + 1;
})
// console.log(newArray);

// Foreach method 

const products = [
    {id: 1, name: 'apple', color: 'gold', price: 1200, brand: 'apple' },
    {id: 2, name: 'xawmi', color: 'black', price: 200, brand: 'xawmi' },
    {id: 3, name: 'apple', color: 'gold', price: 1000, brand: 'apple' },
    {id: 4, name: 'apple', color: 'gold', price: 1200,brand: 'xawmi'},
    {id: 5, name: 'apple', color: 'black', price: 1200, brand: 'samsung' }
]


const extraPrice = products.map(element =>{
    if(element.brand === "apple"){
  element.price = element.price + 100  
    }
    return element
})
console.log(extraPrice);
// console.log(extraPrice);

products.forEach(element => {
    if(element.color === 'gold'){
        // console.log(element);
    }
});

// Filter method 

const newProduct = products.filter(element => element.name === 'apple');
// console.log(newProduct);

// find method 

const oneProduct = products.find(element => element.id == 5);
// console.log(oneProduct);

const firstProduct = products.find(element => element.name === 'apple')
// console.log(firstProduct);

const findAllExceptOne = products.filter(element => element.id != 2);
// console.log(findAllExceptOne);


const person = {
    name: 'Abc',
    age: 23,
    1: 100,
    rahim: ['white', 'red', 'blue'],
    ismarried : 'false',
    jobb:{
        type:'public'
    }
}

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
// console.log(person[1]);
// console.log(person.rahim[2]);
// console.log(person.jobb.salary);
// console.log(person.father?.type);

const numbers1 = [1,2,3,4,5];
const makeSquare = numbers1.map(number =>{
 return number * number
} );
// console.log(makeSquare);

const car = {
    name: 'BMW',
    production: 2024,
    seat: 5
}
const {name, production, seat} = car;
// console.log(name, production);

// const newArray1 = [12, 14, 15, ...numbers];
// console.log(newArray1);

for(let key in car){
    // console.log(key);
}

for(let [key, value] of Object.entries(car)){
    // console.log(`
    //     key is ${key} and value is ${value}
    //     `);
}

class product{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    details(){
        // console.log(`
        //   ami ${this.name} product er details  
        //     `);
    }
}

const iphone = new product('ihone', 4);
// console.log(iphone);
iphone.details()

class vehicle {
    constructor(name, price){
        this.name = name;
        this.price = price
    }

    move(){
        console.log(`this ${this.name} run very fast`);
    }
}

// const bus = new vehicle ('tata', 1200);
// console.log(bus);
// bus.move()

class bus extends vehicle {
    super (name, price, seat){
        this.seat = seat
    }
    route(){
        console.log(`this ${this.name} has ${seat} seat`);
    }
}

const greenLine = new bus ('greenline', 1200, 5);
// console.log(greenLine);
// greenLine.move()
// greenLine.route()

class truck extends vehicle{
    super(name, price, seat, age){
        this.age = age
    }
    load(){
        console.log('it can carry lot of wight');
    }
}

const newTruck = new truck ('BMW', 1300, 4, 1);
// console.log(newTruck);
// newTruck.move()
// newTruck.load()

