import React from 'react'

export default function TodoItem(props) {
    return (
        <li>
            <div class="todo-name">
                <h2>{props.date}</h2>
                <h2>{props.name}</h2>
            </div>
            <input type ="checkbox"></input>
            <div class="btn-group">
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </li>
    )
}