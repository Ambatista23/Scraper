const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ArticleSchema = new Schema ({
    title: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true,
        unique: true
    },
    time: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
        unique: true
    }
})

const Article = mongoose.model("Article", ArticleSchema)

module.exports = Article