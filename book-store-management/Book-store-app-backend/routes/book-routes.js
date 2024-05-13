const express = require('express');
const Book = require('../model/books-model')
const booksController = require('../controller/books-controller')
const router  = express.Router();

router.get('/books', booksController.getAllBooks)
router.post('/add', booksController.addBook)
router.get('/book/:id', booksController.getBookById)
router.put('/edit/:id', booksController.updateBook)
router.delete('/delete/:id', booksController.deleteBook)


module.exports = router