let temperature = [25, 28, 27, 24, 26, 23, 31];

// for (let i = 0; i < temperature.length; i = i + 1) {
//     if (temperature[i] > 25) {
//         output.push(temperature[i]);
//     }
// }

let maxTemp = temperature.filter((eachDay) => {
    if (eachDay > 25) {
        return eachDay;
    }
});
console.log(maxTemp);

let numbers = [55, 26, 17, 0, 23, 9, 0, 81];
