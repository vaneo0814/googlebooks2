const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/api/books")
  .get(booksController.findAll)

  router.route("/savedBooks")
  .post(booksController.saveBook)

// Matches with "/api/books/:id"
router.route("/api/books/:id")
  .get(booksController.findById)
  .delete(booksController.removeBook);

module.exports = router;
