var countries = [];
// console.log(countries);

// to find the length of the array
// console.log(countries.length);

// countries[2] = "india";
// console.log(countries);

// india
// japan
// china

// console.log(countries.length); //6
// console.log(countries[3]); //'brazil'
// console.log(countries[10]); //

// countries[10] = "usa";
// console.log(countries);

// countries[45] = "spain";
// console.log(countries);

var x = [16, 25, 29, 7, 18];

// 0 to last index
for (let i = 0; i < x.length; i = i + 1) {
  // console.log(x[i]);
}

// last to 0 index
for (let i = x.length - 1; i >= 0; i = i - 1) {
  // console.log(x[i]);
}

countries = ["india", "japan", "china", "brazil", "south africa", "russia"];

// for in loop
for (let i in countries) {
  // console.log(countries[i]);
}

// for of loop
for (let name of countries) {
  // console.log(name);
}

numbers = [10, 20, 30, 40, 50];

// for each loop

// function expression
var printDouble = function (n) {
  // console.log(n * 2);
};
// option 1 - using loops

// console.log("using loops");
for (let i in numbers) {
  // printDouble(numbers[i]);
}

// console.log("using for each method");
// methods -> for Each
// arrays
numbers.forEach(printDouble);

let a = 2;
let b = a;
// console.log(a, b); // 2 2

// post increment
// a++; // a = a + 1
// b--; // b = b - 1
// console.log(a, b); // 3,1

// pre increment
++a;
--b;
// console.log(a, b); // 3,1

let p = 3;
let q = ++p;

// p increment -> 3 -> 4
// q -> 3

// console.log(p, q); //4,3
console.log(p, q); // 4, 4
