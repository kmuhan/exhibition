const express = require("express");
const app = express();
const playlist = require("./Router/playlist")
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/api", playlist);

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
