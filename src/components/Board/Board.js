import React, { useState } from "react";
import Stage from "./Stage";


export default function Board({ board }) {
    // Render the board and its content using the fetched data
    console.log(board.stages);
    const [stages, setStages] = useState(board.stages);

    const handleDropTask = (taskId, task_index, sourceStageId, destinationStageId) => {
        // Find the source and destination stage
        const sourceStage = stages.find((stage) => stage.id === sourceStageId);
        const destinationStage = stages.find((stage) => stage.id === destinationStageId)
        
        // Remove the task from source stage
        const task = sourceStage.tasks.splice(task_index, 1)[0];

        // Append the task to destination stage
        destinationStage.tasks.push(task);

        const updatedStages = [...stages]
    
        setStages(updatedStages);
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
                            tasks={stage.tasks}
                            onDropTask={handleDropTask}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
    
}