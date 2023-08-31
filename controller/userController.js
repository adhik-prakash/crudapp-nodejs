const User = require("../models/user");

//to register user
exports.register = async (req, res) => {
  // console.log('hello')
  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  // console.log(firstname)
  let newUser = new User({
    firstName: firstname,
    lastName: lastname,
  });

  //to add user to database
  const adduser = await newUser.save();
  if (!adduser) {
    res.status(400).json({ error: "cannot save the user  to database" });
  }
  res.status(200).json({ data: newUser, message: "user added successfully" });
};

//to get all user list
exports.getUserList = async (req, res) => {
  let users = await User.findAll();

  if (!users) {
    res.status(400).json({ error: "cannot find the users" });
  }
  res.status(200).json({ data: users, messsage: "list of users:" });
};




//to get user details

exports.getUserDetails = async (req, res) => {
  let user = await User.findByPk(req.params.id);

  if (!user) {
    res.status(400).json({ error: "couldn't find the user" });
  }
  res.status(200).json({ data: user });
};
