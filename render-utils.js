// import { completeTodo } from './fetch-utils.js';
// import { displayTodos } from './todos.js';
export function renderTodo(todo) {
    // create a div and a p tag
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    const todoEl = document.createElement('p');
    if (todo.complete) {
        todoEl.classList.add('complete', 'todo');
    } else {
        todoEl.classList.add('incomplete', 'todo');
        
    }
    

    // add the 'todo' css class no matter what

    // put the todo's text into the p tag
    todoEl.textContent = todo.todo;
    // append stuff
    return todoEl;
    // return the div
}