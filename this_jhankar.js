/* this it used to refere to the object that i work on currently */
class Vehicle{
    /* encapsulation menas which is not shared with any one. it is private or try to hide */
    #tin
    constructor(type, price, brand){
        this.type = type;
        this.price = price
        this.brand = brand
        this.#tin = '123456' /* - i can use it here inside buti can not call it from outside */
    }
    getThis(){
        console.log(this); /* when we call this function we havee received this Object. so by default this refer to that object which is made from this class instance */
    }
    getPrice(){
        return this.price
    }
    gettin(){/*  here you can get it but you can not modify from the outside */
        return this.#tin 
    }
}

const car1 = new Vehicle('car', 40000, 'CRV')
const car2 = new Vehicle('car', 60000, 'TOYOTA')
// car1.getThis()
// console.log(car1.getPrice());
// console.log(car2.getPrice());
// console.log(car1.#tin);

const student = {
    name: 'Rahul',
    score: 10000,
    getScore: function(){
        console.log(this); /* here this means the full object */
    },
    getScoreArrow: () => {
        console.log(this) /* in the arrow function this refer to the some other funnction or outsider funnction */
    }
}
// student.getScore()
// student.getScoreArrow()