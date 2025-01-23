const express = require('express');
const app = express();

const courses = [
    {id:1, course:"CS"},
    {id:2, course:"SE"},
    {id:3, course:"IT"}
];
app.use(express.json());

app.put('/api/course/:id',(req, res)=>{
    const course = courses.find((element) => parseInt(req.params.id) === element.id);
    if(!course) return res.status(404).send("Course Not found");

    if(req.body.course < 1 || !req.body.course) return res.status(400).send("course is required with length greater than 1");
  
    for(let i=0; i<courses.length; i++){
        if(courses[i].id === course.id){
            courses[i].course = req.body.course;        
            break;
        }
    }

    res.send(courses);
});

app.post('/api/course/:id',(req, res)=>{
    const course = courses.find((element) => parseInt(req.params.id) === element.id);
    if(!course) return res.status(404).send("Course Not found");
        
    if(req.body.course < 1 || !req.body.course) return res.status(400).send("course is required with length greater than 1");
        
    courses.forEach((element)=>{
        if(element.id === course.id){
            element.course = req.body.course;
        }
    });

    res.send(courses);
});

app.post('/api/courses',(req, res)=>{
    if(req.body.course <1 || !req.body.course) return res.status(400).send("Course is required and length greater than 1.");
        
    const course = {
        id: courses.length+1,
        course: req.body.course
    };
    
    courses.push(course);
    res.send(course);
})

app.get('/', (req, res)=>{
    res.send("Root...")
});

app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.get('/api/posts/:year/:month',(req, res)=>{
    // res.send(req.params);
    // res.send(`year: ${req.params.year}, month:${req.params.month}`)
    res.send(req.query);
});

app.get('/api/courses/:id',(req, res)=>{
    let course = courses.find((element)=>element.id === parseInt(req.params.id));
    if(!course){
        res.status(404);
        res.send(`Course with ID ${req.params.id} Not Found.`)
    }
    res.send(course);
});

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server is running on PORT ${port}...`);
});