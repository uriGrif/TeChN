import './Task.css';

const Project = (props) => {
    return (
        <div className="task">
            <h1 className="taskTitle">{props.text}</h1>
        </div>
    )
}

export default Project;