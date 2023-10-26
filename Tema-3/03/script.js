const createNewListButton = document.getElementById("create-new-list");
const addItemsButton = document.getElementById("add-new-item");
const textField = document.getElementById("text-field");
const listContainer = document.getElementById("list-container")
const form = document.getElementById('form-item')

const toggleHiden = (elements) => {
  elements.forEach(element => element.hidden = !element.hidden)
};

// toggleHiden([createNewListButton, addItemsButton, textField])
createNewListButton.addEventListener("click", () => {
  toggleHiden([createNewListButton, addItemsButton, textField])
  const ol = document.createElement('ol') 
  ol.id = "list"
  listContainer.append(ol)
});

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const newButton = document.createElement('button')
  const li = document.createElement('li')
  const list = document.getElementById('list')
  const span = document.createElement('span')
  
  newButton.id = 
  newButton.className = 'remove-button'
  newButton.append('❌')
  
  span.append(newButton, textField.value)
  li.append(span)
  list.prepend(li)
  textField.value = ''
})




