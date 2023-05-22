const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    guildID: String,
    userID: String,
    data: Object
})

module.exports = mongoose.model('Test', testSchema)