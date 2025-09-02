import React, { useState } from 'react';
import TaskList from './taskList';
import CreateTasks from './createTasks';

function App() {

  const [fetchTasks, setFetchTasks] = useState(false);
  const handleFetchTasks = () => {
    setFetchTasks(previousState => !previousState ? true : false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>My ToDo List</h1>
      <button onClick={handleFetchTasks} style={{ marginBottom: '20px' }}>Fetch Tasks</button>
      {fetchTasks &&
        <TaskList />
      }
      <div style={{ marginTop: '40px' }}>
        <h2>Create New Task</h2>
        <CreateTasks />
      </div>
    </div>
  );
}

export default App;