import './MyContextMenu.css';
import { ContextMenu, MenuItem } from "react-contextmenu";

const MyContextMenu = (props) => {
    const { id, trigger } = props;
    const handleItemClick = trigger ? trigger.onItemClick : null;
    var itemId = trigger ? trigger.item.id : null;

    return (
        <ContextMenu id={id}>
            {trigger && <MenuItem onClick={handleItemClick} data={{ action: 'Delete', id: itemId }}>Delete</MenuItem>}
            {trigger && trigger.case === 1 &&
                <div>
                    <MenuItem onClick={handleItemClick} data={{ action: 'In Progress', id: itemId }}>In Progress</MenuItem>
                    <MenuItem onClick={handleItemClick} data={{ action: 'Done', id: itemId }}>Done</MenuItem>
                </div>
            }
            {trigger && trigger.case === 2 &&
                <div>
                    <MenuItem onClick={handleItemClick} data={{ action: 'To Do', id: itemId }}>To Do</MenuItem>
                    <MenuItem onClick={handleItemClick} data={{ action: 'Done', id: itemId }}>Done</MenuItem>
                </div>
            }
            {trigger && trigger.case === 3 &&
                <div>
                    <MenuItem onClick={handleItemClick} data={{ action: 'To Do', id: itemId }}>To Do</MenuItem>
                    <MenuItem onClick={handleItemClick} data={{ action: 'In Progress', id: itemId }}>In Progress</MenuItem>
                </div>
            }
        </ContextMenu>
    );
};

export default MyContextMenu;