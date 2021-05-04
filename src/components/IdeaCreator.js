import './taskCreator.css';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CustomBtn from './CustomBtn'

const IdeaCreator = (props) => {

    const history = useHistory();

    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleClickCreate = (e) => {
        if (text.length > 0) {
            //addTaskToDataBase(title, task)
            history.goBack();
        }
        else {
            alert("Debes introducir una idea, no la dejes vacia");
            e.preventDefault();
        }
    }

    return (
        <div className="contenedor">

            <h1 className="title">Add an idea</h1>
            <h2 className="subTitle">write it down:</h2>
            <input type="text" className="inputField inputTitle" onChange={handleChange} />

            <CustomBtn btnText="Cancel" handleClick={() => history.goBack()} />
            <CustomBtn btnText="Create" handleClick={handleClickCreate} />
        </div>
    )
}

export default IdeaCreator;