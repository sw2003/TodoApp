import React, { useState } from 'react';

export default function Form(props) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [desc, setDesc] = useState("");  

    function nameOnChange(e){
        setName(e.target.value); 
    }

    function dateOnChange(e){
        setDate(e.target.value);
    }

    function descOnChange(e){
        setDesc(e.target.value); 
    }

    function onSubmit(e){
        e.preventDefault();

    
        props.handleSubmit(name, date, desc); 
        setName("");
        setDate("");
        setDesc("");
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="input_name">Add Name</label>
                <input required type="text" id="input_name" className="input__lg" value={name} onChange={nameOnChange}></input>
            </div>
            <div>
                <label htmlFor="input_date">Add Date</label>
                <input required type="text" id="input_date" className="input__lg" value={date} onChange={dateOnChange}></input>
            </div>
            <div>
                <label htmlFor="input_desc">Add Description</label>
                <textarea required id="input_desc" className="input_desc input__lg" value={desc} onChange={descOnChange}></textarea>
            </div>
            <button>Submit</button>
        </form>
    )
}