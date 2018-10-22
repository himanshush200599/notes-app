console.log("notes.js is starting ");

var addNotes = (title,body) =>{
  console.log("Title is ",title,": Body is ",body);
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
