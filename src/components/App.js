import React, { useState, useMemo } from 'react';
import UseMemo from './UseMemo.js'; // Corrected import path
import ReactMemo from './ReactMemo.js'; // Corrected import path

const App = () => {
  // State management
  const [counter, setCounter] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [customTask, setCustomTask] = useState('');

  // Adding a new default task
  const addTodo = () => {
    setTasks([...tasks, "New todo"]);
  };

  // Increment counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Add custom task if length is greater than 5 characters
  const handleSubmit = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask('');
    } else {
      alert("Task should be at least 6 characters long.");
    }
  };

  // Memoize the task list to prevent unnecessary re-renders
  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <div>
      <h1>React Memo Assignment</h1>

      {/* Task list */}
      <div>
        <h3>Task List</h3>
        <ul>
          {memoizedTasks.map((task, index) => (
            <ReactMemo key={index} task={task} />
          ))}
        </ul>
      </div>

      {/* Add a new todo */}
      <button onClick={addTodo}>Add Todo</button>

      {/* Increment counter */}
      <button onClick={incrementCounter}>Increment Counter</button>
      <div>Counter Value: {counter}</div>

      {/* Custom task input */}
      <div>
        <input
          type="text"
          value={customTask}
          onChange={(e) => setCustomTask(e.target.value)}
          placeholder="Enter custom task (min 6 chars)"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* UseMemo Example */}
      <UseMemo counter={counter} />
    </div>
  );
};

export default App;
