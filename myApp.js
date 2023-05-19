let express = require('express');
let app = express();




console.log("Hello World")
app.get("/",(req,res)=>{
    const absolutePath = __dirname+"/views/index.html"
    //console.log(absolutePath)
    //res.send("Hello Express")
    // sendFile method is used to serve the html file.
    res.sendFile(absolutePath)

    //serve the static file using the express.static. it's use to serve the static file
})

app.use(express.static(__dirname+"/public/style.css"))



































 module.exports = app;
