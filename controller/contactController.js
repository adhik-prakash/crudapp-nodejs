const Contact = require("../models/contact")

exports.userContact = async(req,res) =>{
    // const{currentAddress,permanentAddress} = req.body
    const currentaddress = req.body.currentAddress
    const permanentaddress = req.body.permanentAddress
    console.log("sanepa")

let  newContact = new Contact({
    currentAddress : currentaddress,
    permanentAddress:permanentaddress,


})

const addcontact = await newContact.save()

if(!addcontact) {
    res.status(400).json({error:"cannot save new contact"})
}
res.status(200).json({data:newContact,message:'user added succesfully'})

}