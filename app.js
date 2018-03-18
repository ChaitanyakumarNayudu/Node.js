console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

var notes = require('./note');

var argv = yargs.argv;

var command = process.argv[2];
console.log("Command: " + command);

console.log('yargs:',  argv);

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log("Note Created");
        console.log("---");
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log("Note title is already taken");
    }
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'read') {
   var note =  notes.readNote(argv.title);
   if(note) {
    console.log("Note found");
    console.log("---");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
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