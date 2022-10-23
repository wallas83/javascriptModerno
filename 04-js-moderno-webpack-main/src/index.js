
import './styles.css';

import { Todo,TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

 export const todoList = new TodoList();
    // lo de abajo literalmente hace lo mismo que esta instruccion porque solo tieien un argumento
   // todoList.todos.forEach(todo => crearTodoHtml(todo));
    
    todoList.todos.forEach( crearTodoHtml);
// const tarea = new Todo('Aprender javaScript pe');

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

//localstorage solo usar cuando estamos en la web, session storage
//local storage no posee tiempo de expiracion 

//localStorage.setItem('mi-key', 'abvs123');
//sessionStorage.setItem('mi-key', 'abvs123')
// setTimeout(() => {
//         localStorage.removeItem('mi-key');
// }, 1500);
