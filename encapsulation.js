class person{
    #status;
    constructor(name, age, status){
        this.name = name;
        this.age = age;
        this.#status = status
    }
    sleep(){
        console.log(`${this.name} sleep at 10`);
    }
    action(){
        console.log(this.#status);
    }
}

const heRaim = new person('Rahim', 12, 'single');
console.log(heRaim);
console.log(heRaim.status); /* - here i am accesing from outside of the class. but i want to make it private that itt can not be accessible from the outside of the class */
heRaim.action() /* - here i have accessed by the action method */

// but with the encapsulation method. we can not use a element in outside of the class 
// after giving # in the status, it is private you can not access it from outside of the object. now in console log it will show unndefined.
// you can access inside the object
// it is mostly used in the banking sector in case of private money or others for the security purpose

