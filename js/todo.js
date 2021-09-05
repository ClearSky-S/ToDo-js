const addTodoForm = document.querySelector("form#add-todo");
const todoList = document.querySelector("ul#todo-list");
const finishedList = document.querySelector("#finished-list");
const finishedToggle = document.querySelector("#finished-toggle");
const finishedNnumberElement = finishedToggle.getElementsByTagName("span")[0];
const INPUT_ID_FRONT = "input-";
const LOCALSTORAGE_TODO_KEY = "todo"
let todoDatabase = [
    // {
    //     id:"123",
    //     work:"english",
    //     checked:"false"
    // }
];

function updateLocalStorage() {
    const dataString = JSON.stringify(todoDatabase);
    localStorage.setItem(LOCALSTORAGE_TODO_KEY, dataString);
}
function loadLocalStorage() {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_TODO_KEY));
    if (data === null || data.length === 0) {
        return;
    }
    todoDatabase = data;
    todoDatabase.forEach(element => {
        const time = parseInt(element.id);
        const submitedText = element.work;
        const checked = element.checked;

        const li = document.createElement("li");
        li.id = time;
        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = INPUT_ID_FRONT + time;
        input.checked = checked;
        li.appendChild(input);
        input.addEventListener("change", function (e) {
            const parent = e.target.parentNode;
            const id = parseInt(parent.id, 10);
            const databaseElement = todoDatabase.find((item) => item.id === id);
            if (e.target.checked) {
                finishedList.appendChild(parent);
                databaseElement.checked = true;
            } else {
                todoList.appendChild(parent);
                databaseElement.checked = false;
            }
            updateLocalStorage();
            updateFinishedNumber();
        })


        const label = document.createElement("label");
        label.htmlFor = INPUT_ID_FRONT + time;
        label.textContent = submitedText;
        li.appendChild(label);

        const button = document.createElement("button");
        button.innerHTML = "&mdash;"
        button.addEventListener("click", function (e) {
            const parent = e.target.parentNode;
            parent.remove();
            updateFinishedNumber();
            todoDatabase = todoDatabase.filter(item => (item.id !== parseInt(parent.id)));
            updateLocalStorage();
        })

        li.appendChild(button);
        if(checked){
            finishedList.appendChild(li);
        } else {

            todoList.appendChild(li);
        }
        
    })
    updateFinishedNumber();
}
loadLocalStorage();

function updateFinishedNumber() {
    finishedNnumberElement.textContent = document.querySelectorAll("#finished-list li").length;
}

function drawTodoElement(event) {
    event.preventDefault();

    const time = Date.now();
    const submit = document.querySelector("form#add-todo input");
    const submitedText = submit.value;
    submit.value = '';


    const li = document.createElement("li");
    li.id = time;


    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = INPUT_ID_FRONT + time;
    input.checked = false;
    li.appendChild(input);
    input.addEventListener("change", function (e) {
        const parent = e.target.parentNode;
        const id = parseInt(parent.id, 10);
        const databaseElement = todoDatabase.find((item) => item.id === id);
        if (e.target.checked) {        
            finishedList.appendChild(parent);
            databaseElement.checked = true;
        } else {
            todoList.appendChild(parent);
            databaseElement.checked = false;
        }
        updateLocalStorage();
        updateFinishedNumber();
    })


    const label = document.createElement("label");
    label.htmlFor = INPUT_ID_FRONT + time;
    label.textContent = submitedText;
    li.appendChild(label);

    const button = document.createElement("button");
    button.innerHTML = "&mdash;"
    button.addEventListener("click", function (e) {
        const parent = e.target.parentNode;
        parent.remove();
        updateFinishedNumber();
        todoDatabase = todoDatabase.filter(item => (item.id !== parseInt(parent.id)));
        updateLocalStorage();
    })

    li.appendChild(button);

    todoList.appendChild(li);
    todoDatabase.push(
        {
            id: time,
            work: submitedText,
            checked: false,
        }
    );
    updateLocalStorage();
}
addTodoForm.addEventListener("submit", drawTodoElement);


finishedToggle.addEventListener("click", function (e) {
    const OFF_CLASSNAME = "off";
    const finishedList = document.querySelector("#finished-list");
    if (this.classList.contains(OFF_CLASSNAME)) {
        finishedList.style.display = "block";
        this.classList.toggle(OFF_CLASSNAME);
    } else {
        finishedList.style.display = "none";
        this.classList.toggle(OFF_CLASSNAME);
    }
})

const clearFinishedListButton = document.querySelector("#clear-finished-list");
clearFinishedListButton.addEventListener("click", function (e) {
    const finishedList = document.querySelectorAll("#finished-list li");
    for (let i = 0; i < finishedList.length; i++) {
        finishedList[i].remove();
        updateFinishedNumber();
    }
    todoDatabase = todoDatabase.filter(element=> element.checked===false);
    updateLocalStorage();
})