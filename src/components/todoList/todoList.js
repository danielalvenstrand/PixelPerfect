import {Component, TODOS} from '../../core';
import {TodoItem} from '../';
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
        this.saveTodos = this.saveTodos.bind(this);
        this.loadTodos = this.loadTodos.bind(this);

        /* Class variables */
        this.todos = [];

        /* Functions to call after bindings */
        this.loadTodos();
    }

    /**
     * Upon form submission, creates an HTML element and appends it to the 'todo' list.
     */
    addTodo(todo) {
        new TodoItem(todo, this);
    }

    /**
     * Stores todos in local storage.
     */
    saveTodos() {
        const todoString = JSON.stringify(this.todos);
        localStorage.setItem(TODOS, todoString);
    }

    /**
     * Loads todos from local storage.
     */
    loadTodos() {
        const todoString = localStorage.getItem(TODOS);
        const todos = todoString ? JSON.parse(todoString) : [];
        todos.forEach(todo => this.addTodo(todo));
    }
}