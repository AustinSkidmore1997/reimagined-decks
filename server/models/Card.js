const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    artist: {
        type: String,
        required: false
    },
    cmc: { 
        type: Number, 
        required: false },
    id: { 
        type: Schema.Types.ObjectId, 
        required: true, 
        },
    imageUrl: { 
        type: String, 
         },
    layout: { 
        type: String, 
        required: false 
    },
    legalities: [{ 
        type: String, 
        required: false 
    }],
    manaCost: { 
        type: String, 
        required: false 
    },
    multiverseid: { type: String, 
        required: false 
    },
    name: { 
        type: String, 
        required: false 
    },
    number: { 
        type: String, 
        required: false 
    },
    originalText: { 
        type: String, 
        required: false 
    },
    originalType: { 
        type: String, 
        required: false
    },
    printings: [{ 
        type: String, 
        required: false
    }],
    rarity: { 
        type: String,
        required: false
    },
    set: { 
        type: String, 
        required: false 
    },
    setName: { 
        type: String, 
        required: false 
    },
    text: { 
        type: String, 
        required: false 
    },
    type: { 
        type: String, 
        required: false 
    },
    types: [{ 
        type: String, 
        required: false 
    }],
});

// Create the model from the schema
const Card = model('Card', cardSchema);

module.exports = Card;