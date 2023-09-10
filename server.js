// EXPRESS SERVER

// const express = require("express");
// const app = express();

// app.use(express.json()); MIDDLEWARE FOR PARSING JSON  REQUESTS
// app.get('/' , (req,res) => {
//     res.send("Hello World")
// })

// const port = 5000;
// app.listen(port, () => {
//   console.log(`Listening to port ${port}`);
// });
// app.on("error",(err)=>{
//     console.log(`server error ${err.message}`)
// })

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/plain");
  res.write("Hello Shahmeer ");
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`listening at ${port}`);
});
