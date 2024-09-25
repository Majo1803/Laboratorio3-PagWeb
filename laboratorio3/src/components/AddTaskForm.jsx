// src/components/AddTaskForm.js
import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verificar que el título no esté vacío
    if (title.trim() === '') {
      alert("El título es obligatorio");
      return;
    }

    // Crear una nueva tarea con un ID único
    const newTask = {
      id: Date.now(),  // Crea un ID único basado en el tiempo actual
      title,
      description,
      completed: false,
      created_at: new Date().toLocaleDateString(),
    };

    onAddTask(newTask);  // Llama a la función pasada por props para agregar la tarea
    setTitle('');  // Limpia el formulario
    setDescription('');
  };

  return (
    <div className="add-task-form">
      <h2>Agregar Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          <button type="submit">Agregar</button>
          <button type="button" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
