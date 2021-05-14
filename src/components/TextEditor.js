import React, { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "@nick4fake/react-draft-wysiwyg"; //would use the actual reac-draft-wysiwyg but it has a "cant setState error, so I use this package made by a random user that solved it"
import "@nick4fake/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditor.css";
import CustomBtn from "./CustomBtn";
import { updateText } from "../utils/textHelper";

const TextEditor = props => {
	const [contentState, setContentState] = useState(props.content);

	const [toolbarClass, setToolbarClass] = useState("toolbarOff");
	const [editorClass, setEditorClass] = useState("");

	const onContentStateChange = contentState => {
		setContentState(contentState);
	};

	const toolbar = {
		options: [
			"inline",
			"blockType",
			"fontSize",
			"fontFamily",
			"list",
			"textAlign",
			"colorPicker",
			"link",
			"history"
		],
		inline: {
			inDropdown: false,
			className: undefined,
			component: undefined,
			dropdownClassName: undefined,
			options: [
				"bold",
				"italic",
				"underline",
				"strikethrough",
				"monospace",
				"superscript"
			]
		},
		blockType: {
			inDropdown: true,
			options: [
				"Normal",
				"H1",
				"H2",
				"H3",
				"H4",
				"H5",
				"H6",
				"Blockquote",
				"Code"
			],
			className: undefined,
			component: undefined,
			dropdownClassName: undefined
		},
		fontSize: {
			options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
			className: undefined,
			component: undefined,
			dropdownClassName: undefined
		},
		fontFamily: {
			options: ["Rajdhani", "Montserrat"],
			className: undefined,
			component: undefined,
			dropdownClassName: undefined
		},
		list: {
			inDropdown: false,
			className: undefined,
			component: undefined,
			dropdownClassName: undefined,
			options: ["unordered", "ordered"]
		},
		textAlign: {
			inDropdown: false,
			className: undefined,
			component: undefined,
			dropdownClassName: undefined,
			options: ["left", "center", "right", "justify"]
		},
		colorPicker: {
			className: undefined,
			component: undefined,
			popupClassName: undefined,
			colors: [
				"rgb(34,40,49)",
				"rgb(238,238,238)",
				"rgb(196,39,39)",
				"rgb(92,171,80)",
				"rgb(241,245,17)",
				"rgb(0,173,181)"
			]
		},
		link: {
			inDropdown: false,
			className: undefined,
			component: undefined,
			popupClassName: undefined,
			dropdownClassName: undefined,
			showOpenOptionOnHover: true,
			defaultTargetOption: "_self",
			options: ["link"],
			linkCallback: undefined
		}
	};

	const saveContent = () => {
		updateText(contentState, props.textId, props.type);
	};

	return (
		<Editor
			onFocus={event => {
				setToolbarClass("toolbarOn");
				setEditorClass("editorOnFocus");
			}}
			onBlur={event => {
				setToolbarClass("toolbarOff");
				setEditorClass("");
			}}
			initialContentState={contentState}
			toolbarClassName={toolbarClass}
			wrapperClassName="wrapperClassName"
			editorClassName={`editorClassName ${editorClass} myScrollbar`}
			onContentStateChange={onContentStateChange}
			toolbar={toolbar}
			toolbarCustomButtons={[
				<CustomBtn btnText="Save" handleClick={saveContent} />
			]}
		/>
	);
};

export default TextEditor;
