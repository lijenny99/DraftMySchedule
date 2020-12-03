const mongoose = require('mongoose')
const policySchema = new mongoose.Schema({
    name: {type: String},
    text: {type: String},
})

module.exports = mongoose.model('Policy', policySchema)