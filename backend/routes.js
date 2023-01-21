const express = require('express');
const { createCompetetion, deleteCompetetion, updateCompetetions, getCompetetions } = require('./controllers/Competition_controllers');
const router = express.Router();
const path = require("path");

router.get("/", (req,res) =>{
    res.send("HELLO");
})

router.get("/competetions", getCompetetions);
router.post("/user", createCompetetion);
router.delete("/user", deleteCompetetion);
router.patch("/user", updateCompetetions);

module.exports = router;
