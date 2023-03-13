const express = require("express")
const router = express.Router();

let playlists = [

  ];

router.get("/", (req, res) => {
    res.send({test: "Hello World"});
  });
  
router.get("/playlists", (req, res) => {
    res.send(playlists);
  });

router.get("/playlists/:id", (req, res) => {
    const playlist = playlists.find(c => c.id === parseInt(req.params.id));
    if (!playlist) res.status(404).send(`ID was not found`);
    res.send(playlist);
})

router.post("/playlists", (req, res) => {
  let playlist = req
  // playlists = [...playlists, playlist];
  console.log(playlist);
})

module.exports = router;