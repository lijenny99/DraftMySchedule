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
mongoose.connect('mongodb+srv://jenny:jennifer123@lab5.4agzt.mongodb.net/database?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, (req, res) => { console.log("Mongoose is running") })
mongoose.set('useFindAndModify', false);
const mdb = mongoose.connection

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

// Keyword search
app.get('/keyword/:keyword', [
    check("keyword").trim().escape(),
    check("keyword").isLength({ min: 5 })
], (req, res) => {
    // Store passed parameters as constants
    const keyword = req.params.keyword;

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

// Get timetable entry for given subject code and course code
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

    // Check if subject and course and (optional) component entry exists in timetable file
    if (data!= 0)// Exists
        res.send(data);
    else if (course == undefined) {// Does not exist 
        res.status(404).send(`${subject} does not exist`)
    }
    else {
        res.status(404).send(`${subject} ${course} does not exist`)
    }
        
})

// Post user to mongoDB
app.post('/register', jsonParser, async(req,res) => {
    const entry = new Schedule({
        user: req.body.user,
        email: req.body.email
    })
    try {
        const newUser = await entry.save();
        res.send(newUser)
    } catch (err) {res.status(404).send(err)}
})

// Get all reviews
app.get('/reviews', async(req,res) => {
    try {
        const reviews = await Review.find()
        res.send(reviews)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// User: Add review
app.post('/reviews', fbAuth, jsonParser, async(req,res) => {
    const user = req.user;
    const subject = req.body.subject;
    const course = req.body.course;
    const cID = subject + " " + course;
    const newReview = req.body.review;

    const name = await Schedule.find({email: user})

    const filter = await Review.find({courseID: cID})
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
        if (filter != 0) {
            await Review.updateOne({courseID: cID},{$push: {reviews: {review: newReview, timePosted: new Date(), user: name[0].user}}})
            const all = await Review.find()
            res.send(all)
        }
        else {
            const newReview = await entry.save();
            const all = await Review.find()
            res.send(all)
        }
    else {
        res.status(404).send(`${subject} ${course} does not exist`)
    }
})

// Admin: Toggle review visibility
app.put('/reviews', fbAuth, jsonParser, async(req,res) => {
 //   const email = req.user
    const cID = req.body.courseID
    const rev = req.body.review
    const vis = req.body.visibility

    await Review.updateOne({courseID: cID, reviews: {$elemMatch: {review: rev}}},{$set: {"reviews.$.visibility": vis}})
    const data = await Review.find({courseID: cID})
    res.status(200).send(data);
})

// Admin: Toggle account status and access
app.put('/account', fbAuth, jsonParser, async(req,res) => {
    //   const email = req.user
       const email = req.body.email
       const access = req.body.access
       const status = req.body.status
   
       await Schedule.updateOne({email: email},{$set: {"access": access, "accountStatus": status}})
       const data = await Schedule.find({email: email})
       res.status(200).send(data);
   })

// Admin: View policy   
app.get('/policy/:name', fbAuth, async(req,res) => {
    const name = req.params.name
    try {
        const policies = await Policy.find({name: name})
        res.send(policies)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// Admin: Update policy
app.put('/policy', jsonParser, async(req,res) => {
    const policy = req.body.policy;
    const text = req.body.text;

    const filter = await Policy.find({name: policy})
    const entry = new Policy({
        name: policy,
        text: text
    })

    if (filter != 0) {
        await Policy.updateOne({name: policy},{$set: {"text": text}})
        const all = await Policy.find()
        res.send(all)
    }
    else {
        const newPolicy = await entry.save();
        const all = await Policy.find()
        res.send(all)
    }
})

// Public: Display all policies 
app.get('/policy',async(req,res) => {
    try {
        const policies = await Policy.find()
        res.send(policies)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// Public: View public schedules
app.get('/publicschedules',async(req,res) => {
    try {
        const schedules = await Schedule.find()
        res.send(schedules)
    } catch (err) {
        res.status(500).send(err.message)
    }
})


app.get('/schedules', fbAuth, async(req,res) => {
    const email = req.user
    try {
        const schedules = await Schedule.find({email: email})
        res.send(schedules)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.post('/schedules', fbAuth, jsonParser, async(req,res) => {
    const email = req.user
    const sName = req.body.scheduleName
    const v = req.body.visibility
    const desc = req.body.description

    const filter = await Schedule.find({email: email})
    if (filter!=0) {
        const filterBySchedule = await Schedule.find({email: email, 'schedules.scheduleName': sName})
        if (filterBySchedule!=0) {
            res.status(404).send(`A schedule with the name ${sName} already exists!`)
        }
        else {
            const max = await Schedule.find({email: email})
            if (`${max[0].schedules.length}` >= 20) {
                res.status(404).send(`You can have reached your maximum of 20 schedules`)
            }
            else {
                await Schedule.updateOne({email: email},{$push: {schedules: {scheduleName: sName, visibility: v, description: desc, lastModified: new Date()}}})
                const data = await Schedule.find({})
                res.status(200).send(data);
             }
        }
    }
    else {
        res.status(404).send(`Permission denied`)
    }
})

app.put('/schedules/:name', fbAuth, jsonParser, async(req,res) => {
    const email = req.user
    const oldName = req.params.name
    const newName = req.body.scheduleName
    const newV = req.body.visibility
    const newDesc = req.body.description

    await Schedule.updateOne({email: email, schedules: {$elemMatch: {scheduleName: oldName}}},{$set: {"schedules.$.scheduleName": newName, "schedules.$.visibility": newV, "schedules.$.lastModified": Date(), "schedules.$.description": newDesc}})
    const data = await Schedule.find({})
    res.status(200).send(data);


})

app.delete('/schedules/:name', fbAuth, [
    check("nameToDelete").trim().escape(),
], async (req,res) => {
    // Store passed parameter as constant
    const nameToDelete = req.params.name;
    const email = req.user;

    // Filter by specified schedule name 
    const filter = await Schedule.find({email: email, 'schedules.scheduleName': nameToDelete});

    if (filter != 0) { // Exists
        Schedule.updateOne({email: email}, {$pull: {schedules: {scheduleName: nameToDelete}}}).exec(() => {
            res.send({message: `"${nameToDelete}" has been deleted`})
    })}
    else { // Does not exist
        res.status(404).send(`There is no schedule with the name ${nameToDelete}`)
    }
})

app.post('/schedules/:name', fbAuth, jsonParser, [
    check("name").trim().escape(),
    check("courses").trim().escape(),
], async (req,res) => {
    // Store passed parameters as constants
    const sName = req.params.name;
    const courses = req.body.courseList;
    const email = req.user
    let courseIDs = []
    courses.forEach(e => {
        courseIDs.push(e.subject+' '+e.course)
    })

    // Filter by specified schedule name 
    const checkName = await Schedule.find({email: email, 'schedules.scheduleName': sName});

    if (checkName != 0) { // Schedule exists
        await Schedule.updateOne({email: email, schedules: {$elemMatch: {scheduleName: sName}}},{$set: {"schedules.$.courseList": courseIDs, "schedules.$.courses": courses, "schedules.$.lastModified": Date(), "schedules.$.numCourses": courses.length}})
        res.send(checkName)
    }
    else { // Schedule does not exist
        res.status(404).send(`Schedule with name ${sName} was not found!`);
    }
})

app.get('/schedules/:name', fbAuth, [
    check("name").trim().escape(),
], async (req,res) => {
    // Store passed parameter as constant
    const sName = req.params.name;
    const email = req.user

    // Filter by specified schedule name 
    const filter = await Schedule.find({email: email, 'schedules.scheduleName': sName});;

    if (filter != 0) {// Exists
        const data = await Schedule.aggregate([
            {
                $match: {email: email}
            },
            {
                $project: {
                    schedules: {
                        $filter: {
                            input: "$schedules", as: "schedule", cond: {$eq: ["$$schedule.scheduleName",sName]}
                        }
                    }
                }
            }
        ])
        res.send(data);
    }
    else // Does not exist
        res.status(404).send(`There is no schedule with the name ${sName}`)
})

// Parse data in body as JSON
app.use(bodyParser.json());

// Start a server listing for connections
app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})