const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Test = new Schema({
    guildID: String,
    userID: String,
    data: Object
})

module.exports = mongoose.model('Test', Test)