exports.updatedUserPost = (req, res) => {
  const { post_id } = req.params;
  res.json({ message: `Post ${post_id} updated!` });
};

const express = require("express");
const {
  getUserPosts,
  getUserPostById,
  addUserPost,
  deleteUserPostById,
  updatedUserPost,
} = require("../controllers/userPostsController.js");
const userPostsRouter = express.Router();

userPostsRouter.get("/", getUserPosts);

//GET get a user post by id /api/userPosts/;post_id
userPostsRouter.get("/:post_id", getUserPostById);

//POST post a user post /api/userPosts
userPostsRouter.post("/", addUserPost);

userPostsRouter.put("/:post_id", updatedUserPost);

userPostsRouter.delete("/:post_id", deleteUserPostById);

module.exports = userPostsRouter;
