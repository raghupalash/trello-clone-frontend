import React from "react";
import Stage from "./Stage";
import { getBoardsByUser, getStagesByBoard } from "../../data/mockData";

export default function Board({ board }) {
    // Render the board and its content using the fetched data
    const tasks = board.tasks // temporary
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
                        />
                    </div>
                ))}
            </div>
        </div>
    )
    
}