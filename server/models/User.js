const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    _id: {
        type: String,
        required: true,

    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 16,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    decks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Deck',
        },
    ],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

const User = model('User', userSchema);

module.exports = User;
