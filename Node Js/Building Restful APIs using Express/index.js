const express = require('express');
const app = express();

const courses = [
    {id:1, course:"CS"},
    {id:2, course:"SE"},
    {id:3, course:"IT"}
];

app.get('/', (req, res)=>{
    res.send("Root...")
});

app.get('/api/courses', (req, res)=>{
    res.send([1,2,3])
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