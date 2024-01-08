const mongoose = require('mongoose')

const text = new mongoose.Schema({
    text : String,
    pathName : String
})

module.exports = mongoose.model('onlineNotes', text)