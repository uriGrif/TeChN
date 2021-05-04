import { useState, useEffect } from 'react'
import './ProjectDashboard.css';
import Tasks from './Tasks';
import TaskDetails from './TaskDetails';
import TaskCreator from './taskCreator';
import Ideas from './Ideas';
import { BrowserRouter as Router, Switch, Route, NavLink, useRouteMatch, useParams, useLocation, Link } from 'react-router-dom';
import IdeaCreator from './IdeaCreator';
import Information from './Information';
import UseCases from './UseCases';
import Requirements from './Requirements';


const ProjectDashboard = () => {

    const match = useRouteMatch();
    let { prName, projectId }  = useParams();

    return (
        <Router>
            <div className="project">
                <div className="titlePanel">
                    <h1 className="projectName">{prName}</h1>
                </div>
                <div className="linkList">
                    <NavLink to={`${match.url}/information`} activeClassName="selected">Information</NavLink>
                    <NavLink to={`${match.url}/tasks`} activeClassName="selected">Tasks</NavLink>
                    <NavLink to={`${match.url}/useCases`} activeClassName="selected">Use Cases</NavLink>
                    <NavLink to={`${match.url}/requirements`} activeClassName="selected">Requirements</NavLink>
                    <NavLink to={`${match.url}/ideas`} activeClassName="selected">Ideas</NavLink>
                </div>
                <Switch>
                    <Route exact path={match.path}><Information /></Route>
                    <Route exact path={`${match.path}/tasks`}><Tasks /></Route>
                    <Route exact path={`${match.path}/tasks/create`}><TaskCreator /></Route>
                    <Route path={`${match.path}/tasks/:id`}><TaskDetails /></Route>
                    <Route exact path={`${match.path}/ideas`}><Ideas /></Route>
                    <Route path={`${match.path}/ideas/create`}><IdeaCreator /></Route>
                    <Route path={`${match.path}/information`}><Information /></Route>
                    <Route path={`${match.path}/useCases`}><UseCases /></Route>
                    <Route path={`${match.path}/requirements`}><Requirements /></Route>
                </Switch>

            </div>
        </Router>
    )
}

export default ProjectDashboard;