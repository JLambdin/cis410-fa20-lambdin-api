const express = require('express')
const db = require('./dbConnectExec.js')
const app = express();

app.get("/hi",(req, res)=>{
    res.send("Hello world")
})

app.get("/movies", (req, res)=>{
    //Get Data from database
    db.executeQuery(`SELECT * FROM movie LEFT JOIN genre ON genre.GenrePK = movie.GenreFK`)
    .then((result)=>{
        res.status(200).send(result)
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send()
    })
})
app.listen(5000,()=>{console.log("App is running on port 5000")})