import './Tasks.css';
import { useState, useEffect } from 'react';
import Task from './Task';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger, connectMenu } from "react-contextmenu";
import MyContextMenu from './MyContextMenu';
import { generateId, addTodo, findById, updateTodo, removeTodo } from '../lib/tasksHelper';
import CustomBtn from './CustomBtn';
import TaskCreator from './taskCreator';
import TaskDetails from './TaskDetails';


const Tasks = () => {

    const match = useRouteMatch();

    const loadTasks = async () => {
        try {
            const res = await fetch('http://localhost:3000/data.json');
            const data = await res.json();
            setTasks(data.Tasks);
        }
        catch (err) {
            console.log('There has been an error loading the tasks: ' + err);
        }
    }

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, [])

    const MENU_TYPE = 'DYNAMIC';

    const ConnectedMenu = connectMenu(MENU_TYPE)(MyContextMenu);

    const handleMenuClick = (e, data, target) => {
        // console.log(data.action);
        // console.log(data.id);
        let obj = findById(data.id, tasks);
        if (data.action !== 'Delete') {
            obj.state = data.action;
            setTasks(updateTodo(tasks, obj));
        }
        else {
            setTasks(removeTodo(tasks, data.id));
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
                                            id={MENU_TYPE} key={item.id}
                                            collect={() => { return { item: item, case: 1, onItemClick: handleMenuClick } }}
                                        >
                                            <Link to={`${match.url}/${item.id}`}><Task item={item} /> </Link>
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
                                            id={MENU_TYPE} key={item.id}
                                            collect={() => { return { item: item, case: 2, onItemClick: handleMenuClick } }}
                                        >
                                            <Link to={`${match.url}/${item.id}`}><Task item={item} /> </Link>
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
                                            id={MENU_TYPE} key={item.id}
                                            collect={() => { return { item: item, case: 3, onItemClick: handleMenuClick } }}
                                        >
                                            <Link to={`${match.url}/${item.id}`}><Task item={item} /> </Link>
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