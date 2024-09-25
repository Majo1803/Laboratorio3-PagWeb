import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import FilterableTasksList from './components/FilterableTasksList';
import TaskDetailsView from './components/TaskDetailsView';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';
import './App.css'; // Asegúrate de tener estos estilos

const App = () => {
  const [tasks, setTasks] = useState([]);  // Lista de tareas
  const [selectedTask, setSelectedTask] = useState(null);  // Tarea seleccionada
  const [isAddingTask, setIsAddingTask] = useState(false);  // Estado para mostrar el formulario de agregar
  const [isEditingTask, setIsEditingTask] = useState(false);  // Estado para mostrar el formulario de editar

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

  // Función para iniciar la edición de una tarea
  const startEditingTask = (task) => {
    setSelectedTask(task);  // Establece la tarea a editar
    setIsEditingTask(true); // Muestra el formulario de edición
  };

  // Función para actualizar una tarea
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task))); // Actualiza la tarea en el estado
    setIsEditingTask(false); // Cierra el formulario de edición
    setSelectedTask(null);   // Deselecciona la tarea
  };

  return (
    <div className="app">
      <NavigationBar onAddTask={() => setIsAddingTask(true)} />
      <div className={`content ${isAddingTask || isEditingTask ? 'content-blurred' : ''}`}>
        <FilterableTasksList 
          tasks={tasks}
          onTaskSelect={setSelectedTask}
          onTaskComplete={completeTask}
          onTaskEdit={startEditingTask} // Pasa la función de editar
        />
        {selectedTask && !isEditingTask && (
          <TaskDetailsView 
            task={selectedTask}
            onDelete={deleteTask}
            onEdit={startEditingTask} // Pasa la función de editar
          />
        )}
      </div>
      
      {isAddingTask && (
        <div className="overlay">
          <AddTaskForm onAddTask={addTask} onCancel={() => setIsAddingTask(false)} />
        </div>
      )}

      {isEditingTask && selectedTask && (
        <div className="overlay">
          <EditTaskForm 
            task={selectedTask} 
            onUpdate={updateTask} 
            onCancel={() => setIsEditingTask(false)} 
          />
        </div>
      )}
    </div>
  );
};

export default App;
