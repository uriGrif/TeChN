import './taskCreator.css';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CustomBtn from './CustomBtn'

const TaskCreator = (props) => {

    const history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescChange = (e) => {
        setDescription(e.target.value);
    }

    const handleClickCreate = (e) => {
        if (title.length > 0 && description.length > 0) {
            //addTaskToDataBase(title, task)
            console.log("Task Created - Title: " + title);
            history.goBack();
        }
        else {
            alert("Debes introducir un titulo y una descripcion a tu tarea");
            e.preventDefault();
        }
    }

    return (
        <div className="contenedor">

            <h1 className="title">Create a new Task</h1>
            <h2 className="subTitle">Add a title:</h2>
            <input type="text" className="inputField inputTitle" onChange={handleTitleChange} />
            <h2 className="subTitle">Add a description:</h2>
            <textarea onChange={handleDescChange} className="inputField inputDesc" /><br />

            <CustomBtn btnText="Cancel" handleClick={() => history.goBack()} />
            <CustomBtn btnText="Create" handleClick={handleClickCreate} />
        </div>
    )
}

export default TaskCreator;