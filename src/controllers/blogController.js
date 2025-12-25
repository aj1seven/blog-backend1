const { BlogPost } = require("../models");

// CREATE BLOG
exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const blog = await BlogPost.create({
      title,
      content,
      userId: req.user.userId,
      published: true,
    });

    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL BLOGS (PUBLIC)
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.findAll();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE BLOG
exports.updateBlog = async (req, res) => {
  try {
    const blog = await BlogPost.findByPk(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (blog.userId !== req.user.userId && req.user.role !== "ADMIN") {
      return res.status(403).json({ message: "Not authorized" });
    }

    await blog.update(req.body);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE BLOG
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await BlogPost.findByPk(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (blog.userId !== req.user.userId && req.user.role !== "ADMIN") {
      return res.status(403).json({ message: "Not authorized" });
    }

    await blog.destroy();
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
