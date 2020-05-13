const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    videoId: {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    }
}, { timestamps: true });

likeSchema.index({ 'userId': 1, 'videoId': 1}, { unique: true });

module.exports = mongoose.model('Like', likeSchema);