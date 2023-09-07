// mockData.js

const mockData = {
    users: [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
      },
      {
        id: 3,
        name: "Palash",
        email: "xoxo@gmail.com"
      }
      // Additional users...
    ],
    boards: [
      {
        id: 1,
        name: "Project A",
        userId: 1,
      },
      {
        id: 2,
        name: "Project B",
        userId: 2,
      },
      // Additional boards...
    ],
    stages: [
      {
        id: 0,
        name: "Resources",
        boardId: 1,
      },
      {
        id: 1,
        name: "To Do",
        boardId: 1,
      },
      {
        id: 2,
        name: "In Progress",
        boardId: 1,
      },
      {
        id: 3,
        name: "Done",
        boardId: 1,
      },
      // Additional stages...
    ],
    tasks: [
      {
        id: 1,
        title: "Task 1",
        description: "Description for Task 1",
        stageId: 1,
      },
      {
        id: 2,
        title: "Task 2",
        description: "Description for Task 2",
        stageId: 2,
      },
      {
        id: 3,
        title: "Task 3",
        description: "Description for Task 3",
        stageId: 1,
      },
      // Additional tasks...
    ],
  };


// Mock function to get boards created by a user based on user ID
export function getBoardsByUser(userId) {
    return mockData.boards.filter((board) => board.userId === userId);
}
  
// Mock function to get the list of stages for a given board ID
export function getStagesByBoard(boardId) {
    return mockData.stages.filter((stage) => stage.boardId === boardId);
}
  
// Mock function to get tasks for a given stage ID
export function getTasksByStage(stageId) {
    return mockData.tasks.filter((task) => task.stageId === stageId);
}
  
  
export default mockData;
  