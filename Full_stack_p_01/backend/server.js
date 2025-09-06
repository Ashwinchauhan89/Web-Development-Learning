import express from 'express';

const app= express()

app.get('/', (req , res) => {
    res.send("Server is Ready")
});

//get a list of list 5 jokes
app.get('jokes' , (req, res) => {
    
})

const port = process.env.PORT || 3000;

app.listen (port, () => {
    console.log(`server at http://localhost:${port}`);
});