const products = [
    {id:1, name: 'iphone', color: 'black', price: 1200, brand: 'apple'},
    {id:2, name: 'Xawmi', color: 'gold', price: 100, brand: 'xawmi'},
    {id:3, name: 'samsung', color: 'gold', price: 1500, brand: 'sam'},
    {id:4, name: 'iphone', color: 'gold', price: 1000, brand: 'apple'},
    {id:5, name: 'xawmi', color: 'black', price: 1100, brand: 'xawmi'}
]

// We will use here For..each method, as for--each methhod does not return anyting so we do not need to declare it in variables. we can use this method to loop through in a array

// For each method
products.forEach(product =>{
    if(product.color === 'gold'){
        // console.log(product);
    }
})

// Filter method - it is return a array. so we will write it in a variab. it gives you some element in a newarray relative to a condition. if it does not meet the condition such as if i set 2000 ass it is not the in array of object. in this case it will return an empty array.

const newProducts = products.filter(product => product.price > 1000);
console.log(newProducts);

// Find method - it is pretty similar to filter, but find is used to loop through in an array to find an single and specific Element. and it will retun theat as object. if you have same elements several items such as in this array of obbject you will see color:gold is in several place. when find method do the loop through in the array whenever condition matches it will stop there adn will provide result. in this array, color: gold is in 2nd, 3rd and 4th objects, but it will retuen only 2nd one as the conditon meets and stop working. Here if the condition does not meet it will give you undefined.

const oneProduct = products.find(product => product.id === 1);
const singleProdcut = products.find(p => p.color === 'gold')
console.log(singleProdcut);

// if i want to get all the objects apart from one - in such case i can use filter method 

const giveMeAllExcepOne = products.filter(p => p.id != 3);
console.log(giveMeAllExcepOne);

