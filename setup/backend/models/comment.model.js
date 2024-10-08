const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: {type: String, required: true},
    content: {type: String, required: true},

    // ObjectId of post/comment 
    parent: {type: Schema.Types.ObjectId, required: true},

    // Replies to comment
    replies: {type: [], required: true, default: []},

    createdAt: {type: String, required: true}

})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;