const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [{ type: String}],
  image: { type: String},
  description: { type: String},
  link : { type: String},
  bookId: {type: String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
