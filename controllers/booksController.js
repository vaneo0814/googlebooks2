const db = require("../models");


// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //find by id..
  findById: (req, res) => {
    db.Book
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
},
  saveBook: function(req, res) {
    console.log(`Lets see what this consoles: ` , req.body);
    db.Book
      .create(
        req.body
        // title: req.body.title,
        // authors: req.body.authors,
        // image: req.body.image,
        // description: req.body.description,
        // title: req.body.title
      );
  },
  removeBook: function(req, res) {
    db.Book
      .findById({id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
