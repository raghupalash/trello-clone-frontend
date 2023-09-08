import React, { useState } from "react";
import Stage from "../Stage/Stage";
import "./Board.css";

export default function Board({ board }) {
    // Render the board and its content using the fetched data
    const [stages, setStages] = useState(board.stages);

    const handleDropTask = (taskId, taskIndex, sourceStageId, destinationStageId, dropIndex) => {
        // Find the source and destination stage
        const sourceStage = stages.find((stage) => stage.id === sourceStageId);
        const destinationStage = stages.find((stage) => stage.id === destinationStageId)
        
        // Remove the task from source stage
        const task = sourceStage.tasks.splice(taskIndex, 1)[0];

        // Append the task to destination stage
        if (dropIndex != null) {
            destinationStage.tasks.splice(dropIndex, 0, task);
        } else {
            destinationStage.tasks.push(task);
        }

        const updatedStages = [...stages]
    
        setStages(updatedStages);
    };

    return (
        <div className="board container-fluid">
            <h2 className="board-header">{board.name}</h2>
            <hr></hr>
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