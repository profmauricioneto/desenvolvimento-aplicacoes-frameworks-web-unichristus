import Task from "./Task";

const TaskList = () => {
    const tasks = [
      { title: 'Estudar JavaScript', completed: true },
      { title: 'Estudar TailwindCSS', completed: true },
      { title: 'Estudar React', completed: false },
      { title: 'Estudar NodeJS', completed: false },
      { title: 'Estudar Express', completed: false },
    ];
    
    return(
        <main>
            <ul>
                {tasks.map((task, index) => (
                    <Task key={index} title={task.title} completed={task.completed} />
                ))}
            </ul>
        </main>
    )
}

export default TaskList;