let express = require('express');
let app = express();




console.log("Hello World")
app.get("/",(req,res)=>{
    const absolutePath = __dirname+"/views/index.html"
    //console.log(absolutePath)
    //res.send("Hello Express")
    res.sendFile(absolutePath)
})



































 module.exports = app;
