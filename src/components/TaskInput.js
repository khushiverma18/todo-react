import React, { useState } from 'react';
import { FaBell, FaCalendarAlt, FaUser } from 'react-icons/fa';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      addTask({ id: Date.now(), text: task });
      setTask('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add A Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <div className="task-icons">
        <FaBell />
        <FaCalendarAlt />
        <FaUser />
      </div>
    </div>
  );
}

export default TaskInput;