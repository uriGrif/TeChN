import './Tasks.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import TextEditor from './TextEditor';
import { getText } from '../utils/textHelper'

const UseCases = () => {

    const { prId } = useParams();

    const getUseCases = async () => {
        const obj = await getText("useCases", prId)
        setUseCases(obj.text)
        setCasesId(obj.textId)
    }

    const [useCases, setUseCases] = useState();
    const [casesId, setCasesId] = useState()

    useEffect(() => {
        getUseCases();
    }, [])

    return (
        <div className="contenedor">
            { useCases && <TextEditor content={useCases} type="useCases" textId={casesId}/> }
            { !useCases && <p>Loading project Use Cases</p>}
        </div>        
    )
}

export default UseCases;