console.log('Starting note.js');

const fs = require('fs');

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json');
       return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
    var addNote = (title, body) => {
        var notes = fetchNotes();
        var note = {
            title,
            body
        };
        var duplicateArray = notes.filter((note) => note.title === title);

        if(duplicateArray.length === 0) {
            notes.push(note);
            saveNotes(notes);
            return note;
        }
    };

    var getAll = () => {
        console.log("Getting all notes");
    };

    var readNote = (title, body) => {
        console.log("Reading note", title, body);
    };

    var removeNote = (title) => {
        var notes = fetchNotes();
        var filteredNotes = notes.filter((note) => note.title !== title);
        saveNotes(filteredNotes);
        return notes.length !== filteredNotes.length;
    };


module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};