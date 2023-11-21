const mongoose = require('mongoose');

// creating the enrollee schema
const enrolleeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telephone: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    nin: {
        type: String,
        required: true,
        unique: true
    },
    vin: {
        type: String,
        required: true,
        unique: true
    },
    numberPlate: {
        type: String,
        required: true,
        unique: true
    },
    model: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    }
}, { timestamps: true });

// creating the enrollee schema
module.exports = mongoose.model('ENROLLEE', enrolleeSchema);