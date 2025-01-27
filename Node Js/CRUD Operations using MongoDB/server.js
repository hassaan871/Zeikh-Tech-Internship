const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(()=>{ console.log("Connected to Mongodb...")})
    .catch((err)=>{ console.log("Error connecting mongodb...",err)});

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    tags: [String],
    date: {type: Date , default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course',courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Reactjs Course',
        author: 'Acade mind',
        price: 8,
        tags: ['oop','js'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

// createCourse();

// eq (equal to)
// ne (not equal to)
// gt (greater than)
// gte (greater than equal to)
// lt (less than)
// lte (less than equal to)
// in 
// nin (not in)

console.log('================');


async function getCourses() {
    // const courses = await Course.find({author: /^acade/i});
    // const courses = await Course.find({author: /mind$/i});
    const courses = await Course.find({author: /.*mind.*/i});
    console.log(courses);
}

getCourses();