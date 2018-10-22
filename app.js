console.log("app.js is starting ");
const _ = require("lodash");
const notes = require("./notes");
const yargs = require("yargs");
var argv = yargs.argv


var command = argv._[0];
console.log("command: ",command);
console.log("Yargs: ",argv);
if(command === 'list'){
  notes.getNotes();
}
else if(command === 'add'){
  notes.addNotes(argv.title,argv.body);
}
else if(command === 'read'){
  notes.readNotes(argv.title);
}
else if(command === 'remove'){
  notes.removeNotes(argv.title);
}
else{
  console.log("No command found!");
}
