const getTasks = async (prId) => {
    try {
        const res = await fetch(`http://localhost:8000/tasks/get-all/${prId}`);
        const data = await res.json();
        return data
    }
    catch (err) {
        console.log('There has been an error loading the tasks: ' + err);
    }
}

const getOneTask = async (taskId) => {
    try {
        const res = await fetch(`http://localhost:8000/tasks/get-one/${taskId}`);
        const task = await res.json()
        return task
    }
    catch (err) {
        console.log(err)
    }
}

const addTask = async (title, description, prId) => {
    try {
        fetch('http://localhost:8000/tasks/add', {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
                state: "To Do",
                projectId: prId
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
    }
    catch (err) {
        console.log(err)
    }
}

const editTask = async (title, description, state, taskId) => {
    try {
        fetch(`http://localhost:8000/tasks/edit`, {
            method: "PUT",
            body: JSON.stringify({
                title: title,
                description: description,
                state: state,
                taskId: taskId
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
    }
    catch (err) {
        console.log(err)
    }
}

const deleteTask = async (taskId) => {
    try {
        fetch(`http://localhost:8000/tasks/delete`, {
            method: "DELETE",
            body: JSON.stringify({
                taskId: taskId
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
    }   
    catch (err){
        console.log(err)
    }
}


exports.getTasks = getTasks
exports.getOneTask = getOneTask
exports.addTask = addTask
exports.editTask = editTask
exports.deleteTask = deleteTask