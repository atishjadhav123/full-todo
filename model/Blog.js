const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    task: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    priority: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model("Blog", BlogSchema)