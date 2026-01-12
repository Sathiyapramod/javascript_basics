let marks = [87, 91, 88, 93, 81];

// add 5 marks to all the subjects and print
// for Each
marks.forEach((eachMark) => {
    console.log(eachMark + 5);
});

// add 5 marks to all subjects and return the revised marks
// input -> array
// output -> array

let revisedMarks = marks.map((eachMark) => {
    let output = eachMark + 5;
    return output;
});

console.log(revisedMarks);

// input
let fruits = ['apple', 'banana', 'orange'];

// output -> all the fruit elements in upper case

let revisedFruits = fruits.map((eachFruit) => {
    return eachFruit.toUpperCase();
});

console.log(revisedFruits);

// input ->
let numbers = ['90', '33', '17'];

// output -> number format exactly
let revisedNumbers = numbers.map((eachNumber, index, entireList) => {
    console.log(eachNumber, index, entireList);
    let output = parseInt(eachNumber);
    return output;
});

console.log(revisedNumbers);
