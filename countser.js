const http = require('http');
const express = require('express') ;
const fs = require("fs");
const app = express()
var bodyParser  = require('body-parser');
const path = require('path')



const port = 80;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res) {
  res.sendFile(__dirname + '/countdown.html');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})