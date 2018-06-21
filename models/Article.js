var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

    headline: {
        type: String,
        trim: true,
        unique: true
    },
    summary: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true,
        unique: true
    },
    saved: {
        type: Boolean,
        default: false
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;