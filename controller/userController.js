const User = require("../models/user");

exports.register = async (req, res) => {
  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const addUser = new User({
    firstName: firstname,
    lastName: lastname,
  });
  if (!addUser) {
    res.status(400).json({ error: "cannot save the user  to database" });
  } 
  res.status(200).json({ data: addUser, message: "user added successfully" });
};

exports.getUserList = async (req, res) => {
  const users = await User.findAll();
  if (!users) {
    res.status(400).json({ error: "cannot find the users" });
  }
  res.status(200).json({ data: users, messsage: "list of users:" });
};

exports.getUserDetails = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    res.status(400).json({ error: "couldn't find the user" });
  }
  res.status(200).json({ data: user });
};

exports.deleteUser = async (req, res) => {
  let user = await User.findByPk(req.params.id);
  if (!user) {
    res.status(400).json({ error: "unable to find user" });
  }
  User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: user,  });
};

exports.updateUser = async (req, res) => {
  let user =  User.findByPk(req.params.id);
  if (!user) {
    res.status(400).json({ error: "unable to update the user" });
  }
  await User.update(
    {lastName:req.body.lastName},
    {
     where: {
      id: req.params.id,
    }},
  );
  res.status(200).json({ data: user });
};
