import {Component} from '../../core';
import './todoList.css';

export class TodoList extends Component {
    /**
     * The TodoList component displays all todos in a list with the functionality to mark them as done and remove them.
     * @param element - the element reference in DOM.
     */
    constructor(element) {
        super(element);

        /* Bind 'this' in functions to 'this' of class itself */
        this.addTodo = this.addTodo.bind(this);
    }

    /**
     * Upon form submission, creates an HTML element and appends it to the 'todo' list.
     */
    addTodo(value) {
        /* Builds the 'todo' item element */
        const todoItem = document.createElement('li');
        todoItem.addEventListener('click', () => todoItem.classList.toggle('todo-done'));

        const todoItemContent = document.createElement('p');
        todoItemContent.innerText = value;
        todoItem.appendChild(todoItemContent);

        const removeTodoButton = document.createElement('button');
        removeTodoButton.classList.add('remove-button');
        removeTodoButton.innerHTML = 'X';
        removeTodoButton.addEventListener('click', () => this.elementRef.removeChild(todoItem));
        todoItem.appendChild(removeTodoButton);

        this.elementRef.appendChild(todoItem);
    }
}