const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    likes: { type: Number, default: 0 },
    description: { type: String, required: true },
    PostImage: { type: URL },
    date: { type: Date, default: new Date().getTime() }
})

const postsModel = mongoose.model('instaPosts', postsSchema)

module.exports = postsModel