const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location_latitude: {
        type: String,
        required: true
    },
    location_longitude: {
        type: String,
        required: true
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User