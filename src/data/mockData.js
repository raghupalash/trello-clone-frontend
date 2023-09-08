// mockData.js

const mockData = {
  users: [{ id: 1, name: 'User 1' }],
  boards: [
    {
      id: 1,
      name: 'Board 1',
      stages: [
        { id: 1, name: 'Resources', tasks: [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }] },
        { id: 2, name: 'Todo', tasks: [{ id: 3, title: 'Task 3' }, { id: 4, title: 'Task 4' }] },
        { id: 3, name: 'Doing', tasks: [{ id: 5, title: 'Task 5' }, { id: 6, title: 'Task 6' }] },
        { id: 4, name: 'Done', tasks: [{ id: 7, title: 'Task 7' }, { id: 8, title: 'Task 8' }] },
      ],
    },
  ],
};


// Mock function to get boards created by a user based on user ID
export function getBoardsByUser(userId) {
    return mockData.boards.filter((board) => board.id === userId);
}

  
export default mockData;
  