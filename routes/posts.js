const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.post("/", PostsController.Create);
router.get("/new", PostsController.New);
router.post("/like",PostsController.Like);
router.post("/unlike",PostsController.Unlike);
router.get("/images", PostsController.Images);
router.post("/upload", PostsController.CreateImage);
module.exports = router;
