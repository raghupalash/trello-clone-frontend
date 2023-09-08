// DraggableTask.js
import React from 'react';
import { useDrag } from 'react-dnd';
import "./Task.css"

export default function Task({ task, taskIndex, stageId, onHover }) {
  const [, ref] = useDrag({
    type: 'TASK',
    item: { id: task.id, taskIndex, stageId },
  });

  return (
    <div 
      ref={ref} 
      className="task"
      onDragOver={() => onHover()}  
    >
      {task.title}
    </div>
  );
};
