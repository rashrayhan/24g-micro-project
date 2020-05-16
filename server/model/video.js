const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: {
        type: String
    },
    video: {
        type: String
    },
    thumb: {
        type: String
    },
    views:{
        type: Number
    }
})

module.exports = mongoose.model('Video', videoSchema);