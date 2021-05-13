const getIdeas = async prId => {
	try {
		const res = await fetch(`http://localhost:8000/ideas/get-all/${prId}`);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log("There has been an error loading the tasks: " + err);
	}
};

const addIdea = async (text, prId) => {
	try {
		fetch("http://localhost:8000/ideas/add", {
			method: "POST",
			body: JSON.stringify({
				text: text,
				projectId: prId
			}),
			headers: { "Content-type": "application/json; charset=UTF-8" }
		});
	} catch (err) {
		console.log(err);
	}
};

const deleteIdea = async ideaId => {
	try {
		fetch(`http://localhost:8000/ideas/delete`, {
			method: "DELETE",
			body: JSON.stringify({
				ideaId: ideaId
			}),
			headers: { "Content-type": "application/json; charset=UTF-8" }
		});
	} catch (err) {
		console.log(err);
	}
};

exports.getIdeas = getIdeas;
exports.addIdea = addIdea;
exports.deleteIdea = deleteIdea;
