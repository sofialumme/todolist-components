import React, { useState } from 'react';
import TodoTable from './TodoTable';

function Todolist() {
  const [todo, setTodo] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div>
      <h1>Simple Todolist</h1>
      <h2>Add todo:</h2>
      <label>Description: </label>
      <input type="text" name="description" onChange={inputChanged} value={todo.description} />
      <label>Date: </label>
      <input type="text" name="date" onChange={inputChanged} value={todo.date} />
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todolist;