
//referencias en el html
//npm start hacert correr con webpack
import{Todo} from '../classes'
import{ todoList } from '../index';

const divTodoList = document.querySelector('.todo-list');
const txtInput   = document.querySelector('.new-todo');

export const crearTodoHtml = (todo ) => {

    const htmlTodo = `
     <li class="${(todo.completado)? 'completed': ''}" data-id="${todo.id}">
		<div class="view">
		<input class="toggle" type="checkbox" ${(todo.completado)? 'checked': ''}>
			<label>${ todo.tarea }</label>
			<button class="destroy"></button>
				</div>
		<input class="edit" value="Create a TodoMVC template">
	</li> `;

    const div = document.createElement('div');
    div.innerHTML   = htmlTodo;
    
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

//eventos 

txtInput.addEventListener('keyup', (event) => {
    console.log(txtInput.value.length);
    if(event.keyCode  === 13 && txtInput.value.length > 1){
            console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = ' ';
    }
    
}); 