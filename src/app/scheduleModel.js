const mongoose = require('mongoose')
const scheduleSchema = new mongoose.Schema({
    user: {type: String, required: true},
    email: {type: String, required: true},
    access: {type: String, default: 'regular'},
    accountStatus: {type: String, default: 'active'},
    schedules: [
        {
            scheduleName: {type: String, required: true},
            description: {type: String, default: ''},
            visibility: {type: String, default: 'false'},
            numCourses: {type: Number, default: 0},
            lastModified: {type: Date},
            courseList: {type: Array},
            courses: [
                {
                    subject: {type: String},
                    course: {type: String},
                    courseInfo: [{
                        className: {type: String},
                        classNum: {type: String},
                        component: {type: String},
                        start: {type: String},
                        end: {type: String},
                        campus: {type: String},
                        room: {type: String},
                        days: {type: Array},
                        section: {type: Number},
                        status: {type: String},
                        summary: {type: String}
                        }
                    ]
                }
            ]
        }
    ]
})

module.exports = mongoose.model('Schedule', scheduleSchema)