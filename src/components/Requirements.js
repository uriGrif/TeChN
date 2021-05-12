import './Tasks.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import TextEditor from './TextEditor';
import { getText } from '../utils/textHelper'

const Requirements = () => {

    const { prId } = useParams();

    const getRequirements = async () => {
        const obj = await getText("requirements", prId)
        setRequirements(obj.text)
        setReqsId(obj.textId)
    }

    const [requirements, setRequirements] = useState();
    const [reqsId, setReqsId] = useState()

    useEffect(() => {
        getRequirements();
    }, [])

    return (
        <div className="contenedor">
            { requirements && <TextEditor content={requirements} type="requirements" textId={reqsId}/> }
            { !requirements && <p>Loading project requirements</p>}
        </div>        
    )
}

export default Requirements;