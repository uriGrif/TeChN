import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import CustomBtn from './CustomBtn'
import { AddProject } from '../utils/projectsHelper';

const ProjectCreator = () => {

    const history = useHistory();

    const [name, setName] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleClickCreate = (e) => {
        if (name.length > 0) {
            AddProject(name)
            history.goBack();
        }
        else {
            alert("Debes darle un nombre a tu proyecto");
            e.preventDefault();
        }
    }

    return (
        <div style={{ width: "80vw", margin: "10vh auto" }}>
            <div className="contenedor">

                <h1 className="title">Create a new Project</h1>
                <h2 className="subTitle">Name it:</h2>
                <input type="text" className="inputField inputTitle" onChange={handleNameChange} />

                <CustomBtn btnText="Cancel" handleClick={() => history.goBack()} />
                <CustomBtn btnText="Create" handleClick={handleClickCreate} />
            </div>
        </div>
    )
}

export default ProjectCreator