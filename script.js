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


//event-listeners
todoBtn.addEventListener("click", addTodo)
