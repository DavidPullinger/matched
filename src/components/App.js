import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
    text: "Read books",
    done: true
  },
  {
    text: "Do nothing",
    done: false
  }

])

  
  return (
    <div className="App">
      <h1>To Do List</h1>
      {todos.map((todo)=>{
        return(<div><p>{todo.text}</p><p>{todo.done? "Done": "Not done"}</p></div>)
      })}
      <button onClick={()=>setTodos([{text: "Fuck bitches", done: true}])}>
        Click me</button>
    </div>
  );
}

export default App;
