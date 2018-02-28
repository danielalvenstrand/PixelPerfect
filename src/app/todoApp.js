import {TodoForm, TodoList} from '../components/index';

import '../styles/quarks.css';
import '../styles/atoms.css';
import '../styles/utilities.css';

class TodoApp {
    /**
     * The TodoApp initializes components and binds them to the DOM and enables the user to
     * add and remove todos, and mark todos as done.
     */
    constructor() {
        /* Binds DOM elements to variables */
        const todoListElementRef = document.getElementById('todo-list'),
            todoFormElementRef = document.forms['todo-form'];
        this.todoList = new TodoList(todoListElementRef);
        this.todoForm = new TodoForm(todoFormElementRef, this.todoList);
    }
}

export default TodoApp;