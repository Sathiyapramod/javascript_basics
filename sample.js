var submitForm = document.getElementById('login-form');

submitForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const { username, password } = event.target;
    console.log(username.value, password.value);

    const payload = {
        username: username.value,
        password: password.value
    };

    fetch('', {
        method: 'POST',
        body: JSON.stringify(payload)
    })
        .then((response) => {
            // raw string data
            // convert to readable JS object
            return response.json();
        })
        .then((result) => {
            // implementation logic
        })
        .catch((error) => {
            console.log('error', error);
        });
    console.log('form is submitted');
});
