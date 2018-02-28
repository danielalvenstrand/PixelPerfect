import {Component, INPUT_VALUE} from '../../core';
import './todoForm.css';

export class TodoForm extends Component {
    /**
     * The TodoForm component allows the user to add new todos to a list.
     * @param element - the element reference in DOM.
     * @param list - the 'TodoList component to bind to.
     */
    constructor(element, list) {
        super(element);

        /* Binds DOM elements to variables */
        this.todoInput = this.elementRef['todo-input'];
        this.list = list;

        /* Bind 'this' in functions to 'this' of class itself */
        this.submit = this.submit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.saveInput = this.saveInput.bind(this);
        this.loadInput = this.loadInput.bind(this);

        /* Bind submit of todoForm to add new item to todoList */
        this.elementRef.addEventListener('submit', this.submit);
        this.todoInput.addEventListener('keyup', this.saveInput);

        /* Functions to call after bindings */
        this.loadInput();
    }

    /**
     * Function to call when form is submitted.
     * @param event
     */
    submit(event) {
        /* Prevents form submission from reloading the page */
        event.preventDefault();

        /* Validates form and appends the 'todo' item element to the 'todo' list element */
        try {
            this.validateForm();
            this.list.addTodo({
                value: this.todoInput.value,
                state: 'NOT_DONE'
            });
        } catch(error) {
            /* Prints any error upon form validation */
            console.error(error.message);
        } finally {
            /* Resets the form, clearing inputs */
            event.target.reset();
        }

    }

    /**
     * Validates form and throws error if not valid.
     */
    validateForm() {
        /* Throw error if form input is empty */
        if (this.todoInput.value.length === 0) {
            throw new Error('Cannot add an empty todo!');
        }
    }

    /**
     * Stores input value in sessions storage.
     * @param event - The key up event.
     */
    saveInput(event) {
        sessionStorage.setItem(INPUT_VALUE, event.target.value);
    }

    /**
     * Loads input value from sessions storage on refresh.
     */
    loadInput() {
        this.todoInput.value = sessionStorage.getItem(INPUT_VALUE);
    }
}