import './Tasks.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import TextEditor from './TextEditor';


const Requirements = () => {

    const { prId } = useParams();

    const getRequirements = async () => {
        try {
            const res = await fetch(`http://localhost:8000/requirements/get/${prId}`);
            const data = await res.json();
            const blocks = data[0].content.blocks
            if (!data[0].content.entityMap){
                var reqs = { blocks: blocks, entityMap: {} }
            }
            else{
                var reqs = { data }
            }
            setRequirements(reqs);
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
            { !requirements && <p>Loading project requirements</p>}
        </div>        
    )
}

export default Requirements;