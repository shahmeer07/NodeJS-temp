const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  console.log(req.url);
  if (req.url == "/") {
    res.statusCode = 200;
    res.end(
      "<h1> Hello this is Shahmeer</h1> <p> Welcome to my world Hope to like it :D </p>"
    );
  } else if (req.url == "/hello") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end(
      "<h1> Like I said,  this is Shahmeer</h1> <p> Welcome to my world Hope to like it :D </p>"
    );
  } else {
    res.statusCode = 404;
    res.end(
      "<h1> Page not found lad</h1> <p> better hope back, nothing to see here  </p>"
    );
  }
});

server.listen(port, () => {
  console.log(`The Server is listening at port ${port}`);
});
