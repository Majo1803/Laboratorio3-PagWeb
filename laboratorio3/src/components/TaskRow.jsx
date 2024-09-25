// src/components/TaskRow.js
import React from 'react';

const TaskRow = ({ task, onSelect, onComplete }) => {
  return (
    <li className="task-row">
      <input type="checkbox" checked={task.completed} onChange={onComplete} />
      <span>{task.title}</span>
      <span>{task.completed ? '-Completada' : '-Pendiente'}</span>
      <button onClick={onSelect}>Ver Detalles</button>
    </li>
  );
};

export default TaskRow;
