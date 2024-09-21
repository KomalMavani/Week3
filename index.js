import express from 'express'

const app = express();  //create object of express
app.use(express.json()); 
const port = 3000; // Assign port on which want to run application

let datastore = {
    user: [{
        "name":"Test1",
        "age":25
    },
    {
        "name":"Test2",
        "age":26
    },
    {
        "name":"Test3",
        "age":29
    }]
}

app.get('/getusers',(req, res) => {
    res.json(datastore.user);
})

app.get('/postusers',(req, res) => {
    const {name, age} = req.body;
    res.json(datastore.user);
})

app.get('/hello',( req, res ) => {
    res.json({"key": "Komal"});
})

app.get('/first',( req, res ) => {
    const fname = req.query.fname;
    const lname = req.query.lname;

    res.send(`Name: ${fname} ${lname}`);
})

app.get('/second',( req, res ) => {
    res.send("Second endpoint");
})

app.get('/third',( req, res ) => {
    res.send("Third endpoint");
})

app.post('/postapi1',( req, res ) => {
    const {fname, lname} = req.body;
    res.send(`${fname} ${lname}`);
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})