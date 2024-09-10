const { Schema } = require('mongoose');

const cardSchema = new Schema({
    id: {
        type: String,
        required: true,

    },
    name: {
        type: String,

    },
    manaCost: {
        type: String,
    },
    imageUrl: {
        type: String,
        required: false
    },
    cmc: {
        type: Number,
    },
    text: {
        type: String,
        required: true
    },
    deckAmount: {
        type: Number,
        value: 0
    }

}, { _id: false });
module.exports = cardSchema;