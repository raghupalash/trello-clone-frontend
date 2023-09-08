# Trello-Clone-Frontend

## How to Run
Install the required dependencies
```bash
npm i
```
Run the project in development mode
```bash
npm start
```

## Questions:
**1. If a user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed**
- Table
    - A stage table would be required to store the id and name of the stage - name can be updated as per user requirements. Stage would also need a foreign key that connects it to the task table.

- Api endpoint
    - Create Stage: We would need an API endpoint to allow users to create a new stage for a specific board. This endpoint should accept the board_id and the name of the new stage.

    - Update Stage: Users should be able to edit the name of an existing stage for a board. We'll need an API endpoint to handle stage updates.

**2. If users can comment on tasks**
- Table:
    - We would need to create a table that can store comments with links(through forien keys) to the user
table and the task table.
```sql
CREATE TABLE task_comments (
  id SERIAL PRIMARY KEY,
  task_id INT REFERENCES tasks(id),
  user_id INT REFERENCES users(id),
  comment_text TEXT,
  created_at TIMESTAMP
);
```
- Api endpoints
    - Create Comment: We would need to implement an API endpoint that allows users to create comments on tasks. The endpoint should accept the task_id, user_id, and comment_text.
    - Fetch Comments: We would need to create an API endpoint to retrieve comments for a specific task.

**3. How will you do error handling?**
- HTTP Status Codes: Ensure that our API endpoints return appropriate HTTP status codes to indicate the success or failure of a request. For example, we would use 200 for success, 201 for resource creation, 400 for client errors (e.g., invalid input), and 500 for server errors.

- Validation: We would need to implement input validation to prevent invalid data from reaching the database. For example,we can validate that the stage name or comment text meets the required criteria.
