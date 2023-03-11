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

router.put("/api/playlist", (req, res) => {
  const playlist = req.body
  playlists = [...playlists, playlist];
})

module.exports = router;