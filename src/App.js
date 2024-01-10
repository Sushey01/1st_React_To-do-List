import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const addTodo = () => {
    // Check if 'value' is not empty
    if (value.trim() !== '') {
      // Update the 'todos' state with the new todo
      setTodos((prevTodos) => [...prevTodos, value]);

      // Reset the 'value' state
      setValue('');
    }
  };

  return (
    <div className="Container">
      <h1 className='heading'>To do List</h1>
      <div className='input-container'>
        <input type='text' value={value} onChange={handleChange} />
        <button onClick={addTodo}>Add Todo</button>
        <ol>
          {todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
