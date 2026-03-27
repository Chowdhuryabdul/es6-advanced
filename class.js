// Class is functional object
// Attribute and variable is same 
// why we will use class?
// It will be used to make a pattern which will be used for later 
// if i want to copy this class i have to add new keyword 

class product {


    // here i will write attribute, we call it variable. but we will not use var, let or cost to write this variable. it is the rule to decalre variable inside the calss. So we do not need to declare here. rather we can delcare it into constructor function.
   /*  malik = 'Abdul' */

    constructor (name, price, brand, malik){
        // console.log(name, price, brand);
        // constructor function can declare the variables on its own. whenever we will make a new instance it will make variable on its own
        // this is used to assigne the attribute or variable
        this.name= name;
        this.price = price;
        this.brandName = brand;
        this.malik = malik
    }
    // i can write a function here which can be used localStorage. to write the function i do not need to use funnction keyowrd
    details (){
        console.log(`ami ${this.name} product er details`);
    }


}

const iphone = new product('ipohne', 1234, 'apple', 'stiv jobs') /* - it gives a error it means you can not make a instnace without new keyword. it means you can make a instance by new which can be used later. these arguments will pass to the constructor function. after going there it is declared by this. */
// console.log(iphone.details());
console.log(iphone);

// if i want to use the details function, then i can use it 
iphone.details()

const xawmi = new product('zawmi', 1234, 'samsunmg', 'Abdu')
console.log(xawmi);

xawmi.details()
