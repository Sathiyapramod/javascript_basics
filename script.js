var myForm = document.getElementById('login-form');

myForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    console.log(ev);
    const { username, password } = ev.target;
    console.log(username.value, password.value);
});
