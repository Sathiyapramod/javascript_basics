// get element by id

// read my input box always and store its value in a variable
let stepperFunction = document.getElementById('myInput');
let incBtn = document.getElementById('increment');
let decBtn = document.getElementById('decrement');
let resetBtn = document.getElementById('resetBtn');
let finalResult = document.getElementById('finalResult');

incBtn.addEventListener('click', () => {
    let temp = finalResult.innerText;

    // convert to number
    let count = parseInt(temp);
    // value is incremented
    newCount = stepperFunction.value;

    count = count + parseInt(newCount);
    finalResult.innerText = count;
});

decBtn.addEventListener('click', () => {
    let temp = finalResult.innerText;
    // convert to number
    let count = parseInt(temp);
    // value is incremented
    newCount = stepperFunction.value;
    count = count - parseInt(newCount);
    finalResult.innerText = count;
});

resetBtn.addEventListener('click', () => {
    // value updation straightly to zero
    finalResult.innerText = 0;
});
