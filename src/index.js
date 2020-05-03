document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', (e) => {
    console.log("click")
    addNewToDo()
    e.preventDefault()
  })
});

function addNewToDo() {  
  const list = document.getElementById("tasks")
  let newItem = document.createElement('li')  

  inputField = document.getElementById('new-task-description')
  newItem.innerText = inputField.value 
  inputField.value = "" // clear input field after add to list

  list.appendChild(newItem)
}