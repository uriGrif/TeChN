const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
//const cors = require("cors");
require("dotenv").config();
const serverless = require("serverless-http");

const projects = require("./routes/projects");
const tasks = require("./routes/tasks");
const ideas = require("./routes/ideas");
const informations = require("./routes/informations");
const requirements = require("./routes/requirements");
const useCases = require("./routes/useCases");
const router = require("./routes/projects");

//app.use(cors());

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// app.get("/", (req, res) => {
// 	res.send(`Hello Express!`);
// });

const routerBasePath = express.Router();

routerBasePath.use("/projects", projects);
routerBasePath.use("/tasks", tasks);
routerBasePath.use("/ideas", ideas);
routerBasePath.use("/information", informations);
routerBasePath.use("/requirements", requirements);
routerBasePath.use("/useCases", useCases);

app.use("/.netlify/functions/api", routerBasePath);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

module.exports.handler = serverless(app);
