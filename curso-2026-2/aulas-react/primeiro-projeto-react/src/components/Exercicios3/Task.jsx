const Task = ({ title, completed }) => {
    return(
        <li className="m-1 p-2 bg-white border-blue-400 hover:bg-amber-200 text-black">
            {title} - {completed ? "concluido" : "pendente"}
        </li>
    )
}

export default Task;