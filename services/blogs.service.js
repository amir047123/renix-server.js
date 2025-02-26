const Blogs = require("../models/blogs.model");

exports.createBlogsService = async (data) => {
  const result = await Blogs.create(data);
  return result;
};

exports.getBlogsService = async (page = 1, size = 10, filter) => {
  const query = {};

  if (filter) {
    query.$or = [
      { title: { $regex: filter, $options: "i" } },
      { author: { $regex: filter, $options: "i" } },
      { description: { $regex: filter, $options: "i" } },
      { metaTitle: { $regex: filter, $options: "i" } },
      { metaDescription: { $regex: filter, $options: "i" } },
      { slug: { $regex: filter, $options: "i" } },
      { canonicalUrl: { $regex: filter, $options: "i" } },
    ];
  }

  const result = await Blogs.find(query)
    .sort({ createdAt: -1 })
    .skip(page * size)
    .limit(size);

  const total = await Blogs.countDocuments(query);
  return { result, total };
};
exports.getBlogsByIdService = async (id) => {
  const result = await Blogs.findById(id);
  return result;
};

exports.deleteBlogsService = async (id) => {
  const result = await Blogs.deleteOne({ _id: id });
  return result;
};

exports.updateBlogsService = async (id, updateData) => {
  const updatedBlog = await Blogs.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  if (!updatedBlog) {
    return res.status(404).json({
      status: "fail",
      message: "Blog not found",
    });
  }

  return {
    status: "success",
    data: updatedBlog,
  };
};
