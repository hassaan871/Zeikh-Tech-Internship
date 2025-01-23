const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Root...")
});

app.get('/api/courses', (req, res)=>{
    res.send([1,2,3])
});

app.get('/api/courses/:id', (req, res)=>{
    res.send(`You want to get the Course ID: ${req.params.id}`);
});

app.get('/api/posts/:year/:month',(req, res)=>{
    // res.send(req.params);
    // res.send(`year: ${req.params.year}, month:${req.params.month}`)
    res.send(req.query);
});

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server is running on PORT ${port}...`);
});