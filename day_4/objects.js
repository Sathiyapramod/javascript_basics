// products
let myProduct = {
    name: 'blue denim jean',
    productId: 100,
    price: 2500,
    description: 'test',
    availability: true
};

// print entire object
console.log(myProduct);

// print the description value alone
console.log(myProduct['description']);
console.log(myProduct.description);

// print only the keys
console.log(Object.keys(myProduct));

for (let key of Object.keys(myProduct)) {
    console.log(key);
}

// print only the values
console.log(Object.values(myProduct));

for (let value of Object.values(myProduct)) {
    console.log(value);
}
