const updateText = (content, textId, type) => {
    try {
        fetch(`http://localhost:8000/${type}/update`, {
            method: "PUT",
            body: JSON.stringify({
                content: content,
                textId: textId
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
    }
    catch (err) {
        console.log(err)
    }
}

const getText = async (type, prId) => {
    try {
        const res = await fetch(`http://localhost:8000/${type}/get/${prId}`);
        const data = await res.json();
        const blocks = data[0].content.blocks
        const textId = data[0]._id
        if (!data[0].content.entityMap){
            var text = { blocks: blocks, entityMap: {} }
        }
        else{
            var text = { data }
        }
        return await {text: text, textId: textId}
    }
    catch (err) {
        console.log('There has been an error loading the project Information: ' + err);
    }
}

exports.getText = getText

exports.updateText = updateText