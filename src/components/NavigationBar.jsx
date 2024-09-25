
import React from 'react';
import '../App.css';

const NavigationBar = ({ onAddTask }) => {
  return (
    <nav className="navbar">
      <h1>To-Do List</h1>
      <button className='addButton' onClick={onAddTask}> + Add Task</button>
    </nav>
  );
};

export default NavigationBar;
