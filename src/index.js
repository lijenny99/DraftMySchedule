// Set up express
const express = require('express');
const app = express();
const port = 3000;

// Set up body-parser
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

// Set up express-validator
const { check, validationResult } = require('express-validator');

// Set up mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jenny:jennifer123@lab5.4agzt.mongodb.net/database?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, () => { console.log("Mongoose is running") })
mongoose.set('useFindAndModify', false);
mongoose.connection;

Schedule = require('./app/scheduleModel.js')
Review = require('./app/reviewModel.js')
Policy = require('./app/policyModel.js')

// Set up middleware
const fbAuth = require('./fbAuth')

// Set up string similarity
var stringSimilarity = require('string-similarity');

// Read timetable JSON file
var fs = require('fs');
var timetable;
fs.readFile('data.json','utf8',(err,data) => {
    if(err) throw err;
    timetable = JSON.parse(data);
})

// Set up serving front-end code
app.use('/',express.static('static'));

/////////////////////////////////////////////////////////////////////////////////////////////
// ------------------------------------ PUBLIC ACCESS ------------------------------------ //
/////////////////////////////////////////////////////////////////////////////////////////////

// Public: Get timetable entry for given subject code and course code
app.get('/subjects/:subject?/:course?', [
    check("subject").trim().escape(),
    check("course").trim().escape(),
], async (req, res) => {
    // Store passed parameters as constants
    const subject = req.params.subject;
    const course = req.params.course;
    
    // let r;
    // const reviewSubject = [];

    // const revs = timetable.filter(e => (
    //     (e.subject === subject || e.catalog_nbr == subject) && (course ? (e.catalog_nbr.toString().indexOf(course) > -1) : true)
    // )).map(e => ([{
    //     su: e.subject,
    //     ccode: e.catalog_nbr,
    // }]));

    // revs.forEach(async e => {
    //     const id = e[0].su + ' ' + e[0].ccode;
    //     const reviewFilter = await Review.find({courseID: id})
    //     if (reviewFilter != 0) {
    //         r = reviewFilter[0].reviews
    //     }
    //     else {
    //         r = null
    //     }
    //     reviewSubject.push({
    //         courseID: id,
    //         reviews: r,
    //     })
    // })

    // Filter by specified subject and course if it has a value and map timetable attributes to new array
    const data = timetable.filter(e => (
        (e.subject === subject || e.catalog_nbr == subject) && (course ? (e.catalog_nbr.toString().indexOf(course) > -1) : true)
    )).map(e => ({
        subject: e.subject,
        courseCode: e.catalog_nbr,
        description: e.className,
        start: e.course_info[0].start_time,
        end: e.course_info[0].end_time,
        days: e.course_info[0].days,
        section: e.course_info[0].class_section,
        room: e.course_info[0].facility_ID,
        component: e.course_info[0].ssr_component,
        classNum: e.course_info[0].class_nbr,
        fullDescription: e.catalog_description,
        // courseID: e.subject+ ' '+ e.catalog_nbr
    }));

    // let merged = [];

    // for(let i=0; i<data.length; i++) {
    //     merged.push({
    //      ...data[i], 
    //      ...(reviewSubject.find((itmInner) => itmInner.id === data[i].id))}
    //     );
    //   }

    // console.log(merged)
    

    // data.forEach(async e => {
    //     const id = e.subject + ' ' + e.courseCode;
    //     const reviewFilter = await Review.find({courseID: id})
    //     if (reviewFilter != 0) {
    //         r = reviewFilter[0].reviews
    //     }
    //     else {
    //         r = null
    //     }
    //     // data.push(r)
    // })

    // Check if subject and course component entry exists in timetable file
    if (data!= 0)// Exists
        res.send(data);
    else if (course == undefined) {// Only subject was entered 
        res.status(404).send(`${subject} does not exist`)
    }
    else { // Does not exist
        res.status(404).send(`${subject} ${course} does not exist`)
    }
        
})

// Public: Get timetable entry for given keyword
app.get('/keyword/:keyword', [
    check("keyword").trim().escape(),
    check("keyword").isLength({ min: 5 })
], (req, res) => {
    // Store passed parameters as constants
    const keyword = req.params.keyword;

    // Throw error if input is less than 5 characters
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).send(`Keyword must be at least 5 characters`)
    }

    // Filter by specified subject and course if it has a value and map timetable attributes to new array
    const data = timetable.filter(e => (
        (e.catalog_nbr.toString().indexOf(keyword) > -1) || (e.className.indexOf(keyword) > -1) || (stringSimilarity.compareTwoStrings(keyword, e.className) > 0.5)
    )).map(e => ({
        subject: e.subject,
        courseCode: e.catalog_nbr,
        description: e.className,
        start: e.course_info[0].start_time,
        end: e.course_info[0].end_time,
        days: e.course_info[0].days,
        section: e.course_info[0].class_section,
        room: e.course_info[0].facility_ID,
        component: e.course_info[0].ssr_component,
        classNum: e.course_info[0].class_nbr,
        fullDescription: e.catalog_description,
    }));

    // Check if subject and course and (optional) component entry exists in timetable file
    if (data!= 0)// Exists
        res.send(data);
    else {
        res.status(404).send(`No results found`)
    }
        
})

