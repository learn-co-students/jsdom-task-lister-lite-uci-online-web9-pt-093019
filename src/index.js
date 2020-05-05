document.addEventListener("DOMContentLoaded", () => {
  // your code here
let counter = 1;
const taskForm = document.getElementById("create-task-form");

  function addTask() { 
    const taskList = document.getElementById("tasks");
    const newTaskDesc = document.getElementById("new-task-description");
    const newTaskPriority = document.getElementById("new-task-priority");
    //Create new <li>
    const lineItem = document.createElement("li");
    //Add description and Priority
    lineItem.textContent = `${newTaskDesc.value} priority: ${newTaskPriority.value}`;
    lineItem.id = `item-${counter}`
    //Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "x";
    lineItem.append(deleteButton);
    //Clicking button deletes current lineItem
      deleteButton.addEventListener("click", function(e) {
        // select what to delete
        const buttonParent = deleteButton.parentElement
        // remove it
        buttonParent.remove();  
      });

    //Add new Task to List
    taskList.appendChild(lineItem);
    
    //Clear description
    newTaskDesc.value = "";
    //newTaskDesc.target.reset
    counter += 1;
  };

  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    addTask();
  });

  
});
