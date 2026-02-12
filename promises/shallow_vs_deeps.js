const obj = Object.assign({
    a: 20,
    b: 25
});

// option 1
// shallow
let fake = obj;

// option 2
// shallow
fake = { ...obj };

// option 3
// shallow
fake = Object.assign(obj);

// changing a variable
fake['a'] = 30;
console.log('fake data is ', fake);
console.log(obj);

// option 4
// deep copy
fake = JSON.parse(JSON.stringify(obj));
