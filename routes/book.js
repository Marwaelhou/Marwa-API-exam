
const express = require('express');
const router = express.Router();
const handlersBooks = require('../handlers/books');


router.route('/')
      .post(handlersBooks.createBook)
      .get(handlersBooks.getAllbooks)

router
    .route('/:id')
    .get(handlersBooks.getOnebook)
    .put(handlersBooks.updateOnebook)
    .delete(handlersBooks.deleteOnebook);

module.exports = router;
