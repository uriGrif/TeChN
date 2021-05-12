const AddProject = (name) => {
    try {
        fetch('http://localhost:8000/projects/add', {
            method: "POST",
            body: JSON.stringify({ name: name }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
    }
    catch (err) {
        console.log(err)
    }
}

exports.AddProject = AddProject