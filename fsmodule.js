const fs = require("fs");
const a = fs.readFileSync("file.docx");
console.log(a.toString());
console.log("end");
