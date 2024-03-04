const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    post: {
        type: String,
        required: true,
        trim: true
    },
    authorId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: [String],
        default: []
    }
})

module.exports = mongoose.model('Blog', BlogSchema)