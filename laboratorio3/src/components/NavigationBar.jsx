// src/components/NavigationBar.js
import React from 'react';
import '../App.css';

const NavigationBar = ({ onAddTask }) => {
  return (
    <nav className="navbar">
      <h1>To-Do List</h1>
      <button onClick={onAddTask}>Agregar Tarea</button>
    </nav>
  );
};

export default NavigationBar;
