const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.getElementById("greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"


function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.textContent = `Hello! ${username}`;
    localStorage.setItem(USERNAME_KEY,username);

}

const savedUsername = localStorage.getItem(USERNAME_KEY)
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);

} else{
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.textContent = `Hello! ${savedUsername}`;
}