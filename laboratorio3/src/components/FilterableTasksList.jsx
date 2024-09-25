// src/components/FilterableTasksList.js
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
      <input
        type="text"
        placeholder="Buscar tareas"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
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
    </div>
  );
};

export default FilterableTasksList;
