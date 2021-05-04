import './Task.css';

const Idea = (props) => {
    return (
        <div className="task">
            <h1 className="taskTitle">{props.item.text}</h1>
        </div>
    )
}

export default Idea;