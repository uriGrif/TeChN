const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Idea = require("../models/idea");

mongoose.set("useFindAndModify", false);

router.use(express.json());

router.get("/get-all/:prId", (req, res) => {
	const projId = req.params.prId;
	Idea.find({ projectId: projId })
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			console.log(err);
		});
});

router.post("/add", (req, res) => {
	const projId = req.body.projectId;
	const idea = new Idea({
		text: req.body.text,
		projectId: mongoose.Types.ObjectId(projId),
	});

	idea
		.save()
		.then(result => {
			res.send(result);
		})
		.catch(err => {
			console.log(err);
		});
});

router.delete("/delete", (req, res) => {
	const ideaId = req.body.ideaId;
	Idea.findByIdAndDelete(ideaId)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			console.log(err);
		});
});

module.exports = router;
