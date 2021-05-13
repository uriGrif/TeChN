export function AddProject(name) {
	try {
		fetch("/.netlify/functions/api/projects/add", {
			method: "POST",
			body: JSON.stringify({ name: name }),
			headers: { "Content-type": "application/json; charset=UTF-8" }
		});
	} catch (err) {
		console.log(err);
	}
}
