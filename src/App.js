import React from 'react'
import Form from './components/form';
import TodoItem from './components/todo-item';

function App() {
  return (
    <div className="App">
      <h1>TodoApp</h1>
      <Form></Form>
      <div class="form-btn-group">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <ul>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
      </ul>
    </div>
  );
}

export default App;
