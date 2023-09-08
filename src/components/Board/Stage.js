import { useDrop } from "react-dnd";
import { getTasksByStage } from "../../data/mockData";
import Task from "./Task";

export default function Stage({ stage, tasks, onDropTask }) {
    // Here we design a single "stage" containing the stagename and the list of tasks
    const [, ref] = useDrop({
        accept: 'TASK',
        drop: (draggedItem) => onDropTask(draggedItem.id, stage.id),
      });

    return (
        <div ref={ref} className="stage">
            <strong>{stage.name}</strong>
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}