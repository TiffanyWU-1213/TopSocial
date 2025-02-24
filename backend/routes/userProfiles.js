const express = require("express");
const {
  getUserProfileById,
  getUserProfiles,
  patchUserProfilesById,
} = require("../controllers/userProfilesController");
const userProfilesRouter = express.Router();

//GET get UserProfile by id//api//userProfiles/:userId
userProfilesRouter.get("/:userId", getUserProfileById);
module.exports = userProfilesRouter;

//GET get user profiles
userProfilesRouter.get("/", getUserProfiles);

//PATCH update user profile by id/api/userPRofiles/:userId
userProfilesRouter.patch("/:userId", patchUserProfilesById);
