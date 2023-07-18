const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Array to store the todos
let todos = [];

// Middleware to validate user input for creating a todo
const validateTodoInput = (req, res, next) => {
  if (!req.body.task) {
    res.status(400).json({ message: 'Validation failed. Please provide a task.' });
  } else {
    next();
  }
};

// Endpoint to get all todos
app.get('/', (req, res) => {
  res.json(todos);
});

// Endpoint to create a todo
app.post('/add', validateTodoInput, (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task
  };

  todos.push(newTodo);

  res.json({ message: 'Todo created successfully.', data: todos });
});

// Endpoint to update a todo
app.put('/update/:id', (req, res) => {
  const todoId = parseInt(req.params.id);

  const todoIndex = todos.findIndex(todo => todo.id === todoId);

  if (todoIndex !== -1) {
    todos[todoIndex].task = req.body.task;
    res.json({ message: 'Todo updated successfully.', data: todos });
  } else {
    res.status(404).json({ message: 'Todo not found.' });
  }
});

// Endpoint to delete a todo
app.delete('/delete/:id', (req, res) => {
  const todoId = parseInt(req.params.id);

  const todoIndex = todos.findIndex(todo => todo.id === todoId);

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    res.json({ message: 'Todo deleted successfully.', data: todos });
  } else {
    res.status(404).json({ message: 'Todo not found.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
