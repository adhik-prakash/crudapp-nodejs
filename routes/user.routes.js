const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const { testFunction } = require("../controller/testController");

router.post("/register", userController.register);
router.get("/userlist", userController.getUserList);
router.get("/userdetails/:id", userController.getUserDetails);
router.get("/test", testFunction);
router.delete("/deleteuser/:id", userController.deleteUser);
router.patch("/updateuser/:id", userController.updateUser);

module.exports = router;
