import './Tasks.css';
import { useState, useEffect } from 'react';
import TextEditor from './TextEditor';


const UseCases = () => {

    const getUseCases = async () => {
        try {
            const res = await fetch('http://localhost:3000/data.json');
            const data = await res.json();
            const info = data.UseCases[0].content
            setUseCases(info);
        }
        catch (err) {
            console.log('There has been an error loading the project Use Cases: ' + err);
        }
    }

    const [useCases, setUseCases] = useState();

    useEffect(() => {
        getUseCases();
    }, [])

    return (
        <div className="contenedor">
            { useCases && <TextEditor content={useCases} /> }
            { !useCases && <p>Loading project Use Cases</p>}
        </div>        
    )
}

export default UseCases;