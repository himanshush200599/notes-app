console.log("app.js is starting ");
const _ = require("lodash");
const notes = require("./notes");

var command = process.argv[2];
console.log("command: ",command);

if(command === 'list'){
  console.log("listing all notes");
}
else if(command === 'add'){
  console.log("add notes to the app");
}
else{
  console.log("No command found!");
}
