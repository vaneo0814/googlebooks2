const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.saveBook);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.removeBook);

module.exports = router;
