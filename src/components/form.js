import React from 'react'

export default function Form(props) {
    return (
        <form>
            <div>
                <label htmlFor="input_name">Add Name</label>
                <input type="text" id="input_name" class="input__lg"></input>
            </div>
            <div>
                <label htmlFor="input_date">Add Date</label>
                <input type="text" id="input_date" class="input__lg"></input>
            </div>
            <div>
                <label htmlFor="input_desc">Add Description</label>
                <textarea id="input_desc" class="input_desc input__lg"></textarea>
            </div>
        </form>
    )
}