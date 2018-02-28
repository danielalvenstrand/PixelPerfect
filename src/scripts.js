const INPUT_VALUE = 'input:value';
const TODOS = 'todos';

class TodoApp {
    /**
     * Binds DOM to javascript variables and class functions to their class.
     */
    constructor() {
        /* Bind DOM elements to variables */
        this.todoForm = document.forms['todo-form'];
        this.todoInput = this.todoForm['todo-input'];
        this.todoList = document.getElementById('todo-list');

        /* Bind 'this' in functions to 'this' of class itself */
        this.submit = this.submit.bind(this);
        this.saveInput = this.saveInput.bind(this);
        this.loadInput = this.loadInput.bind(this);
        this.saveTodos = this.saveTodos.bind(this);
        this.loadTodos = this.loadTodos.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.addTodo = this.addTodo.bind(this);

        /* Class variables */
        this.todos = [];

        /* Bind events of DOM elements to functions */
        this.todoForm.addEventListener('submit', this.submit);
        this.todoInput.addEventListener('keyup', this.saveInput);

        /* Functions to call after bindings */
        this.loadInput();
        this.loadTodos();
    }

    /**
     * Function to call when form is submitted.
     * @param event - The submit event.
     */
    submit(event) {
        /* Prevents form submission from reloading the page */
        event.preventDefault();

        /* Validates form and appends the 'todo' item element to the 'todo' list element */
        try {
            this.validateForm();
            this.addTodo({
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
     * Upon form submission, creates an HTML element and appends it to the 'todo' list.
     */
    addTodo(todo) {
        /* Builds the 'todo' item element */
        const todoItem = document.createElement('li');
        todoItem.addEventListener('click', () => {
            todoItem.classList.toggle('todo-done');
            todo.state = todo.state === 'DONE' ? 'NOT_DONE' : 'DONE';
            this.saveTodos();
        });

        const todoItemContent = document.createElement('p');
        todoItemContent.innerText = todo.value;
        todoItem.appendChild(todoItemContent);

        const removeTodoButton = document.createElement('button');
        removeTodoButton.innerHTML = 'X';
        removeTodoButton.addEventListener('click', () => {
            this.todoList.removeChild(todoItem);
            const todoPlace = this.todos.indexOf(todo);
            this.todos.splice(todoPlace, 1);
            this.saveTodos();
        });
        todoItem.appendChild(removeTodoButton);

        if (todo.state === 'DONE') todoItem.classList.add('todo-done');

        this.todoList.appendChild(todoItem);
        this.todos.push(todo);
        this.saveTodos();
    }
}

/* Instantiates the main class of the 'todo' app, essentially starting the app */
new TodoApp();