const express = require("express");
const router = express.Router();

const courses = [
    { id: 1, name: "courses1" },
    { id: 2, name: "courses2" },
    { id: 3, name: "courses3" }
  ];
  router.get("/", (req, res) => {
    res.send({test: "Hello World"});
  });
  
  router.get("/api/courses", (req, res) => {
    res.send(courses);
  });
  
  // 해당하는 ID를 찾아서 Respon
  router.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send(`ID was not found`);
    res.send(course);
  });
  
  // PORT
  const port = process.env.PORT || 8080;
  router.listen(port, () => console.log(`Listening on port ${port}...`));

  module.exports = router;