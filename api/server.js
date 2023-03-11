const express = require("express");
const app = express();
const playlist = require("./Router/playlist")

app.use("/api", playlist);

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));