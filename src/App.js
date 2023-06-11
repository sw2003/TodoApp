
function App() {
  return (
    <div className="App">
      <h1>TodoApp</h1>
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
      <ul>
        <li>
          <div class = "todo-name">
            <h2>3/13/2023</h2>
            <h2>Sleep</h2>
          </div>
          <div class ="btn-group">
            <button>Edit</button>
            <button>Delete</button>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </li>
        <li>
          <div class = "todo-name">
            <h2>4/13/2023</h2>
            <h2>Work</h2>
          </div>
          <div class = "btn-group">
            <button>Edit</button>
            <button>Delete</button>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
