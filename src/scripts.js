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
        this.validateForm = this.validateForm.bind(this);
        this.addTodo = this.addTodo.bind(this);

        /* Bind events of DOM elements to functions */
        this.todoForm.addEventListener('submit', this.submit);
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
            this.addTodo();
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
     * Upon form submission, creates an HTML element and appends it to the 'todo' list.
     */
    addTodo() {
        const value = this.todoInput.value;

        /* Builds the 'todo' item element */
        const todoItem = document.createElement('li');
        todoItem.addEventListener('click', () => todoItem.classList.toggle('todo-done'));

        const todoItemContent = document.createElement('p');
        todoItemContent.innerText = value;
        todoItem.appendChild(todoItemContent);

        const removeTodoButton = document.createElement('button');
        removeTodoButton.innerHTML = 'X';
        removeTodoButton.addEventListener('click', () => this.todoList.removeChild(todoItem));
        todoItem.appendChild(removeTodoButton);

        this.todoList.appendChild(todoItem);
    }
}

/* Instantiates the main class of the 'todo' app, essentially starting the app */
new TodoApp();