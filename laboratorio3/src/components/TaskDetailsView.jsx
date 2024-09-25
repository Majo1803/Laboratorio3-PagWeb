// src/components/TaskDetailsView.js
import React from 'react';

const TaskDetailsView = ({ task, onDelete }) => {
  return (
    <div className="task-details">
      <h2>{task.title}</h2>
      <p>Creada el: {task.created_at}</p>
      <p>{task.description}</p>
      <button onClick={() => onDelete(task.id)}>Eliminar Tarea</button>
    </div>
  );
};

export default TaskDetailsView;
