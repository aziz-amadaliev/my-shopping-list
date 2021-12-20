//selectors
const todoInput = document.querySelector(".todo-input")//input
const todoBtn = document.querySelector(".todo-button")//button
const todoList = document.querySelector(".todo-list")// UL

//functions - ES6 version arrow func
const addTodo = (event) => {
    event.preventDefault() //prevent form from submitting
    //console.log(event)
    const todoDiv = document.createElement("div") //creating Div el
    todoDiv.classList.add("todoDiv")//giving class name to todoDiv


    //creating li
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    //creating complete button
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn")
    todoDiv.appendChild(completedButton)

    //creating delete button
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add("delete-btn")
    todoDiv.appendChild(deleteButton)

    //append todoDiv to UL --> final step after creating elements
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}

const deleteComplete = (event) => {
    const item = event.target;
    //console.log(item)
    if (item.classList.contains("delete-btn")) {
        //console.log(item.classList)
        //console.log(item)
        //item.remove() //deletes only delete-btn
        const todo = item.parentElement; //finding parentElement
        todo.classList.add("fall")

        //func to remove todo after transition ends
        todo.addEventListener("transitionend", () => { 
            todo.remove()
        })
    } else if (item.classList.contains("completed-btn")) {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

//event-listeners
todoBtn.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteComplete)
