// If i write a function inside a property it is called method
//  this keyword always refer a object. 
const persone = {
    name: 'Abdul',
    action: function(){
        console.log(this.name); /* here this means the attributes inside this Object, such as name */
    }
    
}

persone.action()


class person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    sleep (){
        console.log(`${this.name} sleep at 10 PM`);
        // here this.name refers to the name of new object
    }
}
// here this keyword refer to this instance object
const newObject = new person('Abdul', 12);
console.log(newObject);
newObject.sleep()


const newPerson = new person('rahat', 130);
console.log(newPerson);
newPerson.sleep() /* - here this.name refers to the rahat */

console.log(this);