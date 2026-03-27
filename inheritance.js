// Class works as blueprint for making many thing 
// there are used to be two things-
// 1. is varibale
// 2. another is funtion actually what it does 
// by constructor i can make instance. in costructor i can make a frame and follow it later 

// here vehical is the main owner and bus and truck inherit something from vehical which is common to them. at the same time bus and truck also makins sth new for them as WEBGL_lose_context. 

// what is the prototypical inheritence?
// it refers to the ability to access object proerties from another Object. we use a javaScript prototype to add new properties and methods to an existing object constructor.
/* --->base class is PROTOTYPE (Instance)
    --->sub-class (instance)
    --->sub-class (instance)
    --->sub-class (instance) */
class vehical{
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('we do move');
    }
}

class bus extends vehical {
    super(name, price, seat){
        this.seat = seat
    }
    route(){
        console.log('we stop here and there');
    }
}

const greenLine = new bus('greenline', 1200, 50);
console.log(greenLine);
greenLine.move()
// you can see in the inspect that this is the prototype of the vehical. it means it connects this with the vehical with the prototypical chain 

class truck extends vehical{
    super(name, price, load){
        this.load = load;
    }
    carry(){
        console.log('we do carry lot of products');
    }
}

/* What is the prototype chain?
Prototype chain uses the concept of prototype chaining. Let's explore that conccept. every object created containes [[prototype]], which points either to another object or null. Envision an object C with a [[prototype]] property that points to object B. object's B's [[prototye]]property points to prototyåe object A. this continues onward, forming a king of chain called prototype chain.
this concept is ised when searching our code. when we need to find a property in an object, it is first searched for in the object, and if not found, it is searched for on that object's prototype, and so on. thus, the either prototype chain is travarsed until the property is found or null is reached  */