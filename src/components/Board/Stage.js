import { useDrop } from "react-dnd";
import { useState } from "react";
import { getTasksByStage } from "../../data/mockData";
import Task from "./Task";

export default function Stage({ stage, tasks, onDropTask }) {
    const [hoveredTaskIndex, setHoveredTaskIndex] = useState(null);

    const [, ref] = useDrop({
        accept: 'TASK',
        drop: (draggedItem) => onDropTask(
            draggedItem.id, 
            draggedItem.task_index, 
            draggedItem.stage_id, 
            stage.id, 
            hoveredTaskIndex,
        ),
      });

    return (
        <div ref={ref} className="stage">
            <div className="stagename">{stage.name}</div>
            {tasks.map((task, index) => (
                <Task 
                    key={task.id} 
                    task={task} 
                    task_index={index} 
                    stage_id={stage.id}
                    onHover={() => setHoveredTaskIndex(index)} 
                />
            ))}
        </div>
    )
}