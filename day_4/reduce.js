let marks = [88, 98, 87, 91, 74];

// to find the total marks using reduce method
let totalMarks = 0;

totalMarks = marks.reduce((acc, element) => {
    let temp = acc + element;
    return temp;
}, 0);

console.log(totalMarks);

// temperatures => [87,91,85,84,89]
// maximum of the temperature using reduce method

let temperatures = [87, 85, 84, 89, 91];
let maximumTemp = temperatures[0];

// for (let i = 0; i < temperatures.length; i = i + 1) {
//     if (temperatures[i] > maximumTemp) {
//         maximumTemp = temperatures[i];
//     }
// }
// console.log(maximumTemp)

// 91
maximumTemp = temperatures.reduce((acc, element) => {
    // 91 > 89
    if (element > acc) {
        return element; // 91
    } else {
        return acc;
    }
}, temperatures[0]);

console.log(maximumTemp);
