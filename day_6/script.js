var a = [1, 2, 3];
var b = ['a', 'b', 'c'];

// var result = [];
// for (let i = 0; i < a.length; i++) {
//     result.push(a[i]);
// }
// // [1,2,3]
// for (let j = 0; j < b.length; j++) {
//     result.push(b[j]);
// }
// // [1,2,3,'a','b','c']
// console.log(result)

var result = [...a, ...b];
console.log(result);

var skills = {
    tags: ['Businessman', 'Philantropist'],
    netWorth: 20000000,
    name: 'Doctor Strange'
};
var userDetails = {
    name: 'Tony Stark',
    occupation: 'Iron Man -Avengers'
};

/**
 * {
 *  name: 'Tony Stark',
    occupation: 'Iron Man -Avengers',
    skills: ['Businessman', 'Philantropist'],
    netWorth: 20000000
 * }
 */

var superHero = {
    ...userDetails,
    ...skills
};
console.log(superHero);

var marks = [98, 99, 'A', 'C', 'B'];
//  ?? option 1
// print english mark
// var english = marks[0];

// print tamil mark
// var tamil = marks[1];

// print the grades of remaining subjects
// var grades = marks.slice(2, 5);

// ?? option 2
let [english, tamil, ...grades] = marks;

let item = ['Egg', 6.5, 12];

let [itemName, ...otherDetails] = item;

console.log(otherDetails);

let numbers = [3, 5, 4, 2, 6, 1];

// first 3
// second = 5
// right = [4,2,6,1]

var [first, second, ...right] = numbers;
console.log(first, second);

let user = { username: 'John', years: 30 };
// add one more key value -> "isAdmin":true to the above user
var newUser = { ...user, isAdmin: true };
console.log(newUser);
// create two variables 'name' and 'years' from the above user using rest operator
// ?? option 1
// console.log(newUser['username']);
// console.log(newUser['years']);

let { username, years } = newUser;
console.log(username);
console.log(years);

let response = {
    profileName: 'john',
    token: 'abc123',
    roleID: 'admin',
    profile: 'manager'
};

// username and token -> one separate object -> credentials
// roleId and profile -> another separate object -> myProfile
let { profileName, token, ...myProfile } = response;
console.log(myProfile);
let credentials = { profileName: profileName, token: token };
console.log(credentials);


