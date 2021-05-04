import { useState, useEffect } from 'react';
import './ProjectDashboard.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../App.css';
import CustomBtn from './CustomBtn';
import Project from './Project';


const Projects = () => {

    const getProjects = async () => {
        try {
            const res = await fetch('http://localhost:3000/data.json');
            const data = await res.json();
            var projs = data.Projects;
            setProjects(projs);
        }
        catch (err) {
            console.error('There has been an error loading the task: ' + err);
        }
    }

    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects();
    }, [])

    return (
        <div className="project">
            <div className="titlePanel">
                <h1 className="projectName">Projects</h1>
            </div>
            <div className="contenedor" style={{ minHeight: "50vh" }}>
                <Link to="/new-project">
                    <CustomBtn btnText="Add new project" />
                </Link>
                {
                    projects.map((item) => {
                        return (
                            <Link key={item.prId} to={`/project/${item.name}/${item.prId}/information`} >
                                <Project text={item.name}></Project>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Projects;