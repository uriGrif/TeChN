import './Tasks.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextEditor from './TextEditor';
import { getText } from '../utils/textHelper'


const Information = () => {

    const { prId } = useParams();

    const getInformation = async () => {
        const obj = await getText("information", prId)
        setInfoText(obj.text)
        setInfoId(obj.textId)
    }

    const [infoText, setInfoText] = useState();
    const [infoId, setInfoId] = useState()

    useEffect(() => {
        getInformation();
    }, [])

    return (
        <div className="contenedor">
            { infoText && <TextEditor content={infoText} type="information" textId={infoId} /> }
            { !infoText && <p>Loading project information</p>}
        </div>
    )
}

export default Information;