var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
    // author: String
    author: {
        //only can be realized in non-relational db
        id: {
            type: mongoose.Schema.Types.ObjectId,
            // the model referred to
            ref: "User"
        },
        username: String
    }
})

module.exports = mongoose.model("Comment",commentSchema);