document.addEventListener("DOMContentLoaded", () => {
  // your code here
let counter = 0;
const taskForm = document.getElementById("create-task-form");

  function addTask() { 
    let taskList = document.getElementById("tasks");
    let newTaskDesc = document.getElementById("new-task-description");
    let newTaskPriority = document.getElementById("new-task-priority");
    const lineItem = document.createElement("li");

    lineItem.textContent = `${newTaskDesc.value} in category: ${newTaskCat.value}`;
    lineItem.id = `item-${counter}`
    taskList.appendChild(lineItem);

    //Add delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "x";
    lineItem.append(deleteButton);
    //Clicking button deletes current lineItem
      deleteButton.addEventListener("click", function(e) {
        // select what to delete
        const buttonParent = deleteButton.parentElement
        // remove it
        buttonParent.remove();  
      });
    newTaskDesc.value = "";
    counter += 1;
  };

  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    addTask();
  });

  
});
