
import React from 'react';

const TaskDetailsView = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task-details">
      <div className="task-header">
        <h2>{task.title}</h2>
        <p className='date'>Date: {task.created_at}</p>
      </div>
      <p className='description'>{task.description}</p>
      <div className='button_delete_edit'>
        <button onClick={() => onEdit(task)}>Edit Task</button>
        <button onClick={() => onDelete(task.id)}>Delete Task</button>
      </div>
    </div>
  );
};

export default TaskDetailsView;
