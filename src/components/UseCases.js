import './Tasks.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import TextEditor from './TextEditor';


const UseCases = () => {

    const { prId } = useParams();

    const getUseCases = async () => {
        try {
            const res = await fetch(`http://localhost:8000/requirements/get/${prId}`);
            const data = await res.json();
            const blocks = data[0].content.blocks
            if (!data[0].content.entityMap){
                var cases = { blocks: blocks, entityMap: {} }
            }
            else{
                var cases = { data }
            }
            setUseCases(cases);
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