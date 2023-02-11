const mongoose = require('mongoose')

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://<userName>:<password>@cluster0.z6yezz3.mongodb.net/?retryWrites=true&w=majority`, () => {
    console.log("mongodb is running")
})
module.exports = mongoose