
 
 const User = require('../models/user')

exports.register = async(req, res) =>{
    const firstname = req.body.firstname
    const lastname = req.body.lastname

    let newUser = await new User({
        firstName: firstname,
        lastName:lastname
    })
    
    const adduser =   await newUser.save()
    if(!adduser) {
        res.status(400).json({error:"cannot save the user  to database"})

  }
  res.status(200).json({data:adduser,message:"user added successfully"})

}
