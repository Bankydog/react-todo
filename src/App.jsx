import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleTodoTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (todoText.trim() !== "") {
      const newTodo = [...todo];
      newTodo.push(todoText);
      setTodo(newTodo);
      setTodoText("");
    } else {
      alert("Please enter a todo before submitting.");
    }
  };

  const deleteTodo = (todoIndex) => {
    const newTodo = [...todo];
    newTodo.splice(todoIndex, 1);
    setTodo(newTodo);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>

      <form>
        <div className="input-container">
          <input
            id="todo-input"
            className="input-box"
            type="text"
            placeholder="Enter text here"
            onChange={handleTodoTextChange}
            value={todoText}
          />
          <>
            <div className="b-cont">
              <button className="button-click" onClick={addTodo}>
                Add
              </button>
            </div>
          </>
        </div>
      </form>

      <ul className="todo-list">
        {todo.map((item, index) => {
          return (
            <li className="list">
              <div className="item-li">{item}</div>
              <button
                className="delete-button"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
