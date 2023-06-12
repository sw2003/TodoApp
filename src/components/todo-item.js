import React, { useState } from 'react';

export default function TodoItem(props) {
    const [isEditing, setEditing] = useState(false);
    const [editingName, setNameEdits] = useState(false);
    const [editingDate, setDateEdits] = useState(false);
    const [editingDesc, setDescEdits] = useState(false);   

    const [newName, setNewName] = useState(""); 
    const [newDate, setNewDate] = useState(""); 
    const [newDesc, setNewDesc] = useState(""); 

    function onChange(e, setter){
        setter(e.target.value);
    }

    function onClick(value, setter, type, id){
        props.handleEdit(type, value, id); 

        setter(""); 
    }

    function handleDelete(id){
        props.handleDelete(id); 
    }

    const displayTemplate = (
        <li>
            <div className="todo-name">
                <h2>{props.date}</h2>
                <h2>{props.name}</h2>
            </div>
            <input type="checkbox" defaultChecked={props.completed} onChange={() => props.handleCompletion(props.id)}></input>
            <div className="btn-group">
                <button onClick={() => setEditing(true)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(props.id)}>Delete</button>
            </div>
            <p>{props.desc}</p>
        </li>
    )

    const editingTemplate = (
        <li>
            <div className="todo-name">
                <h2>{props.date}</h2>
                <h2>{props.name}</h2>
            </div>
            <button onClick={()=>setNameEdits(!editingName)}>{!editingName ? "Edit Name": "Cancel Edit"}</button> 
            {
                editingName && <div className="edit-form-btn-group">
                    <input type="text" value={newName} onChange={(e)=>onChange(e, setNewName)}></input>
                    <button onClick={()=>onClick(newName, setNewName, "Name", props.id)}>Submit Edit</button>
                </div>
            }
            <button onClick={()=>setDateEdits(!editingDate)}>{!editingDate ? "Edit Date": "Cancel Edit"}</button>
            {
                editingDate && <div className="edit-form-btn-group">
                    <input type="text" value={newDate} onChange={(e)=>onChange(e, setNewDate)}></input>
                    <button onClick={()=>onClick(newDate, setNewDate, "Date", props.id)}>Submit Edit</button>
                </div>
            }
            <button onClick={()=>setDescEdits(!editingDesc)}>{!editingDate ? "Edit Description": "Cancel Description"}</button>
            {
                editingDesc && <div className="edit-form-btn-group">
                    <input type="text" value={newDesc} onChange={(e)=>onChange(e, setNewDesc)}></input>
                    <button onClick={()=>onClick(newDesc, setNewDesc, "Desc", props.id)}>Submit Edit</button>
                </div>
            }
            <button onClick={()=>setEditing(false)}>Cancel</button>
        </li>
    )
    return !isEditing ? displayTemplate : editingTemplate; 
}