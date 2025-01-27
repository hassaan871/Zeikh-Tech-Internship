const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(()=>{ console.log("Connected to Mongodb...")})
    .catch((err)=>{ console.log("Error connecting mongodb...",err)});

const courseSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minLength: 5,
        maxLength: 255
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network']
    },
    author: String,
    price: {
        type: Number,
        min:1,
        max:200,
        required: function() { return this.isPublished; },
        get: v => Math.round(v), //custom getter function
        set: v => Math.round(v)  //custom setter function
    },
    tags: {
        type: [String],
        validate: {
            validator: function(v) {
                return v && v.length > 0;
            },
            message: "A course should have at least one tag."
        }
    },
    date: {type: Date , default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course',courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Reactjs Course',
        author: 'Acade mind',
        category: 'web',
        price: 8.7,
        tags: 'backend',
        isPublished: true
    });

    try{
        const result = await course.save();
        console.log(result);
    }catch(ex){
        console.log(ex.message);
        
    }
}

async function getCourses(id) {
     const course = await Course.findOne({_id: id}).select({price: 1}).lean(false);
    console.log(course);
}

// getCourses('679727782b2f04bc90284201');

async function updateCourse(id){
    const course = await Course.findById(id);

    if(!course) return;

    course.set({
        author: "Max schawzmuller",
        name: "Acade mind youtube"
    });

    const result = await course.save();
    console.log(result);
    
}

// updateCourse('679727a029b02e0443a0befa');


async function updateFirst(id){
    const result = await Course.updateOne({_id: id},{
        $set: {
            author: 'Mosh',
            isPublished: false
        }
    });

    console.log(result);
    
}

// updateFirst('679727a029b02e0443a0befa');


async function removeCourse(id){
    const result = await Course.deleteOne({_id: id});
    console.log(result);
}

// removeCourse('679727a029b02e0443a0befa');