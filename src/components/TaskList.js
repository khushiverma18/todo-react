import React from 'react';
import { FaStar } from 'react-icons/fa';

function TaskList({ tasks, deleteTask, completeTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <span>{task.text}</span>
          <div className="task-actions">
            {completeTask && <button onClick={() => completeTask(task.id)}>Complete</button>}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <FaStar className="task-star" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;