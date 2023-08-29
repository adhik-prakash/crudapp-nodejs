const express = require("express");
// const bodyParser = require('body-parser')
const User = require('./model/user')

//import routes
const testRoute = require('./routes/testRoute');

const app = express();

const port = 3000 || 5000;

// app.use(bodyParser.json())

//use of routes
app.use('/api',testRoute)
User.sync()

app.listen(3000, function () {
  console.log(`Listening to the ${port}`);
});
