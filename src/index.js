import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  {
    Key: "todo-1", 
    Id: "todo-1",
    Name: "Sleep", 
    Date: "5/13/2023",
    Desc: "No Desc", 
    Completed: false
  },
  { 
    Key: "todo-2",
    Id: "todo-2", 
    Name: "Eat", 
    Date: "5/25/2024",
    Desc: "Go Eat",
    Completed: false
  }
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App Tasks={DATA}/>
);

