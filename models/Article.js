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
        trim: true,
        unique: true
    },
    url: {
        type: String,
        trim: true,
        unique: true
    },
    saved: {
        type: Boolean,
        default: false
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;