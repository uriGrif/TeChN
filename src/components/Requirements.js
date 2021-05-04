import './Tasks.css';
import { useState, useEffect } from 'react';
import TextEditor from './TextEditor';


const Requirements = () => {

    const getRequirements = async () => {
        try {
            const res = await fetch('http://localhost:3000/data.json');
            const data = await res.json();
            const info = data.Requirements[0].content
            setRequirements(info);
        }
        catch (err) {
            console.log('There has been an error loading the project requirements: ' + err);
        }
    }

    const [requirements, setRequirements] = useState();

    useEffect(() => {
        getRequirements();
    }, [])

    return (
        <div className="contenedor">
            { requirements && <TextEditor content={requirements} /> }
            { !requirements && <p>Loading project Use Cases</p>}
        </div>        
    )
}

export default Requirements;