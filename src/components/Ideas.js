import Idea from './Idea';
import { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link, useRouteMatch } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger, connectMenu } from "react-contextmenu";
import MyContextMenu from './MyContextMenu';
import CustomBtn from './CustomBtn';
import { removeItem } from '../utils/arraysHelper'


const Ideas = () => {

    const match = useRouteMatch();

    const loadIdeas = async () => {
        try {
            const res = await fetch('http://localhost:3000/data.json');
            const data = await res.json();
            setIdeas(data.Ideas);
        }
        catch (err) {
            console.log('There has been an error loading the ideas: ' + err);
        }
    }

    const [ideas, setIdeas] = useState([]);

    useEffect(() => {
        loadIdeas();
    }, [])

    const MENU_TYPE = 'DYNAMIC';

    const ConnectedMenu = connectMenu(MENU_TYPE)(MyContextMenu);

    const handleMenuClick = (e, data, target) => {
        if (data.action === 'Delete') {
            setIdeas(removeItem(ideas, data.id));
        }
    }

    return (
        <div className="contenedor">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <Link to={`${match.url}/create`}>
                        <CustomBtn btnText="Create New +"/>
                    </Link>
                </div>
            </div>
            <br/>
            <ResponsiveMasonry>
                <Masonry>
                    {
                        ideas.map((item) => {
                            return (
                                <ContextMenuTrigger
                                    id={MENU_TYPE} key={item._id}
                                    collect={() => { return { item: item, onItemClick: handleMenuClick } }}
                                ><Idea item={item} />
                                </ContextMenuTrigger>
                            );
                        })
                    }
                </Masonry>
            </ResponsiveMasonry>

            <ConnectedMenu className=".react-contextmenu" />
        </div>
    )
}

export default Ideas;