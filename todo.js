let todoInput = document.getElementById("todo-input");
let addBtn = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list")

let task = "";
let tasks = [{id: 1, task: "asdsasd", isChecked: true}];
let taskId = 1;

todoInput.addEventListener("change", (e) => {
    task += e.target.value;
})

addBtn.addEventListener("click", () => {
    tasks.push({id: ++taskId, task, isChecked: false});
    addTodo({id: ++taskId, task, isChecked: false});
    task = "";
    todoInput.value = "";
})

createTodos();

function addTodo(task) {
    let todoItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let taskLabel = document.createElement("label");
    let deleteBtn = document.createElement("button");
    let delIcon = document.createElement("i");

    todoItem.id = `taskItem${task.id}`;

    delIcon.classList.add("fa-solid", "fa-trash");
    deleteBtn.appendChild(delIcon);

    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(todoItem);
    })

    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.fontSize = "15px";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding="5px";
    deleteBtn.style.color ="#ffffff";
    deleteBtn.style.marginLeft = "10px";

    checkBox.id = `check${task.id}`;
    taskLabel.htmlFor = `check${task.id}`;
    checkBox.addEventListener("change", () => {
        checkBox.checked ?
            taskLabel.style.textDecoration = "line-through" :
            taskLabel.style.textDecoration = "none";
    })

    todoItem.style.display = "flex";
    todoItem.style.fontSize = "18px";
    checkBox.style.scale = "1.3";
    checkBox.style.marginRight = "8px";
    todoItem.style.margin = "10px";
    checkBox.type = "checkbox";
    todoItem.appendChild(checkBox);
    taskLabel.textContent = task.task;

    if(task.isChecked){
        checkBox.checked = true;
        taskLabel.style.textDecoration = "line-through";
    }

    todoItem.appendChild(taskLabel);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
}

function createTodos() {
    tasks.forEach(todo => {
        addTodo(todo);
    })
}