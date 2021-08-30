const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginSubmit(event) {
    event.preventDefault();
    console.dir(event);
    console.dir(loginInput.value);
}

loginForm.addEventListener("submit",onLoginSubmit);