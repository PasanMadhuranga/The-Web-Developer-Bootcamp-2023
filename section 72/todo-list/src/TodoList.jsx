import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useState, useEffect } from 'react';

const getInitialData = () => {
  const data = localStorage.getItem('todos');
  return data ? JSON.parse(data) : [];
}

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData)

  useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [todos])

  const handleToggle = (id) => () => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }

  const addTodo = (text) => {
    setTodos((todos) => [...todos, { id: crypto.randomUUID(), text, completed: false }])
  }


  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            removeTodo={removeTodo}
          />
        );
      })}
      <TodoForm  addTodo={addTodo}/>
    </List>
  );
}