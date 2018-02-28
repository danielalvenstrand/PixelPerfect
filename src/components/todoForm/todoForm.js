import {Component} from '../../core';
import './todoForm.css';

export class TodoForm extends Component {
    /**
     * Binds DOM to javascript variables and class functions to their class.
     */
    constructor(element, list) {
        super(element);

        /* Binds DOM elements to variables */
        this.todoInput = this.elementRef['todo-input'];
        this.list = list;

        /* Bind 'this' in functions to 'this' of class itself */
        this.submit = this.submit.bind(this);
        this.validateForm = this.validateForm.bind(this);

        /* Bind submit of todoForm to add new item to todoList */
        this.elementRef.addEventListener('submit', this.submit);
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
            this.list.addTodo(this.todoInput.value);
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
}