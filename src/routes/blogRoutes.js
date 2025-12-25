const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// PUBLIC
router.get("/", blogController.getAllBlogs);

// PROTECTED: CREATE BLOG
router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN", "AUTHOR"),
  blogController.createBlog
);

// UPDATE BLOG
router.put(
  "/:id",
  authMiddleware,
  blogController.updateBlog
);

// DELETE BLOG
router.delete(
  "/:id",
  authMiddleware,
  blogController.deleteBlog
);

module.exports = router;
