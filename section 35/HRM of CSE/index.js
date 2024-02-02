// Importing the express module to create our web application
const express = require('express');

// Initializing the express application
const app = express();

// Importing the path module to work with file and directory paths
const path = require('path');

// Importing data from the data directory
let { academicStaff, nonAcademicStaff, students, getNewId } = require('./data');

// Importing the method-override module to use HTTP verbs such as PUT or DELETE 
// in places where the client doesn't support it
const methodOverride = require('method-override');

// Setting up middleware to parse URL-encoded data (from forms, for example)
// The 'extended: true' option allows for rich objects and arrays to be encoded 
// into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
app.use(express.urlencoded({ extended: true }));

// Setting up middleware to parse JSON data in the request body
app.use(express.json());

// Using methodOverride to override the HTTP method
// '_method' is the query string parameter to look for when overriding
app.use(methodOverride('_method'));

// Setting the 'views' directory where template files are located
// The path.join(__dirname, 'views') sets the directory to the 'views' folder in the current directory
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '/public')));

// Setting EJS as the templating engine to render HTML on the server-side
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/home');
})

app.get('/favicon.ico', (req, res) => {
    res.sendStatus(204); // No content
});

app.get('/:category', (req, res) => {
    const { category } = req.params;
    let members;
    let title;
    switch (category) {
        case "academic":
            title = "Academic Staff"
            members = academicStaff;
            break;
        case "nonacademic":
            title = "Non Academic Staff"
            members = nonAcademicStaff;
            break;
        case "student":
            title = "Students"
            members = students
    }
    res.render('pages/members', { members, title, category })
})

app.post('/:category', (req, res) => {
    const { category } = req.params;
    switch (category) {
        case "academic":
            req.body.id = getNewId(academicStaff, 'ACSE')
            academicStaff.push(req.body)
            break;
        case "nonacademic":
            req.body.id = getNewId(nonAcademicStaff, 'NCSE')
            nonAcademicStaff.push(req.body)
            break;
        case "student":
            req.body.id = getNewId(students, 'SCSE')
            students.push(req.body)
    }
    res.redirect(`/${category}`);
})

app.get('/:category/new', (req, res) => {
    const { category } = req.params;
    let fields;
    let title;
    switch (category) {
        case "academic":
            title = "Academic Staff"
            fields = Object.keys(academicStaff[0]).slice(1)
            break;
        case "nonacademic":
            title = "Non Academic Staff"
            fields = Object.keys(nonAcademicStaff[0]).slice(1)
            break;
        case "student":
            title = "Student"
            fields = Object.keys(students[0]).slice(1)
    }
    res.render('pages/new', { fields, title, category });
})

app.get('/:category/:id', (req, res) => {
    const { category, id } = req.params;
    let details;

    switch (category) {
        case "academic":
            details = academicStaff.find( a => a.id === id)
            break;
        case "nonacademic":
            details = nonAcademicStaff.find( a => a.id === id)
            break;
        case "student":
            details = students.find( a => a.id === id)
    }
    
    res.render('pages/profile', { details, category })
})

app.get('/:category/:id/update', (req, res) => {
    const { category, id } = req.params;

    switch (category) {
        case "academic":
            details = academicStaff.find( a => a.id === id)
            break;
        case "nonacademic":
            details = nonAcademicStaff.find( a => a.id === id)
            break;
        case "student":
            details = students.find( a => a.id === id)
    }
    
    res.render('pages/update', { details, category })
})

app.patch('/:category/:id', (req, res) => {
    const { category, id } = req.params;
    let updateProfile;

    switch (category) {
        case "academic":
            updateProfile = academicStaff.find( a => a.id === id)
            
            updateProfile.designation = req.body.designation
            updateProfile.email = req.body.email
            break;
        case "nonacademic":
            updateProfile = nonAcademicStaff.find( a => a.id === id)
            updateProfile.name = req.body.name
            updateProfile.age = req.body.age
            updateProfile.position = req.body.position
            updateProfile.email = req.body.email
            break;
        case "student":
            updateProfile = students.find( a => a.id === id)
            updateProfile.name = req.body.name
            updateProfile.age = req.body.age
            updateProfile.batch = req.body.batch
            updateProfile.email = req.body.email
    }

    updateProfile.name = req.body.name
    updateProfile.age = req.body.age

    res.redirect(`/${category}/${id}`)
})

app.delete('/:category/:id', (req, res) => {
    const { category, id } = req.params;

    switch (category) {
        case "academic":
            academicStaff = academicStaff.filter( a => a.id !== id)
            break;
        case "nonacademic":
            nonAcademicStaff = nonAcademicStaff.filter( a => a.id !== id)
            break;
        case "student":
            students = students.filter( a => a.id !== id)
    }
    res.redirect(`/${category}`)
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
