console.log("globals");
global.setTimeout(() => {
  console.log("TIme out MF");
  clearInterval(int);
}, 7000);

const int = setInterval(() => {
  console.log("this is interval lads");
}, 2000);
