const username = document.getElementById('username');
const password = document.getElementById('password');
const showPassword = document.getElementById('show-password');
const loginButton = document.getElementById('login-button');

showPassword.addEventListener(`click`, function(){
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
});