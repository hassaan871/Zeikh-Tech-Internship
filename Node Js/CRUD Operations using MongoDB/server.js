const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(()=>{ console.log("Connected to Mongodb...")})
    .catch((err)=>{ console.log("Error connecting mongodb...",err)});

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date , default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course',courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Reactjs Course',
        author: 'code with mosh',
        tags: ['node', 'frontend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

// createCourse();

async function getCourses() {
    const courses = await Course.find({author: "code with mosh"});
    console.log(courses);
}

getCourses();