// src/App.js
import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import FilterableTasksList from './components/FilterableTasksList';
import TaskDetailsView from './components/TaskDetailsView';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);  // Lista de tareas
  const [selectedTask, setSelectedTask] = useState(null);  // Tarea seleccionada
  const [isAddingTask, setIsAddingTask] = useState(false);  // Estado para mostrar el formulario de agregar

  // Función para agregar una nueva tarea
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);  // Agrega la nueva tarea al estado de las tareas
    setIsAddingTask(false);  // Oculta el formulario después de agregar la tarea
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));  // Elimina la tarea seleccionada por ID
    setSelectedTask(null);  // Deselecciona la tarea si estaba visible
  };

  // Función para marcar una tarea como completada o pendiente
  const completeTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app">
      <NavigationBar onAddTask={() => setIsAddingTask(true)} />
      <div className="content">
        {isAddingTask ? (
          <AddTaskForm onAddTask={addTask} onCancel={() => setIsAddingTask(false)} />
        ) : (
          <>
            <FilterableTasksList 
              tasks={tasks}
              onTaskSelect={setSelectedTask}
              onTaskComplete={completeTask}
            />
            {selectedTask && (
              <TaskDetailsView 
                task={selectedTask}
                onDelete={deleteTask}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
