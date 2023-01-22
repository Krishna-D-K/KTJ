const express = require('express');
const { createCompetetion, deleteCompetetion, updateCompetetions, getCompetetions, addRequest, addMember, deleteRequest } = require('./controllers/Competition_controllers');
const router = express.Router();
const path = require("path");

router.get("/competetions", getCompetetions);  // get all the competetions that have been created
router.post("/user", createCompetetion);       // create a new competetion
router.delete("/user", deleteCompetetion);     //delete an existing competetion
router.post("/user/:id", addMember);           // confirm the request and add the applicant as a member of the team
router.delete("/user/:id", deleteRequest);     // delete the request for a certain applicant
router.patch("/user/:id", addRequest);         // create a new request for the competetion

module.exports = router;
