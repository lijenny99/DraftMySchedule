// Set up express
const express = require('express');
const app = express();
const port = 3000;

// Set up body-parser
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

// Set up express-validator
const { check, validationResult } = require('express-validator');

// Set up lowdb
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({schedules: []}).write();

// Set up string similarity
var stringSimilarity = require('string-similarity');

// Set up firebase
var firebase = require("firebase/app");
require("firebase/auth");

var firebaseConfig = {
    apiKey: "AIzaSyB72rXHZQusPEFcgpxSl6wMLzWTKxpAUqk",
    authDomain: "se3316-lab5-a1775.firebaseapp.com",
    databaseURL: "https://se3316-lab5-a1775.firebaseio.com",
    projectId: "se3316-lab5-a1775",
    storageBucket: "se3316-lab5-a1775.appspot.com",
    messagingSenderId: "386528497172",
    appId: "1:386528497172:web:49eac83ef0f13aa2e42101"
};

firebase.initializeApp(firebaseConfig);

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
], (req, res) => {
    // Store passed parameters as constants
    const subject = req.params.subject;
    const course = req.params.course;

    // Filter by specified subject and course if it has a value and map timetable attributes to new array
    const data = timetable.filter(e => (
        e.subject === subject && (course ? (e.catalog_nbr.toString().indexOf(course) > -1) : true)
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
    else if (course == undefined) {// Does not exist 
        res.status(404).send(`${subject} does not exist`)
    }
    else {
        res.status(404).send(`${subject} ${course} does not exist`)
    }
        
})

// Question 4: Create a new schedule
app.post('/schedules', jsonParser, [
    check("name").trim().escape()
], (req,res) => {
    // Store passed parameter as constant
    const name = req.body.name;

    const unsafeValues = [
        '%21','%22','%23','%24','%25','%26','%27','%28','%29',
        '%2A','%2B','%2C','%2D','%2E','%2F',
        '%3A','%3B','%3C','%3D','%3E','%3F',
        '%5B','%5C','%5D','%5E','%5F', '%60'
    ]

    var containsUnsafe = unsafeValues.some(item => name.includes(item));
    if (containsUnsafe)
        return res.status(422).send("Invalid input")

    const decodeName = decodeURIComponent(name);
    // Filter by specified schedule name 
    const filter = db.get("schedules").filter({scheduleName: decodeName}).value()

    // Check if schedule with name already exists
    if (filter!=0) // Exists
        res.status(404).send(`A schedule with the name ${decodeName} already exists!`)
    else { // Does not exist
        db.get("schedules").push({"scheduleName": decodeName, "courses":[],"numCourses": 0}).write()
        const data = db.get("schedules").filter({scheduleName: decodeName}).value()
        res.status(200).send(data);
    }     
})

// Question 5: Save a list of subject code, course code pairs under a given schedule name
app.put('/schedules/:name', jsonParser, [
    check("name").trim().escape(),
    check("courses").trim().escape(),
], (req,res) => {
    // Store passed parameters as constants
    const name = req.params.name;
    const courses = req.body.courseList;

    // Filter by specified schedule name 
    const checkName = db.get("schedules").filter({scheduleName: name}).value();

    if (checkName != 0) { // Schedule exists
        db.get("schedules").find({scheduleName: name}).assign({courses: courses}).write()

        const path = db.get("schedules").find({scheduleName: name}).get("courses")

        db.get("schedules").find({scheduleName: name}).assign({numCourses: path.size()}).write()

        res.send(db.get("schedules").find({scheduleName: name}).value())
    }
    else { // Schedule does not exist
        res.status(404).send(`Schedule with name ${name} was not found!`);
    }
})

// Question 6: Get the list of subject code, course code pairs for a given schedule
app.get('/schedules/:name', [
    check("name").trim().escape(),
], (req,res) => {
    // Store passed parameter as constant
    const name = req.params.name;

    // Filter by specified schedule name 
    const filter = db.get("schedules").filter({scheduleName: name}).value();

    if (filter != 0) {// Exists
        const data = db.get("schedules").find({scheduleName: name}).get("courses");
        res.send(data);
    }
    else // Does not exist
        res.status(404).send(`There is no schedule with the name ${name}`)
})

// Question 7: Delete a schedule with a given name
app.delete('/schedules/:name', [
    check("nameToDelete").trim().escape(),
], (req,res) => {
    // Store passed parameter as constant
    const nameToDelete = req.params.name;

    // Filter by specified schedule name 
    const filter = db.get("schedules").filter({scheduleName: nameToDelete}).value();

    if (filter != 0) { // Exists
        db.get("schedules").remove({"scheduleName": nameToDelete}).write()
        res.send({message: `"${nameToDelete}" has been deleted`})
    }
    else { // Does not exist
        res.status(404).send(`There is no schedule with the name ${nameToDelete}`)
    }
})

// Question 8: Get a list of schedule names and the number of courses that are saved in each schedule
app.get('/schedules', (req,res) => {
    // Map schedule name and number of courses attributes to new array
    const data = db.get("schedules").map(e => (
        {scheduleName: e.scheduleName, numCourses: e.numCourses}
    )).value();
    if (data != 0)
        res.send(data);
    else 
        res.status(404).send("There are no schedules to display")
})

// Question 9: Delete all schedules
app.delete('/schedules', (req,res) => {
    const data = db.get("schedules")
    if (data.size() != 0) {
        data.remove().write();
        res.send({message: "All schedules have been deleted"});
    }
    else
        res.status(404).send("There are no schedules to delete")
})

// Parse data in body as JSON
app.use(bodyParser.json());

// Start a server listing for connections
app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})