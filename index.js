const express = require("express");
// const bodyParser = require('body-parser')
require('./model/index')
//import routes
const testRoute = require('./routes/testRoute');

const app = express();

const port = 3000 || 5000;

// app.use(bodyParser.json())

//use of routes
app.use('/api',testRoute)


app.listen(3000, function () {
  console.log(`Listening to the ${port}`);
});
