console.log("notes.js is starting ");
const fs  = require("fs");
var fetchNotes = () =>{
  try {
    var notesString = fs.readFileSync('notes.json');
    return JSON.parse(notesString);
  } catch (e) {
    return []
  }
}
var saveNotes = (notes) =>{
  fs.writeFileSync("notes.json",JSON.stringify(notes));

}
var addNotes = (title,body) =>{
  var  notes  = fetchNotes();
  var note = {
    title,
    body
  };
  try {
    var notesString = fs.readFileSync('notes.json');
    notes = JSON.parse(notesString);
  } catch (e) {
  }

var duplicatesNotes = notes.filter((note)=> note.title === title);
if(duplicatesNotes.length===0){
  notes.push(note);
  saveNotes(notes);
  console.log(`Title is : ${note.title}`);
  console.log(`Body is :  ${note.body}`);
}
else{
  console.log("Notes of same title is already in the database");
}

};
var getNotes = () =>{
  console.log("getting all notes ");
}
var readNotes  = (title) =>{
  console.log("reading notes",title);
}
var removeNotes = (title) =>{
  console.log("removing notes ",title);
}
module.exports = {
  addNotes,
  getNotes,
  readNotes,
  removeNotes
}
