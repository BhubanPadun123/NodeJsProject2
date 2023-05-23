let express = require('express');
let app = express();
let path = require('path')
require('dotenv').config();




//serve the css file 
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get("/", (req, res) => {
    const absolutePath = __dirname + "/views/index.html"
    //console.log(absolutePath)
    //res.send("Hello Express")
    // sendFile method is used to serve the html file.
    res.sendFile(absolutePath)

    //serve the static file using the express.static. it's use to serve the static file
})

app.get('/json', (req, res) => {
    let message = 'Hello json';

  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }

  const jsonResponse = { message };
  res.json(jsonResponse);
});




































module.exports = app;
