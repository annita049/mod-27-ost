const express = require("express");
const {
  createBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} = require("../controllers/blogController");

const router = express.Router();

// Create a blog
router.post("/", createBlog);

// Get a single blog by ID
router.get("/:id", getBlogById);

// Update a blog by ID
router.put("/:id", updateBlogById);

// Delete a blog by ID
router.delete("/:id", deleteBlogById);

module.exports = router;
