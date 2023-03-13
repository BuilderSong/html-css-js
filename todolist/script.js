// model, view, controller
//A Model, which holds the business logic
//A View which manages how the information is displayed and receives user interaction
//A Controller, which glues the other two together while keeping each of their roles separated

//Model Section
const getTodos = () => {
  let todos = [];
  for (let [key, value] of Object.entries(localStorage)) {
    todos.push(JSON.parse(value));
  };
  return todos;
};


const addTodo = () => {
  const todoText = document.querySelector('.todo-text-input');
  const todoDueDate = document.querySelector('.todo-due-data-input');
  if (todoText.value === '' || todoDueDate.value === '') {
    alert('please type in todo or the due data');
    return;
  }
  const id = new Date().toISOString()
  const newTodo = {
    text: todoText.value,
    data: todoDueDate.value,
    id: id
  };
  localStorage.setItem(id, JSON.stringify(newTodo))
  todoText.value = '';
  todoDueDate.value = '';
};

const removeTodo = (id) => {
  localStorage.removeItem(id);
  render()
}


//View Section
const render = () => {
  const todos = getTodos();
  const todoDiv = document.querySelector('.todo-list-div');
  todoDiv.innerHTML = '';
  todos.forEach(todo => {
    const todoItem = document.createElement('div');
    const todoSpan = document.createElement('span');
    const deleteButton = document.createElement('button');
    todoItem.setAttribute('class', 'todo-item-note');
    todoSpan.setAttribute('class', 'todo-span-note');
    deleteButton.setAttribute('class', 'delete-btn');
    deleteButton.innerText = 'Complete';
    deleteButton.addEventListener('click', () => removeTodo(todo.id));
    todoSpan.textContent = `${todo.text} - ${todo.data}`;
    todoItem.appendChild(todoSpan);
    todoItem.appendChild(deleteButton);
    todoDiv.appendChild(todoItem);
  });
}


//Controller Section
window.addEventListener("load", render);

const addTodoButton = document.querySelector('.add-todo-button');
addTodoButton.addEventListener('click', () => {
  addTodo();
  render();
});