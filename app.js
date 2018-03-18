const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

var notes = require('./note');

var argv = yargs.argv;

var command = process.argv[2];

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log("Note Created");
        notes.logNote(note);
    } else {
        console.log("Note title is already taken");
    }
} else if(command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach(note => notes.logNote(note));
} else if(command === 'read') {
   var note =  notes.readNote(argv.title);
   if(note) {
    console.log("Note found");
    notes.logNote(note);
   } else {
    console.log("Note not found");
}
} else if(command === 'remove') {
    var removedNote = notes.removeNote(argv.title);
    var message = removedNote ? 'Note was removed' : 'Note not found';
    console.log(message);
} else{
    console.log("Command is not recognized");
}