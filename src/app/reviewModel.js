const mongoose = require('mongoose')
const reviewSchema = new mongoose.Schema({
    courseID: {type: String, required: true},
    reviews: [
        {
            review: {type: String, required: true},
            visibility: {type: String, default: "public"}
        }
    ]
})

module.exports = mongoose.model('Review', reviewSchema)