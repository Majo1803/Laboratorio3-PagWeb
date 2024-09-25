
import React from 'react';

const TaskRow = ({ task, onSelect, onComplete }) => {
  return (
    <li className="task-row">
      <input type="checkbox" checked={task.completed} onChange={onComplete} />
      <span className='span_title'>{task.title}</span>
      <span className='span_status'>{task.completed ? 'Completada' : 'Pendiente'}</span>
      <button onClick={onSelect}>Ver Detalles</button>
    </li>
  );
};


export default TaskRow;
