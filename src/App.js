
import React, { useState } from 'react';
import Form from './components/form';
import TodoItem from './components/todo-item';
import FilterButton from './components/filter-button';
function App(props) {
  const [tasks, setTasks] = useState(props.Tasks) 
  
  const taskList = tasks.map((task)=>{
    return (<TodoItem key={task.Key} name={task.Name} date={task.Date} desc={task.Desc} completed={task.Completed} />)
  })

  return (
    <div className="App">
      <h1>TodoApp</h1>
      <Form></Form>
      <div className="form-btn-group">
        <FilterButton></FilterButton>
        <FilterButton></FilterButton>
        <FilterButton></FilterButton>     
      </div>
      <ul>
          {taskList}
      </ul>
    </div>
  );
}

export default App;
