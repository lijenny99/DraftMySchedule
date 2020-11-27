const mongoose = require('mongoose')
const scheduleSchema = new mongoose.Schema({
    email: {type: String, required: true},
    scheduleName: {type: String, required: true},
    description: {type: String},
    visibility: {type: String, default: 'private'},
    courses: [
        {
            subject: {type: String},
            course: {type: String},
            courseInfo: [{
                start: {type: String},
                end: {type: String},
            }],
        }
    ],
})

module.exports = mongoose.model('Schedule', scheduleSchema)