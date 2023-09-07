import React from "react";
import Stage from "./Stage";
import { getBoardsByUser, getStagesByBoard } from "../../data/mockData";

export default function Board() {
    // Extract data for the current board from mock data
    const userId = 1;
    const boards = getBoardsByUser(userId);

    // For demonstration purpose, let's assume we want to display the last board created by the user
    const currentBoard = boards[boards.length - 1];

    // Simulate fetching the list of stages for the current board
    const stages = getStagesByBoard(currentBoard.id);

    // Render the board and its content using the fetched data
    return (
        <div className="board">
            <h2>{currentBoard.name}</h2>
            <div className="stage-list">
                {stages.map((stage) => (
                    <div>{stage.id} {stage.name}</div>
                ))}
            </div>
        </div>
    )
    
}