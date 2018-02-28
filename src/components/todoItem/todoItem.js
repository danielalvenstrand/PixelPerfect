import {Component} from '../../core';
import './todoItem.css'

export class TodoItem extends Component {
    /**
     * The TodoItem component creates a todo object and HTML element, and adds itself to its parent.
     * @param todo - The todo object containing value and state.
     * @param parent - The parent, a TodoList component.
     */
    constructor(todo, parent) {
        super(document.createElement('li'));

        /* Binds objects to variables */
        this.todo = todo;
        this.parent = parent;

        /* Bind 'this' in functions to 'this' of class itself */
        this.buildTodo = this.buildTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);

        /* Functions to call after bindings */
        this.buildTodo();
    }

    /**
     * Builds the TodoItem component as an object and an HTML element and adds itself to its parent.
     */
    buildTodo() {
        /* Builds the 'todo' item element */
        this.elementRef.classList.add('todo-item');
        this.elementRef.addEventListener('click', this.toggleTodo);

        const todoItemContent = document.createElement('p');
        todoItemContent.innerText = this.todo.value;
        this.elementRef.appendChild(todoItemContent);

        const removeTodoButton = document.createElement('button');
        removeTodoButton.innerHTML = 'X';
        removeTodoButton.addEventListener('click', this.removeTodo);
        this.elementRef.appendChild(removeTodoButton);

        if (this.todo.state === 'DONE') this.elementRef.classList.add('todo-done');

        this.parent.elementRef.appendChild(this.elementRef);
        this.parent.todos.push(this.todo);
        this.parent.saveTodos();
    }

    /**
     * Toggles the state of the TodoItem.
     */
    toggleTodo() {
        this.elementRef.classList.toggle('todo-done');
        this.todo.state = this.todo.state === 'DONE' ? 'NOT_DONE' : 'DONE';
        this.parent.saveTodos();
    }

    /**
     * Removes the todo object and HTML element from its parent.
     * Also removes the TodoItem component from memory.
     */
    removeTodo() {
        this.parent.elementRef.removeChild(this.elementRef);
        const todoPlace = this.parent.todos.indexOf(this.todo);
        this.parent.todos.splice(todoPlace, 1);
        this.parent.saveTodos();
        delete this;
    }
}