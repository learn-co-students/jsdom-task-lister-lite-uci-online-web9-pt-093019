
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

    const descSpan = document.createElement('span')
    descSpan.id = 'desc'
    descSpan.innerText = taskValue

    const dateSpan = document.createElement('span')
    dateSpan.id = 'date'
    dateSpan.innerText = taskDate

    const newListElement = document.createElement('li');
    newListElement.id = `li${elementIdNum}`
    newListElement.style.color = taskColor
    newListElement.setAttribute('data-date', taskDate)
    newListElement.innerHTML = descSpan.outerHTML + " " + "Due: " + " " + dateSpan.outerHTML + "   " + editBtn.outerHTML + "  " + deleteBtn.outerHTML;
    todoList.appendChild(newListElement);

    document.querySelector(`BUTTON#editli${elementIdNum}`).addEventListener('click', editElement);
    document.querySelector(`BUTTON#li${elementIdNum}`).addEventListener('click', deleteElement);

    elementIdNum += 1

    document.getElementById('new-task-description').value = ""
    document.getElementById('colors').value = ""
    document.getElementById('task-date').value = ""
    document.getElementById('submit').value = "Create New Task"
  });
  
  function editElement(event) {
    // Get current todo data
    const listItem = event.target.parentNode
    const itemDesc = listItem.children[0].innerText
    const itemStyle = listItem.style.color
    const itemDate = listItem.children[1].innerText

    // Populate new todo form with current data
    document.getElementById('new-task-description').value = itemDesc
    document.getElementById('colors').value = itemStyle
    document.getElementById('task-date').value = itemDate

    // Change Submit Button Text to "Save Changes"
    document.getElementById('submit').value = "Save Changes"

    // Remove existing todo item
    
    listItem.parentNode.removeChild(listItem)

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
