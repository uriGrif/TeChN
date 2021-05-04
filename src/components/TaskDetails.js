import './TaskDetails.css';
import { useParams, Link, useRouteMatch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';
import CustomBtn from './CustomBtn';


const TaskDetails = () => {

    let taskId = useParams().id;
    const thisUrl = useRouteMatch().url;
    const history = useHistory();

    const getTask = async () => {
        try {
            const res = await fetch('http://localhost:3000/data.json');
            const data = await res.json();
            var tasks = data.Tasks;
            var myTask = tasks.find(element => element.id == taskId);
            setTask(myTask);
            inicializarStates(myTask);
        }
        catch (err) {
            console.error('There has been an error loading the task: ' + err);
        }
    }

    const [task, setTask] = useState({});

    const [mode, setMode] = useState("view");

    const [taskTitle, setTaskTitle] = useState("");

    const [taskDesc, setTaskDesc] = useState("");

    const [taskState, setTaskState] = useState("");

    useEffect(() => {
        getTask();
    }, [])

    const inicializarStates = (tarea) => {
        setTaskTitle(tarea.name);
        setTaskDesc(tarea.description);
        setTaskState(tarea.state);
    }

    const handleDeleteClick = () => {
        //eliminar
    }

    const handleTaskTitleChange = (e) => {
        setTaskTitle(e.target.value);
    }

    const handleTaskDescChange = (e) => {
        setTaskDesc(e.target.value);
    }

    const handleTaskStateChange = (e) => {
        setTaskState(e.target.value);
    }

    const isRadioChecked = (val) => {
        if (val === taskState) {
            return true;
        }
        else {
            return false;
        }
    }

    const handleClickEditTask = () => {
        //editar
        window.location.reload(false);
    }

    return (

        <div className="contenedor">
            <button className="mybtn" onClick={() => history.goBack()}>
                <IconContext.Provider value={{ color: "#EEEEEE", size: "2em" }}>
                    <BiArrowBack />
                </IconContext.Provider>
            </button>
            {mode && mode === "view" &&
                <div>
                    <h1 className="title">{task.name}</h1>
                    <p className="description">{task.description}</p>
                    <label className="statusTitle">Status:</label>
                    <label className="status">{task.state}</label>
                    <div className="botones">
                        <button className="mybtn" onClick={handleDeleteClick}>
                            <IconContext.Provider value={{ color: "#EEEEEE", size: "2em" }}>
                                <AiOutlineDelete />
                            </IconContext.Provider>
                        </button>
                        <button className="mybtn" onClick={() => setMode("edit")}>
                            <IconContext.Provider value={{ color: "#EEEEEE", size: "2em" }}>
                                <FiEdit />
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>
            }
            {mode && mode === "edit" &&
                <div>
                    <h1 className="title">Update your task</h1>

                    <h2 className="subTitle">Title:</h2>
                    <input type="text" className="inputField inputTitle" value={taskTitle} onChange={handleTaskTitleChange} />

                    <h2 className="subTitle">Description:</h2>
                    <textarea className="inputField inputDesc" value={taskDesc} onChange={handleTaskDescChange} />

                    <h2 className="subTitle">State:</h2>
                    <div onChange={handleTaskStateChange}>
                        <input type="radio" name="state" value="To Do" defaultChecked={isRadioChecked("To Do")} />
                        <label className="lblState">To Do</label><br />

                        <input type="radio" name="state" value="In Progress" defaultChecked={isRadioChecked("In Progress")} />
                        <label className="lblState">In Progress</label> <br />

                        <input type="radio" name="state" value="Done" defaultChecked={isRadioChecked("Done")} />
                        <label className="lblState">Done</label>
                    </div>
                    <div className="botones">
                        <CustomBtn btnText="Cancel" handleClick={() => setMode("view")} />
                        <Link to={thisUrl} onClick={handleClickEditTask}>
                            <CustomBtn btnText="Update Task" />
                        </Link>
                    </div>

                </div>
            }
        </div>

    )
}

export default TaskDetails;