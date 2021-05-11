import './Tasks.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextEditor from './TextEditor';


const Information = () => {

    const { prId } = useParams();

    const getInformation = async () => {
        try {
            const res = await fetch(`http://localhost:8000/information/get/${prId}`);
            const data = await res.json();
            const blocks = data[0].content.blocks
            if (!data[0].content.entityMap){
                var info = { blocks: blocks, entityMap: {} }
            }
            else{
                var info = { data }
            }
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