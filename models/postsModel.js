const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    likes: { type: Number, default: 0 },
    description: { type: String, required: true },
    PostImage: { type: String, required: true },
    date: { type: Date, default: Date() }
})

const postsModel = mongoose.model('instaPosts', postsSchema)

module.exports = postsModel