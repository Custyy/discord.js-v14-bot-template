const mongoose = require('mongoose')

const demo = new mongoose.Schema({

    id: { type: String, required: true }

})

module.exports = mongoose.model('demo', demo)