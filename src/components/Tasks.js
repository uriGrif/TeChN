import './Tasks.css';
import { useState, useEffect } from 'react';
import Task from './Task';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger, connectMenu } from "react-contextmenu";
import MyContextMenu from './MyContextMenu';
import CustomBtn from './CustomBtn';
import TaskCreator from './taskCreator';
import TaskDetails from './TaskDetails';
import { getTasks, editTask, deleteTask } from '../utils/tasksHelper'
import { findById, updateItem, removeItem } from '../utils/arraysHelper'


const Tasks = () => {

    const match = useRouteMatch();
    const { prId } = useParams();

    const loadTasks = async () => {
        const tasks = await getTasks(prId)
        setTasks(tasks)
    }

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, [])

    const MENU_TYPE = 'DYNAMIC';

    const ConnectedMenu = connectMenu(MENU_TYPE)(MyContextMenu);

    const handleMenuClick = (e, data, target) => {
        let obj = findById(data.id, tasks);
        if (data.action !== 'Delete') {
            obj.state = data.action;
            setTasks(updateItem(tasks, obj));
            editTask(obj.title, obj.description, obj.state, obj._id)
        }
        else {
            setTasks(removeItem(tasks, data.id));
            deleteTask(obj._id)
        }
    }

    return (
        <div className="contenedor">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <Link to={`${match.url}/create`}>
                        <CustomBtn btnText="Create New +" />
                    </Link>
                </div>
                <div className="col-md-6 col-sm-12 anchors">
                    <a className="linkToSection" href="#toDo">To Do</a>
                    <a className="linkToSection" href="#inProgress">In Progress</a>
                    <a className="linkToSection" href="#done">Done</a>
                </div>
            </div>
            <section id="toDo">
                <h2 className="sectionTitle mt-4">To Do</h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry>
                        {
                            tasks.map((item) => {
                                if (item.state === "To Do") {
                                    return (
                                        <ContextMenuTrigger
                                            id={MENU_TYPE} key={item._id}
                                            collect={() => { return { item: item, case: 1, onItemClick: handleMenuClick } }}
                                        >
                                            <Link to={`${match.url}/${item._id}`}><Task item={item} /> </Link>
                                        </ContextMenuTrigger>
                                    );
                                }
                            })
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </section>
            <section id="inProgress">
                <h2 className="sectionTitle mt-4">In Progress</h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry>
                        {
                            tasks.map((item) => {
                                if (item.state === "In Progress") {
                                    return (
                                        <ContextMenuTrigger
                                            id={MENU_TYPE} key={item._id}
                                            collect={() => { return { item: item, case: 2, onItemClick: handleMenuClick } }}
                                        >
                                            <Link to={`${match.url}/${item._id}`}><Task item={item} /> </Link>
                                        </ContextMenuTrigger>
                                    );
                                }
                            })
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </section>
            <section id="done">
                <h2 className="sectionTitle mt-4">Done</h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry>
                        {
                            tasks.map((item) => {
                                if (item.state === "Done") {
                                    return (
                                        <ContextMenuTrigger
                                            id={MENU_TYPE} key={item._id}
                                            collect={() => { return { item: item, case: 3, onItemClick: handleMenuClick } }}
                                        >
                                            <Link to={`${match.url}/${item._id}`}><Task item={item} /> </Link>
                                        </ContextMenuTrigger>
                                    );
                                }
                            })
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </section>

            <ConnectedMenu className=".react-contextmenu" />
            <Router>
                <Switch>
                    <Route exact path={`${match.path}/create`}><TaskCreator /></Route>
                    <Route path={`${match.path}/:id`}><TaskDetails /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Tasks;