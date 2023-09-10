const express = require("express");

const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
app.on("err", (err) => {
  console.log(`error occured ${err}`);
});

app.get("/", (req, res) => {
  res.send("Hello Shahmeer this is express.js");
});

app.get("/about", (req, res) => {
  res.send("This is a about page");
});

// sending files

app.get("/aws", (req, res) => {
  res.sendFile("./docs/Amazon AWS.txt", { root: __dirname });
});

// redirection

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// A 404 page through middleware

app.use((req, res) => {
  res.send("404 not found lads ");
});
