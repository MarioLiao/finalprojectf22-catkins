const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        trim: true, //trim white spaces in the end
        minlength: 3
    },
    following : {
        type: [String],
        required: true
    },
}, {
    timestamps: true, //when was created/modified
})

const User = mongoose.model('User', userSchema);

module.exports = User;