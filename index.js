const express = require("express");
const questions = require("./questions");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.html");
});
app.get("/quiz", (req, res) => {
  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  res.send(randomQuestion);
});

app.listen(port, () => {
  console.log(`Server is listening on localhost:${port}...`);
});
