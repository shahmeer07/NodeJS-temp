const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end(
    "<h1> Hello this is Shahmeer</h1> <p> Welcome to my world Hope to like it :D </p>"
  );
});

server.listen(port, () => {
  console.log(`The Server is listening at port ${port}`);
});
