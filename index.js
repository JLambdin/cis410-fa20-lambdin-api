const express = require('express')
const app = express();

app.get("/hi",(req, res)=>{
    res.send("Hello world")
})

app.listen(5000,()=>{console.log("App is running on port 5000")})