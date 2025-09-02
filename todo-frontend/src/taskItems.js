import React from 'react';

function TaskItem({ task }) {
  return (
    <li style={{ marginBottom: '10px' }}>
      <input type="checkbox" readOnly />
      <span style={{ marginLeft: '8px' }}>{task.title}</span>
    </li>
  );
}

export default TaskItem;