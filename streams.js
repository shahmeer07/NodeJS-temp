const fs = require("fs");

const readSteam = fs.createReadStream("./docs/Amazon AWS.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./docs/Amazon shahmeer  AWS.txt");

// readSteam.on("data", (chunk) => {
//   console.log("------ NEW CHUNK -------");
//   console.log(chunk);
//   writeStream.write("\n NEW CHUNK \n");
//   writeStream.write(chunk);
// });

// OR WE CAN DO PIPPING

readSteam.pipe(writeStream);
