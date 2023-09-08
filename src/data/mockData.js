// mockData.js

const mockData = {
  boards: [
    {
      id: 1,
      name: 'Project Board',
      userId: 1, // User 1 is the owner of this board
      stages: [
        { id: 'stage-0', name: 'Resources' },
        { id: 'stage-1', name: 'To Do' },
        { id: 'stage-2', name: 'In Progress' },
        { id: 'stage-3', name: 'Done' },
      ],
      tasks: [
        { id: 'task-1', title: 'Task 1', stageId: 'stage-1' },
        { id: 'task-2', title: 'Task 2', stageId: 'stage-1' },
        { id: 'task-3', title: 'Task 3', stageId: 'stage-2' },
        { id: 'task-4', title: 'Task 4', stageId: 'stage-3' },
        { id: 'task-5', title: 'Task 5', stageId: 'stage-0' },
        { id: 'task-6', title: 'Task 6', stageId: 'stage-0' },
        { id: 'task-7', title: 'Task 7', stageId: 'stage-1' },
        { id: 'task-8', title: 'Task 8', stageId: 'stage-1' },
        { id: 'task-9', title: 'Task 9', stageId: 'stage-2' },
        { id: 'task-10', title: 'Task 10', stageId: 'stage-2' },
        { id: 'task-11', title: 'Task 11', stageId: 'stage-3' },
        { id: 'task-12', title: 'Task 12', stageId: 'stage-3' },
      ],
    },
  ],
};


// Mock function to get boards created by a user based on user ID
export function getBoardsByUser(userId) {
    return mockData.boards.filter((board) => board.userId === userId);
}

  
export default mockData;
  