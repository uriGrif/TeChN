export async function getTasks(prId) {
	try {
		const res = await fetch(`/.netlify/functions/api/tasks/get-all/${prId}`);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log("There has been an error loading the tasks: " + err);
	}
}

export async function getOneTask(taskId) {
	try {
		const res = await fetch(`/.netlify/functions/api/tasks/get-one/${taskId}`);
		const task = await res.json();
		return task;
	} catch (err) {
		console.log(err);
	}
}

export async function addTask(title, description, prId) {
	try {
		fetch("/.netlify/functions/api/tasks/add", {
			method: "POST",
			body: JSON.stringify({
				title: title,
				description: description,
				state: "To Do",
				projectId: prId
			}),
			headers: { "Content-type": "application/json; charset=UTF-8" }
		});
	} catch (err) {
		console.log(err);
	}
}

export async function editTask(title, description, state, taskId) {
	try {
		fetch(`/.netlify/functions/api/tasks/edit`, {
			method: "PUT",
			body: JSON.stringify({
				title: title,
				description: description,
				state: state,
				taskId: taskId
			}),
			headers: { "Content-type": "application/json; charset=UTF-8" }
		});
	} catch (err) {
		console.log(err);
	}
}

export async function deleteTas(taskId) {
	try {
		fetch(`/.netlify/functions/api/tasks/delete`, {
			method: "DELETE",
			body: JSON.stringify({
				taskId: taskId
			}),
			headers: { "Content-type": "application/json; charset=UTF-8" }
		});
	} catch (err) {
		console.log(err);
	}
}
