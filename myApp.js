let express = require('express');
let app = express();
let path = require('path')




//serve the css file 
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get("/",(req,res)=>{
    const absolutePath = __dirname+"/views/index.html"
    //console.log(absolutePath)
    //res.send("Hello Express")
    // sendFile method is used to serve the html file.
    res.sendFile(absolutePath)

    //serve the static file using the express.static. it's use to serve the static file
})




































 module.exports = app;
