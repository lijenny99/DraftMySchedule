const mongoose = require('mongoose')
const scheduleSchema = new mongoose.Schema({
    user: {type: String, required: true},
    email: {type: String, required: true},
    schedules: [
        {
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
            numCourses: {type: Number, default: 0},
        }
    ], 
    lastModified: {type: Number}
})

module.exports = mongoose.model('Schedule', scheduleSchema)