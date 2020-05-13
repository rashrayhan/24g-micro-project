const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({
    commentTo: {
        type: Schema.Types.ObjectId,
        ref: 'Video',
        require: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: '5ebc02886d2c1c5f48b97393',
        required: true
    },
    content: {
        type: String,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);