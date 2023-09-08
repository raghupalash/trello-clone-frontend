import { useDrop } from "react-dnd";
import { getTasksByStage } from "../../data/mockData";
import Task from "./Task";

export default function Stage({ stage, tasks, onDropTask }) {
    // Here we design a single "stage" containing the stagename and the list of tasks
    const [, ref] = useDrop({
        accept: 'TASK',
        drop: (draggedItem) => onDropTask(
            draggedItem.id, draggedItem.task_index, draggedItem.stage_id, stage.id
        ),
      });

    return (
        <div ref={ref} className="stage">
            <strong>{stage.name}</strong>
            {tasks.map((task, index) => (
                <Task key={task.id} task={task} task_index={index} stage_id={stage.id} />
            ))}
        </div>
    )
}