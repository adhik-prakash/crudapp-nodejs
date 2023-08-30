const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.post("/register", userController.register);
router.get("/userlist",userController.getUserList)
router.get("/userdetails/:id",userController.getUserDetails)



module.exports = router;
