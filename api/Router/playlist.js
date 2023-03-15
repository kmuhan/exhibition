const express = require("express")
const router = express.Router();

let playlists = {
    post: [
      {
        id: 1445949267,
        artwork:
          "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/100x100bb.jpg",
        trackname: "Sunflower",
        artistname: "Post Malone & Swae Lee",
      },
      {
        id: 1373517313,
        artwork:
          "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/7e/3c/4e/7e3c4ef6-daa7-cc10-57d0-45f5a562eaf5/18UMGIM22101.rgb.jpg/100x100bb.jpg",
        trackname: "Better Now",
        artistname: "Post Malone",
      },
      {
        id: 1671953569,
        artwork:
          "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/ed/03/ec/ed03ec07-f75a-5047-2120-e61e77302f00/810123160853.png/100x100bb.jpg",
        trackname: "Paradise Circus (Fallen Sun Version) [feat. Ghostpoet]",
        artistname: "POST",
      },
      {
        id: 300205693,
        artwork:
          "https://is3-ssl.mzstatic.com/image/thumb/Music/c6/94/58/mzi.lpvxcpci.jpg/100x100bb.jpg",
        trackname: "It's Oh So Quiet",
        artistname: "Björk",
      },
      {
        id: 1373517312,
        artwork:
          "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/7e/3c/4e/7e3c4ef6-daa7-cc10-57d0-45f5a562eaf5/18UMGIM22101.rgb.jpg/100x100bb.jpg",
        trackname: "Psycho (feat. Ty Dolla $ign)",
        artistname: "Post Malone",
      },
    ],
    play: [
      {
        id: 1445949267,
        artwork:
          "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/100x100bb.jpg",
        trackname: "Sunflower",
        artistname: "Post Malone & Swae Lee",
      },
      {
        id: 1373517313,
        artwork:
          "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/7e/3c/4e/7e3c4ef6-daa7-cc10-57d0-45f5a562eaf5/18UMGIM22101.rgb.jpg/100x100bb.jpg",
        trackname: "Better Now",
        artistname: "Post Malone",
      },
      {
        id: 1671953569,
        artwork:
          "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/ed/03/ec/ed03ec07-f75a-5047-2120-e61e77302f00/810123160853.png/100x100bb.jpg",
        trackname: "Paradise Circus (Fallen Sun Version) [feat. Ghostpoet]",
        artistname: "POST",
      },
      {
        id: 300205693,
        artwork:
          "https://is3-ssl.mzstatic.com/image/thumb/Music/c6/94/58/mzi.lpvxcpci.jpg/100x100bb.jpg",
        trackname: "It's Oh So Quiet",
        artistname: "Björk",
      },
      {
        id: 1373517312,
        artwork:
          "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/7e/3c/4e/7e3c4ef6-daa7-cc10-57d0-45f5a562eaf5/18UMGIM22101.rgb.jpg/100x100bb.jpg",
        trackname: "Psycho (feat. Ty Dolla $ign)",
        artistname: "Post Malone",
      },
    ],
};

router.get("/", (req, res) => {
    res.send({test: "Hello World"});
  });
  
router.get("/playlists", (req, res) => {
    res.send(playlists);
  });

router.get("/playlists/:id", (req, res) => {
    let title = req.params.id
    const playlist = playlists[title];
    if (!playlist) res.status(404).send(`ID was not found`);
    res.send(playlist);
})

router.get("/playlists/:id/:trackname", (req, res) => {
  let title = req.params.id
  const playlist = playlists[title];
  let trackname = req.params.trackname
  const track = playlist.find(c => c.trackname === trackname)
  if (!track) res.status(404).send(`ID was not found`);
  res.send(track);
})

router.post("/playlists", (req, res) => {
  let title = Object.keys(req.body)
  let playlist = Object.values(req.body)
  playlists[title] = playlist[0];
  res.send(playlist)
})

module.exports = router;