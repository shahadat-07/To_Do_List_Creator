import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false
    }

    setTodos([...todos].concat(newTodo))
    setTodo("");
  }


  return (

    <div id="to_do" className="container text-center mt-5 pt-5">
      <h1 className="text-center text-black mb-5">To Do List Creator</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button type="submit">Add Todo</button>
      </form>
      {
        todos.map((todo) => <div className="mt-3">{todo.text}</div>)
      }
    </div>

  );
}

export default App;
