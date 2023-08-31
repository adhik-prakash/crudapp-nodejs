const express = require("express");

const bodyParser = require("body-parser");

//import routes
const userRouter = require("./routes/user.routes");
const contactRouter = require("./routes/contact.routes");

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use of routes
app.use("/api", userRouter);
app.use("/api", contactRouter);


//synchronizing models
// User.sync({force:true});
// Contact.sync({force:true})

app.listen(3000, function () {
  console.log(`Listening to the ${port}`);
});
