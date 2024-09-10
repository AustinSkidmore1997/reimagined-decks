const { Schema } = require('mongoose');

const cardSchema = new Schema({
    cardId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        unique: true
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
    }

}, { _id: false });
module.exports = cardSchema;