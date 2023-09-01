const Contact = require("../models/contact");


//to add contact info to database
exports.userContact = async (req, res) => {
  const currentaddress = req.body.currentAddress;
  const permanentaddress = req.body.permanentAddress;
  //   console.log("sanepa");

  let newContact = new Contact({
    currentAddress: currentaddress,
    permanentAddress: permanentaddress,
  });

  //to add contact to database
  const addcontact = await newContact.save();

  if (!addcontact) {
    res.status(400).json({ error: "cannot save new contact" });
  }
  res.status(200).json({ data: newContact, message: "user added succesfully" });
};


//to get contact list from database

exports.getAllContact = async(req,res) =>{
    let contacts = await Contact.findAll()

    if(!contacts) {
        res.status(400).json({error:"unable to get all the contacts"})
    }
    res.status(200).json(({data:contacts,message:"contact lists:"}))

}
//to delete contact from database

// exports.delete =(req,res)=>{

  
// }