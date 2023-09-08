import { getTasksByStage } from "../../data/mockData"

export default function Stage({ stage, tasks }) {
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