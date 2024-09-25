
import React, { useState, useEffect } from 'react';

const EditTaskForm = ({ task, onUpdate, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Use useEffect to set initial values when the task changes
  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que el título no esté vacío
    if (title.trim() === '') {
      alert("El título es obligatorio");
      return;
    }

    // Crear una nueva tarea con los datos actualizados
    const updatedTask = {
      ...task,
      title,
      description,
    };

    onUpdate(updatedTask); // Llama a la función para actualizar la tarea
  };

  return (
    <div className="add-task-form">
      <h2>Edit Task</h2>
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
          <button type="submit">Update Task</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskForm;
