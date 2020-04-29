
document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const todoList = document.querySelector('ul');
  const sortButton = document.getElementById('sort-date')
  let elementIdNum = 0

  document.addEventListener('submit', () => {
    event.preventDefault();

    const taskValue = document.getElementById('new-task-description').value;
    const taskColor = document.getElementById('colors').value
    const taskDate = document.getElementById('task-date').value

    const deleteBtn = document.createElement('BUTTON');
    deleteBtn.innerText = "Delete";
    deleteBtn.id = `li${elementIdNum}`
    deleteBtn.style.backgroundColor = taskColor

    const editBtn = document.createElement('BUTTON');
    editBtn.innerText = "Edit";
    editBtn.id = `editli${elementIdNum}`
    editBtn.style.color = 'black'

    const newListElement = document.createElement('li');
    newListElement.id = `li${elementIdNum}`
    newListElement.style.color = taskColor
    newListElement.setAttribute('data-date', taskDate)
    newListElement.innerHTML = taskValue + " " + "Due: " + " " + taskDate + " " + " " + editBtn.outerHTML + " " + deleteBtn.outerHTML;
    todoList.appendChild(newListElement);
    document.getElementById('new-task-description').value = ""

    document.querySelector(`BUTTON#editli${elementIdNum}`).addEventListener('click', editElement);
    document.querySelector(`BUTTON#li${elementIdNum}`).addEventListener('click', deleteElement);

    elementIdNum += 1
    
  });
  
  function editElement(event) {
    console.log(event)
    // Still working on this functionality - not yet sure how to implement...
  }

  function deleteElement(event) {
    const el = document.querySelector(`li#${event.srcElement.id}`)
    el.remove()
  };

  sortButton.addEventListener('click', () => {
    const listArray = Array.prototype.slice.call(todoList.children)
    listArray.sort(function(a, b) {
      return (a.getAttribute('data-date') < b.getAttribute('data-date') ? -1 : 1)
    })
    
    for (let i = 0; i < listArray.length; i++) {
      let parentList = listArray[i].parentNode
      const parentItem = parentList.removeChild(listArray[i])
      parentList.appendChild(parentItem)
    }
  });
});
