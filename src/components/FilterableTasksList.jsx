
import React, { useState } from 'react';
import TaskRow from './TaskRow';
import '../App.css';

const FilterableTasksList = ({ tasks, onTaskSelect, onTaskComplete }) => {
  const [filter, setFilter] = useState('');

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="task-list">
      <h2>To-Do List ({filteredTasks.length})</h2>
      <div class="input-container">
        <input
          type="text"
          className='filter'
          placeholder="Buscar tareas"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
        </svg>
      </div>


      <ul>
        {filteredTasks.map(task => (
          <TaskRow
            key={task.id}
            task={task}
            onSelect={() => onTaskSelect(task)}
            onComplete={() => onTaskComplete(task.id)}
          />
        ))}
      </ul>
    </div >
  );
};

export default FilterableTasksList;
