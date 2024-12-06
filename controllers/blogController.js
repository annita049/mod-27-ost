const blogModel = require("../models/blogModel");

// Create a blog
exports.createBlog = async (req, res) => {
  try {
    const { title, short_des, des, img } = req.body;

    const newBlog = await blogModel.create({ title, short_des, des, img });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: newBlog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create blog",
      error: error.message,
    });
  }
};

// Read a single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve blog",
      error: error.message,
    });
  }
};

// Update a blog by ID
exports.updateBlogById = async (req, res) => {
  try {
    const { title, short_des, des, img } = req.body;

    const updatedBlog = await blogModel.findByIdAndUpdate(
      req.params.id,
      { title, short_des, des, img },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update blog",
      error: error.message,
    });
  }
};

// Delete a blog by ID
exports.deleteBlogById = async (req, res) => {
  try {
    const deletedBlog = await blogModel.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete blog",
      error: error.message,
    });
  }
};
