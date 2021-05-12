import './Task.css';

const Task = (props) => {
    return (
        <div className="task">
            <h1 className="taskTitle">{props.item.title}</h1>
        </div>
    )
}

export default Task;