// DraggableTask.js
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableTask = ({ task }) => {
  const [, ref] = useDrag({
    type: 'TASK',
    item: { id: task.id },
  });

  return (
    <div ref={ref} className="task">
      {task.title}
    </div>
  );
};

export default DraggableTask;
