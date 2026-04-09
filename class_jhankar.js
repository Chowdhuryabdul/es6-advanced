// when you have group of objects, then you need to make their acitvity similar. in that sense you can use class 
/* there are two concepts--
1. class -- is a kind of template to make many things similar
2. object - those we make by the class that will be objecctt 
3 . if i make the object from the class it will be seperated from each other, althoug they are same species. for exemple, pen which is same species but it can be different from each others
4. there are two things in the class
--> charectaristics/properties 
--> task/method which is done - this is called method(a special type of function inside a class without the function keyword)
5. every class have special method - ehicch is called constructor- it works to construch this class
*/

class Player{
    constructor(name, age){ /* this a method and you will not call it seperately, rather when you calling Player() outside this class, you are basically call this constructtor. you can give the parameter in constructor. you can set here peremeter as 'name'. so whenever you call class it will be automatically called.  */
        this.name = name;
        this.age = age;
        this.location = 'bd' /* - i have set the default value, so the object will i make for future. all will have the location bangladesh. i can also make it dynamic. if i want to make it dynamic, then i can take parameter in costructor and just set the value in created object. In this way i can make it dynamic. for exemple i can add new paremeter as 'age'. usually properties name and parameter name used to be same. */
        /* this means exactly this one, and if i take another later, then this indicates that one. */
        // console.log('calling the constructore method', name); /* - who is calling it - actually when you will make a obect fromm this class, then you can call it. here it is called by this - const Player1 = new Player() */
    }
     /* it is called method. you can do all her as used to do in normal function, but it will be withoy finction key word. and it must be called from this class, not from outside. */
     goal(){
        console.log('score a goal');
     }
     getTeanName(){
        return 'Barca'
     }
}

const Player1 = new Player('tom bardy', 50) /* - when you make this object from the class it will autometically give the name to constructor */
const Player2 = new Player ('Shanto', 60) /* now the costructor method called for two times for these two objects */
console.log(Player1);
console.log(Player2);

// i can also check that is this instance of that class player. instance means it is made from that calss object
console.log(Player1 instanceof Player);

// Player1.goal()