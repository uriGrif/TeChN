import Idea from "./Idea";
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import {
	ContextMenu,
	MenuItem,
	ContextMenuTrigger,
	connectMenu
} from "react-contextmenu";
import MyContextMenu from "./MyContextMenu";
import CustomBtn from "./CustomBtn";
import { removeItem, findById } from "../utils/arraysHelper";
import { getIdeas, deleteIdea } from "../utils/ideasHelper";

const Ideas = () => {
	const match = useRouteMatch();
	const prId = useParams().prId;

	const loadIdeas = async () => {
		const data = await getIdeas(prId);
		setIdeas(data);
	};

	const [ideas, setIdeas] = useState([]);

	useEffect(() => {
		loadIdeas();
	}, []);

	const MENU_TYPE = "DYNAMIC";

	const ConnectedMenu = connectMenu(MENU_TYPE)(MyContextMenu);

	const handleMenuClick = (e, data, target) => {
		let obj = findById(data.id, ideas);
		if (data.action === "Delete") {
			setIdeas(removeItem(ideas, data.id));
			deleteIdea(obj._id);
		}
	};

	return (
		<div className="contenedor">
			<div className="row">
				<div className="col-md-6 col-sm-12">
					<Link to={`${match.url}/create`}>
						<CustomBtn btnText="Create New +" />
					</Link>
				</div>
			</div>
			<br />
			<ResponsiveMasonry>
				<Masonry>
					{ideas.map(item => {
						return (
							<ContextMenuTrigger
								id={MENU_TYPE}
								key={item._id}
								collect={() => {
									return { item: item, onItemClick: handleMenuClick };
								}}
							>
								<Idea item={item} />
							</ContextMenuTrigger>
						);
					})}
				</Masonry>
			</ResponsiveMasonry>

			<ConnectedMenu className=".react-contextmenu" />
		</div>
	);
};

export default Ideas;
