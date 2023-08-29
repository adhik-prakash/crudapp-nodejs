const express = require("express");
// const bodyParser = require('body-parser')
const User = require("./model/user");
const Contact = require('./model/contact')

//import routes
const testRoute = require("./routes/testRoute");

const app = express();

const port = 3000 || 5000;

// app.use(bodyParser.json())

//use of routes
app.use("/api", testRoute);

//synchronizing models
User.sync({force:true});
Contact.sync({force:true})

app.listen(3000, function () {
  console.log(`Listening to the ${port}`);
});
