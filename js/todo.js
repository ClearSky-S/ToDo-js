const addTodoForm = document.querySelector("form#add-todo");
const todoList = document.querySelector("ul#todo-list");
const finishedToggle = document.querySelector("#finished-toggle");
const finishedNnumberElement = finishedToggle.getElementsByTagName("span")[0];
const INPUT_ID_FRONT = "input-";

function updateFinishedNumber(){
    finishedNnumberElement.textContent = document.querySelectorAll("#finished-list li").length;
}

function drawTodoElement(event){
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
    input.addEventListener("change", function(e){
        if(e.target.checked){
            const parent = e.target.parentNode;
            const finishedList = document.querySelector("#finished-list");
            finishedList.appendChild(parent);
        } else{
            const parent = e.target.parentNode;
            const todoList = document.querySelector("#todo-list");
            todoList.appendChild(parent);
        }
        updateFinishedNumber();
    })


    const label = document.createElement("label");
    label.htmlFor = INPUT_ID_FRONT + time;
    label.textContent = submitedText;
    li.appendChild(label);

    const button = document.createElement("button");
    button.innerHTML = "&mdash;"
    button.addEventListener("click",function(e){
        const parent = e.target.parentNode;
        parent.remove();
        updateFinishedNumber();
    })

    li.appendChild(button);
    
    todoList.appendChild(li);
}   
addTodoForm.addEventListener("submit", drawTodoElement);


finishedToggle.addEventListener("click", function(e){
    const OFF_CLASSNAME = "off";
    const finishedList = document.querySelector("#finished-list");
    if(this.classList.contains(OFF_CLASSNAME)){
        finishedList.style.display = "block";
        this.classList.toggle(OFF_CLASSNAME);
    } else{
        finishedList.style.display = "none";
        this.classList.toggle(OFF_CLASSNAME);
    }
})

const clearFinishedListButton = document.querySelector("#clear-finished-list");
clearFinishedListButton.addEventListener("click", function(e){
    const finishedList = document.querySelectorAll("#finished-list li");
    for(let i=0; i<finishedList.length; i++){
        finishedList[i].remove();
        updateFinishedNumber();
    }
})