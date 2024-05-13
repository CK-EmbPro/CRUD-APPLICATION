const express = require('express')
const Book = require('../model/books-model')

const getAllBooks = async function (req, res, next) {


    try {
        let books = await Book.find()
        if (!books) {
            return res.status(404).json({ "message": "No products found" })
        }

        return res.status(200).json({ books })
    } catch (error) {
        console.log(error)
    }
}


    const getBookById = async function (req, res, next) {
        const id = req.params.id

        let book;

        try {
            book = await Book.findById(id)
        } catch (error) {
            console.log(error)
        }

        if (!book) {
            return res.status(404).json({ "message": "No products found" })
        }

        return res.status(200).json({ book })

    }


    const addBook = async function (req, res, next) {
        let book;

        const { name, author, description, price, availability, image } = req.body

        try {
            book = new Book({
                name,
                author,
                description,
                price,
                availability,
                image
            })

            res.status(201).json({ "book": await book.save() })

        } catch (error) {
            console.log(error)
            return res.status(404).json({ "message": "No products found" })
        }



    }

    const updateBook = async (req, res, next) => {
        let id = req.params.id
        let book

        try {
            const { name, author, description, price, availability } = req.body
            book = await Book.findByIdAndUpdate(id, {
                name,
                author,
                description,
                price,
                availability
            })


            book = await book.save()

        } catch (error) {
            console.log(error)
        }

        if (!book) {
            return res.status(404).json({ "message": "No products found" })
        }

        return res.status(201).json({ "msg": "updated successfully" })
    }

    const deleteBook = async (req, res, next) => {
        const id = req.params.id
        let book;
        try {
            book = await Book.findByIdAndDelete(id)

            if (!book) {
                return res.status(404).json({ "message": "No products found" })
            }

            return res.status(201).json({ "msg": "deleted successfully" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ "message": "internal server error" })
        }


    }

    module.exports = {
        getAllBooks,
        getBookById,
        addBook,
        updateBook,
        deleteBook
    }
