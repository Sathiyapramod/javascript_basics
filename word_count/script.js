var myBtn = document.getElementById('submitBtn');
var userInput = document.getElementById('myInput');

// create one container
let myContainer = document.createElement('div');

myContainer.style.display = 'flex';
myContainer.style.justifyContent = 'center';
myContainer.style.alignItems = 'center';

myBtn.addEventListener('click', () => {
    // printing the user typed input on the browser
    // declare a variable to store the sentence
    let sentence = userInput.value;

    let words = sentence.split(',');
    console.log(words);

    for (let i = 0; i < words.length; i = i + 1) {
        // step 1: create a word card (type div)
        let card = document.createElement('div');

        // step 2: add required styling like border, fontsize, etc
        card.style.border = '1px solid #a1a1a1';
        card.style.borderRadius = '8px';
        card.style.padding = '10px';

        // step 3: include the word inside the word card
        card.innerText = words[i];

        // step 4: append the card to the myContainer
        myContainer.appendChild(card);
    }
});

// last step: append the myContainer to the document body
document.body.appendChild(myContainer);
