var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var noteSchema = new Schema({

  articleHeadline: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  articleDate: {
    type: Date,
    default: Date.now
  },
  noteText: String
});

// creates note
var Note = mongoose.model("Note", noteSchema);

// Exports the note
module.exports = Note;
