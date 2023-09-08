import { useDrop } from "react-dnd";
import { useState } from "react";
import Task from "../Task/Task";
import "./Stage.css";

export default function Stage({ stage, tasks, onDropTask }) {
    const [hoveredTaskIndex, setHoveredTaskIndex] = useState(null);

    const [, ref] = useDrop({
        accept: 'TASK',
        drop: (draggedItem) => onDropTask(
            draggedItem.id, 
            draggedItem.taskIndex, 
            draggedItem.stageId, 
            stage.id, 
            hoveredTaskIndex,
        ),
      });

    return (
        <div ref={ref} className="stage">
            <strong>{stage.name}</strong>
            <hr></hr>
            {tasks.map((task, index) => (
                <Task 
                    key={task.id} 
                    task={task} 
                    taskIndex={index} 
                    stageId={stage.id}
                    onHover={() => setHoveredTaskIndex(index)} 
                />
            ))}
        </div>
    )
}