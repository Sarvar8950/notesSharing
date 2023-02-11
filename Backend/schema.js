const mongoose = require('mongoose')

const text = new mongoose.Schema({
    data : String
})

module.exports = mongoose.model('onlineNotes', text)