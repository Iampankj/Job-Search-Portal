const express = require("express")
const app = express();
const db = require("./db.js")
const jobsRoute = require("./routes/jobsRoute")
app.use('/api/jobs', jobsRoute)


const port = process.env.PORT || 4000;

app.listen(port, () => console.log('Node JS server started'));