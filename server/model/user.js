const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    }
}, { timestamps: true });

userSchema.index({ 'email': 1}, { unique: true });

module.exports = mongoose.model('User', userSchema);