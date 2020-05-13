const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dislikeSchema = mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    videoId: {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    }
}, { timestamps: true });

dislikeSchema.index({ 'userId': 1, 'videoId': 1}, { unique: true });

module.exports = mongoose.model('disLike', dislikeSchema);