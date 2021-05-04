import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import CustomBtn from './CustomBtn'

const ProjectCreator = () => {

    const history = useHistory();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescChange = (e) => {
        setDescription(e.target.value);
    }

    const handleClickCreate = (e) => {
        if (name.length > 0 && description.length > 0) {
            //addTaskToDataBase(title, task)
            history.goBack();
        }
        else {
            alert("Debes introducir un nombre y una descripcion a tu proyecto");
            e.preventDefault();
        }
    }

    return (
        <div style={{width: "80vw", margin: "10vh auto"}}>
            <div className="contenedor">

                <h1 className="title">Create a new Project</h1>
                <h2 className="subTitle">Name it:</h2>
                <input type="text" className="inputField inputTitle" onChange={handleNameChange} />
                <h2 className="subTitle">Add a brief description:</h2>
                <textarea onChange={handleDescChange} className="inputField inputDesc" /><br />

                <CustomBtn btnText="Cancel" handleClick={() => history.goBack()} />
                <CustomBtn btnText="Create" handleClick={handleClickCreate} />
            </div>
        </div>
    )
}

export default ProjectCreator