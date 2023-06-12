
import React, { useState } from 'react';
import Form from './components/form';
import TodoItem from './components/todo-item';
import FilterButton from './components/filter-button';
import { nanoid } from 'nanoid';

const FILTER_OPTIONS = {
  "All": ()=>true,
  "Active": (task)=>!task.Completed,
  "Completed": (task)=>task.Completed
}

const FILTER_NAMES = Object.keys(FILTER_OPTIONS); 

function App(props) {
  const [tasks, setTasks] = useState(props.Tasks) 
  const [filter, setFilter] = useState("All"); 

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

  console.log(filter);
  
  const taskList = tasks.filter(FILTER_OPTIONS[filter]).map((task)=>{
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

  const filterList = FILTER_NAMES.map((option)=>{
    return <FilterButton 
    key={option}
    name={option}
    setFilter={setFilter}
    />
  })

  return (
    <div className="App">
      <h1>TodoApp</h1>
      <Form handleSubmit={handleSubmit}></Form>
      <div className="form-btn-group">
        {filterList}  
      </div>
      <ul>
          {taskList}
      </ul>
    </div>
  );
}

export default App;
