/* class Player{
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    goal(){
        console.log('He can make score');
    }

    findTheTeamName(){

    }
}

const Player1 =new  Player('Abdul', 80);
const Player2 =new Player ('sadia', 70);
console.log(Player1);
Player1.goal() */



class Animal{ /* here we do not need to repeat the common properties and methods in the last three class objects. rather i can make it here the common things. we make it common that we do not need to use later class template */
    constructor(age, name){
        this.age = age;
        this.name = name;
    }

      eat(){ /* this method can also common in to be used */
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal{ /* here i can extend it to animal and i can delete those properties which is in the animal. here dog can make others properties and add those from the animal. Now dog will get everything from the Animal.*/
    constructor(name,age, breed){
        super(name, age)
        // this.name = name;
        // this.age = age
        this.breed = breed;

    }
    bark(){
        console.log(`${this.name} is barking`);
    }
}

class Cat extends Animal{
    constructor(name, color, age){
        super(name, age)
        // this.name = name;
        this.color = color;
        // this.age = age
    }

   
    mewa(){
        console.log(`${this.name} is barking`);
    }
}
class Bird extends Animal {
    constructor(name, species, age){
        super(age, name)
        // this.name = name;
        this.species = species;
        // this.age = age
    }


    fly(){
        console.log(`${this.name} is barking`);
    }
}


const dog1 = new Dog('30', 'Deshi', 'coffe');
// console.log(dog1);
// dog1.eat()

const cat1 = new Cat('laial', 'red', 50);
// console.log(cat1);
// cat1.mewa()
const bird1 = new Bird('tia', 'parrot', 5);
console.log(bird1);
bird1.eat()

// here in the three class templates, there are some common features in properties and methods and some uncommon feattures as well