const express = require('express');
const mongoose = require('mongoose'); 

const Schema = mongoose.Schema

const bookSchema =  Schema({
    name : {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    description: {
        type: String, 
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    availability: {
        type: Boolean,
        required: true
    },

    image: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Book', bookSchema)