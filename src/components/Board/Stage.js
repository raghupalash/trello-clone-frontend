import { getTasksByStage } from "../../data/mockData"

export default function Stage({stage}) {
    // Simulate fetching the list of tasks for the current stage
    const tasks = getTasksByStage(stage.id);

    // Here we design a single "stage" containing the stagename and the list of tasks
    return (
        <>
            <strong>{stage.name}</strong>
            {tasks.map(task => (
                <>
                <div className="task">
                    {task.title}
                </div>
                <br></br>
                </>
            ))}
        </>
    )
}