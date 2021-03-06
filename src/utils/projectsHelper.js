export async function AddProject(name) {
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

export async function GetProjects() {
	try {
		const res = await fetch(".netlify/functions/api/projects");
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}
