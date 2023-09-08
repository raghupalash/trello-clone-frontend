// DraggableTask.js
import React from 'react';
import { useDrag } from 'react-dnd';

export default function Task({ task, task_index, stage_id }) {
  const [, ref] = useDrag({
    type: 'TASK',
    item: { id: task.id, task_index, stage_id },
  });

  return (
    <div ref={ref} className="task">
      {task.title}
    </div>
  );
};
