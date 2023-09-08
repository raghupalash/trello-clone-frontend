import React, { useState } from "react";
import Stage from "./Stage";


export default function Board({ board }) {
    // Render the board and its content using the fetched data
    const [tasks, setTasks] = useState(board.tasks);

    const handleDropTask = (taskId, destinationStageId) => {
        // Find the task that was dragged
        const draggedTask = tasks.find((task) => task.id === taskId);
    
        // Update the stage ID of the dragged task
        draggedTask.stageId = destinationStageId;
    
        // Update the tasks in the state to reflect the new order
        const updatedTasks = tasks.map((task) =>
          task.id === taskId ? draggedTask : task
        );
    
        setTasks(updatedTasks);
    };

    return (
        <div className="board container-fluid">
            <h2>{board.name}</h2>
            <div className="stage-list row">
                {board.stages.map((stage) => (
                    <div className="col">
                        <Stage 
                            key={stage.id} 
                            stage={stage}
                            tasks={tasks.filter((task) => task.stageId === stage.id)}
                            onDropTask={handleDropTask}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
    
}