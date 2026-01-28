console.log('hello world');
var myBtn = document.getElementById('submitBtn');

// alert box

// create an event listener
myBtn.addEventListener('click', () => {
    // alert box
    // alert('hello world');

    // step 1
    var myDiv = document.createElement('div');

    // step 2 -> adding my css
    myDiv.style.width = '500px';
    myDiv.style.height = '500px';
    myDiv.style.border = '1px solid black';
    myDiv.style.color = 'white';
    myDiv.style.backgroundColor = 'cornflowerblue';
    myDiv.style.fontSize = '25px';
    myDiv.style.borderRadius = '8px';
    myDiv.style.display = 'flex';
    myDiv.style.justifyContent = 'center';
    myDiv.style.alignItems = 'center';

    // innerText
    // Welcome to JavaScript
    // inside a h1 tag

    var content = 'welcome to javascript';
    myDiv.innerHTML = `<h1>${content}</h1>`;

    // step 3 -> appending my div element
    document.body.appendChild(myDiv);
    alert('One Box got created and inserted');
});
