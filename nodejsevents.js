const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("Waterfall", () => {
  console.log("Please turn off the motor");
  setTimeout(() => {
    console.log("A REMINDER Please turn off the motor FGS");
  }, 3000);
});

console.log("The Script is running ");
console.log("The Script is still running ");
myEmitter.emit("Waterfall");
