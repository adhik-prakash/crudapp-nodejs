const express = require("express")

const router = express.Router()


router.get("/", (req, res) => {
    res.send("hello i am Node.js!!");
  });

  module.exports = router