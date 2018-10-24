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

}
var readNotes  = (title) =>{
  var notes = fetchNotes();
  var singleNote = notes.filter((note)=> note.title === title);
  var message = singleNote.length ?`Here is body of the notes : ${singleNote[0].body}`:'No notes found of given title';
  console.log(message);
}
var removeNotes = (title) =>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note)=>note.title!==title);
  saveNotes(filteredNotes);
}
module.exports = {
  addNotes,
  getNotes,
  readNotes,
  removeNotes
}
