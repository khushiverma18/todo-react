

// Step 2: App.js
import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Load tasks from local storage on initial render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const savedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setTasks(savedTasks);
    setCompletedTasks(savedCompletedTasks);
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const completeTask = (taskId) => {
    const taskToComplete = tasks.find((task) => task.id === taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
    setCompletedTasks([...completedTasks, taskToComplete]);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h1>DoIt</h1>
        <img src="/pic.jpg" alt="Profile" />
        <p>Hey,Khushi</p>
        <ul>
          <li>All Tasks</li>
          <li>Today</li>
          <li>Important</li>
          <li>Planned</li>
          <li>Assigned to me</li>
        </ul>
        <div className="chart-container">
          <h3>Today Tasks</h3>
          <div className="chart"></div>
        </div>
      </div>
      <div className="task-container">
        <TaskInput addTask={addTask} />
        <div className="task-section">
          <h2>Pending Tasks</h2>
          <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
        </div>
        <div className="task-section">
          <h2>Completed Tasks</h2>
          <TaskList tasks={completedTasks} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;