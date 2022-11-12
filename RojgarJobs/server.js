const express = require("express")
const app = express();
const db = require("./db.js")
const port = process.env.PORT || 4000;

app.listen(port, () => console.log('Node JS server started'));