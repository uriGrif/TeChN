import './Tasks.css';
import { useState, useEffect } from 'react';
import TextEditor from './TextEditor';


const Information = () => {

    const getInformation = async () => {
        try {
            const res = await fetch('http://localhost:3000/data.json');
            const data = await res.json();
            const info = data.Information[0].content
            setInfoText(info);
        }
        catch (err) {
            console.log('There has been an error loading the project Information: ' + err);
        }
    }

    const [infoText, setInfoText] = useState();

    useEffect(() => {
        getInformation();
    }, [])

    return (
        <div className="contenedor">
            { infoText && <TextEditor content={infoText} /> }
            { !infoText && <p>Loading project information</p>}
        </div>        
    )
}

export default Information;