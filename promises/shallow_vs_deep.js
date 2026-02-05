const obj = {
    user: 'john',
    password: 'test'
};

// shallow copy
let fake = Object.assign(obj);
console.log(fake);
console.log(obj);

// make some alterations
// console.log(fake);
// console.log(obj);

// deep copy

fake = JSON.parse(JSON.stringify(obj));
console.log(fake);
console.log(obj);

obj['user'] = 'john abraham';
console.log(fake);
console.log(obj);
