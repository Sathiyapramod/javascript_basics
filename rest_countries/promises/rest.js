const response = {
    name: 'elon musk',
    id: 1,
    email: 'elon@example.com',
    role: 'admin'
};

// destructuring
const { name, id, ...balance } = response;
console.log(name); // elon musk
console.log(id); // 1
console.log(balance); // {email:"", role:""}

let left = [10, 20, 30];
let right = ['a', 'b', 'c'];

let result = [...left, ...right];
console.log(result);
// [ 10, 20, 30, 'a','b','c']
console.log(left, ...right); // [10,20,30],a,b,c

// number of parameters
// 7
// 80
// 1500
function total(a, b, ...arguments) {
    // find what is the total of all the parameters
    // assume all the parameters which are all passed are numbers only
    console.log(arguments);
}

// total(3); //3
// total(5, 10, 15); // 30
// total(87, 95, 94, 80, 100); //
total(35, 37, 38, 40, 33, 34, 36); //

let products = {
    prodName: 'apple macbook pro',
    price: 25000,
    currency: 'INR'
};

let ratings = {
    rating: 5.4,
    feedback: ['good', 'somewhat ok', 'price is too high']
};

let { prodName, price } = products;
result = { prodName, price, ...ratings };
console.log(result);

/**
 * {
 * name:"",
 * price :"",
 * rating :"",
 * feedback : ""
 * }
 *
 */

// ES6 standards
const x = {
    a,
    b
};
