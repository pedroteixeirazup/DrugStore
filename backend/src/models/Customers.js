const { Schema, model } = require('mongoose');


const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    }
}, {
    timestamps: true,
});

module.exports = model('Customer', CustomerSchema);