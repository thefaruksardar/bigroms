const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  getAllPost,
  getPostByURL,
  postPagination,
  categoryPost,
  createPost,
  updatePost,
  deletePost,
  searchPost,
  uploadGameIcon,
} = require("../controller/posts");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.get("/post", getAllPost);
router.get("/post/pagination", postPagination);
router.post("/post/image", upload.single("gameIcon"), uploadGameIcon);
router.get("/post/permalink/:url", getPostByURL);
router.get("/post/category/:type", categoryPost);
router.post("/post", createPost);
router.put("/post", updatePost);
router.delete("/post/:id", deletePost);
router.get("/post/search/:query", searchPost);

module.exports = router;
