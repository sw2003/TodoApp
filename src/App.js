
import React, { useState } from 'react';
import Form from './components/form';
import TodoItem from './components/todo-item';
import FilterButton from './components/filter-button';
import { nanoid } from 'nanoid';

function App(props) {
  const [tasks, setTasks] = useState(props.Tasks) 

  function handleSubmit(name, date, desc){
    const id = nanoid(); 

    const updatedTasks = [...tasks, {
      Key: id,
      Id: id,
      Name: name,
      Date: date,
      Desc: desc, 
      Completed: false
    }]

    setTasks(updatedTasks); 
  }

  function handleCompletion(id){
    const updatedTasks = tasks.map((task)=>{
      console.log(`${task.Id}  ${id}`);

      if (task.Id === id){
        return {...task, Completed: !task.Completed}
      }

      return task;
    })

    setTasks(updatedTasks); 
    console.log(updatedTasks); 
  }

  function handleEdit(type, value, id){
      const updatedTasks = tasks.map((task)=>{
        if (task.Id === id){
          return {...task, [type]: value}
        }
        return task; 
      })
      setTasks(updatedTasks); 
  }

  function handleDelete(id){
    const updatedTasks = tasks.filter((task)=>{
      if (task.Id === id){
        return false; 
      }

      return true; 
    })
    setTasks(updatedTasks); 
  }
  

  const taskList = tasks.map((task)=>{
    return (<TodoItem 
      id={task.Id} 
      key={task.Key} 
      name={task.Name} 
      date={task.Date} 
      desc={task.Desc} 
      completed={task.Completed} 
      handleCompletion={handleCompletion} 
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />)
  })

  return (
    <div className="App">
      <h1>TodoApp</h1>
      <Form handleSubmit={handleSubmit}></Form>
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
