import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, completeTask } from '../../redux/actions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <p>{task.description}</p>
        <p>Due: {task.dueDate}</p>
        <p>Priority: {task.priority}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => dispatch(completeTask(task.id))}
          className={`p-2 rounded ${task.completed ? 'bg-green-500' : 'bg-gray-500'} text-white`}
        >
          {task.completed ? 'Completed' : 'Complete'}
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="p-2 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