// Public: Display reviews
app.get('/reviews', async(req,res) => {
    try {
        const reviews = await Review.find()
        res.send(reviews)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// Public: Display policies 
app.get('/policy',async(req,res) => {
    try {
        const policies = await Policy.find()
        res.send(policies)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// Public: Display all public schedules
app.get('/publicschedules',async(req,res) => {
    try {
        const schedules = await Schedule.find()
        res.send(schedules)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// ------------------------------------ AUTHENTICATED USER ACCESS ------------------------------------ //
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// User: Post user to mongoDB
app.post('/register', fbAuth, jsonParser, [
    check("email").trim().escape()
], async(req,res) => {

    // Create a new entry to post
    const entry = new Schedule({
        user: req.body.user,
        email: req.body.email
    })
    try {
        // Save to new collection in mongoDB and send result
        const newUser = await entry.save();
        res.send(newUser)
    } catch (err) {res.status(404).send(err)}
})

// User: Add review
app.post('/reviews', fbAuth, jsonParser, [
    check("subject").trim().escape(),
    check("course").trim().escape(),
    check("review").trim().escape()
], async(req,res) => {
    // Store passed parameters as constants
    const user = req.user;
    const subject = req.body.subject;
    const course = req.body.course;
    const cID = subject + " " + course;
    const newReview = req.body.review;

    // Get name of user posting review
    const name = await Schedule.find({email: user})

    // Find course ID in mongoDB
    const filter = await Review.find({courseID: cID})

    // Create a new entry to post 
    const entry = new Review({
        courseID: cID,
        reviews: [
            {
                user: name[0].user,
                review: newReview,
                timePosted: new Date()
            }
        ]
        
    })

    const data = timetable.filter(e => (e.subject === subject && e.catalog_nbr == course));

    // Check if subject and course entry exists in timetable file
    if (data!= 0)// Exists
        if (filter != 0) { // Course ID exists in mongoDB
            // Push to existing collection
            await Review.updateOne({courseID: cID},{$push: {reviews: {review: newReview, timePosted: new Date(), user: name[0].user}}})
            const all = await Review.find()
            res.send(all)
        }
        else {
            // Save to new collection in mongoDB and send result
            await entry.save();
            const all = await Review.find()
            res.send(all)
        }
    else { // Does not exist
        res.status(404).send(`${subject} ${course} does not exist`)
    }
})

// User: Get personal schedules
app.get('/schedules', fbAuth, async(req,res) => {
    const email = req.user
    try {
        const schedules = await Schedule.find({email: email})
        res.send(schedules)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// User: Create new schedule
app.post('/schedules', fbAuth, jsonParser, [
    check("scheduleName").trim().escape(),
    check("visibility").trim().escape(),
    check("description").trim().escape(),
    check("scheduleName").isLength({ min: 3 })
], async(req,res) => {
    // Store passed parameters as constants
    const email = req.user
    const sName = req.body.scheduleName
    const v = req.body.visibility
    const desc = req.body.description

    // Throw error if input is less than 3 characters
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).send(`Schedule name must be at least 3 characters`)
    }

    // Check if schedule name exists with user
    const filterBySchedule = await Schedule.find({email: email, 'schedules.scheduleName': sName})
    if (filterBySchedule!=0) { // Exists
        res.status(404).send(`A schedule with the name ${sName} already exists!`)
    }
    else { // Does not exist
        // Check if user has reached maximum number of 20 schedules
        const max = await Schedule.find({email: email})
        if (`${max[0].schedules.length}` >= 20) { // Max reached
            res.status(404).send(`You can have reached your maximum of 20 schedules`)
        }
        else { // Add schedule under user
            await Schedule.updateOne({email: email},{$push: {schedules: {scheduleName: sName, visibility: v, description: desc, lastModified: new Date()}}})
            const data = await Schedule.find({})
            res.status(200).send(data);
            }
    }

})

// User: Edit all aspects of existing schedule
app.put('/schedules/:name', fbAuth, jsonParser, [
    check("name").trim().escape(),
    check("scheduleName").trim().escape(),
    check("visibility").trim().escape(),
    check("description").trim().escape(),
    check("scheduleName").isLength({ min: 3 })
], async(req,res) => {
    // Store passed parameters as constants
    const email = req.user
    const oldName = req.params.name
    const newName = req.body.scheduleName
    const newV = req.body.visibility
    const newDesc = req.body.description

    // Throw error if input is less than 3 characters
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).send(`Schedule name must be at least 3 characters`)
    }
    
    try {
        // Update schedule information
        await Schedule.updateOne({email: email, schedules: {$elemMatch: {scheduleName: oldName}}},{$set: {"schedules.$.scheduleName": newName, "schedules.$.visibility": newV, "schedules.$.lastModified": Date(), "schedules.$.description": newDesc}})
        const data = await Schedule.find({})
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message)
    }

})

// User: Delete schedule
app.delete('/schedules/:name', fbAuth, [
    check("nameToDelete").trim().escape(),
], async (req,res) => {
    // Store passed parameter as constant
    const nameToDelete = req.params.name;
    const email = req.user;

    try {
    // Remove from collection
    Schedule.updateOne({email: email}, {$pull: {schedules: {scheduleName: nameToDelete}}}).exec(() => {
        res.send({message: `"${nameToDelete}" has been deleted`})})
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// User: Save new course list to schedule
app.post('/schedules/:name', fbAuth, jsonParser, [
    check("name").trim().escape(),
    check("courseList").trim().escape(),
], async (req,res) => {
    // Store passed parameters as constants
    const sName = req.params.name;
    const courses = req.body.courseList;
    const email = req.user
    let courseIDs = []

    // Track course ID of each course in schedule
    courses.forEach(e => {
        courseIDs.push(e.subject+' '+e.course)
    })

    try {
        // Update course information in schedule
        await Schedule.updateOne({email: email, schedules: {$elemMatch: {scheduleName: sName}}},{$set: {"schedules.$.courseList": courseIDs, "schedules.$.courses": courses, "schedules.$.lastModified": Date(), "schedules.$.numCourses": courses.length}})
        res.send(checkName)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// User: View details for one schedule
app.get('/schedules/:name', fbAuth, [
    check("name").trim().escape(),
], async (req,res) => {
    // Store passed parameter as constant
    const sName = req.params.name;
    const email = req.user

    // Filter by specified schedule name 
    const filter = await Schedule.find({email: email, 'schedules.scheduleName': sName});;

    if (filter != 0) {// Exists
        // Find schedule information and send
        const data = await Schedule.aggregate([
            { $match: {email: email}},
            { $project: { schedules: { $filter: { input: "$schedules", as: "schedule", cond: {$eq: ["$$schedule.scheduleName",sName]}}}}}
        ])
        res.send(data);
    }
    else // Does not exist
        res.status(404).send(`There is no schedule with the name ${sName}`)
})

////////////////////////////////////////////////////////////////////////////////////////////
// ------------------------------------ ADMIN ACCESS ------------------------------------ //
////////////////////////////////////////////////////////////////////////////////////////////

// Admin: Toggle review visibility
app.put('/reviews', fbAuth, [
    check("courseID").trim().escape(),
    check("review").trim().escape(),
    check("visibility").trim().escape(),
], jsonParser, async(req,res) => {
    // Store passed parameters as constants
    const cID = req.body.courseID
    const rev = req.body.review
    const vis = req.body.visibility

    try {
        // Update information in review collection
        await Review.updateOne({courseID: cID, reviews: {$elemMatch: {review: rev}}},{$set: {"reviews.$.visibility": vis}})
        const data = await Review.find({courseID: cID})
        res.status(200).send(data);
    }  catch (err) {
        res.status(500).send(err.message)
    }
})

// Admin: Toggle account status and access
app.put('/account', fbAuth, [
    check("email").trim().escape(),
    check("access").trim().escape(),
    check("status").trim().escape(),
], jsonParser, async(req,res) => {
    // Store passed parameters as constants
    const email = req.body.email
    const access = req.body.access
    const status = req.body.status

    try {
        // Update information in schedule collection
        await Schedule.updateOne({email: email},{$set: {"access": access, "accountStatus": status}})
        const data = await Schedule.find({email: email})
        res.status(200).send(data);
    }  catch (err) {
        res.status(500).send(err.message)
    }
})

// Admin: View policy   
app.get('/policy/:name', fbAuth, [
    check("name").trim().escape(),
], async(req,res) => {
    // Store passed parameters as constants
    const name = req.params.name
    try {
        const policies = await Policy.find({name: name})
        res.send(policies)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// Admin: Update policy
app.put('/policy', fbAuth, [
    check("policy").trim().escape(),
    check("text").trim().escape(),
], jsonParser, async(req,res) => {
    // Store passed parameters as constants
    const policy = req.body.policy;
    const text = req.body.text;

    // Find policy in mongoDB
    const filter = await Policy.find({name: policy})

    // Create a new entry to post
    const entry = new Policy({
        name: policy,
        text: text
    })

    try {
        if (filter != 0) {
            // Update existing entry 
            await Policy.updateOne({name: policy},{$set: {"text": text}})
            const all = await Policy.find()
            res.send(all)
        }
        else {
            // Save new entry and send result
            await entry.save();
            const all = await Policy.find()
            res.send(all)
        }
    }   catch (err) {
        res.status(500).send(err.message)
    }
})

// Parse data in body as JSON
app.use(bodyParser.json());

// Start a server listing for connections
app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})