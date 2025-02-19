const express = require("express");

const { gstUserProfileById } = require("../controllers/userProfilesController");
const userProfilesRouter = express.Router();

//GET get UserProfile by id//api//userProfiles/:userId
userProfilesRouter.get("/:userId", getUserProfileById);

module.exports = userProfilesRouter;
