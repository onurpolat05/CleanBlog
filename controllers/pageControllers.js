const Blogs = require('../models/Blogs');

exports.getAboutPage = (req, res) => {
  res.render('about');
};
exports.getAddPage = (req, res) => {
  res.render('add');
};
exports.getEditPage = async (req, res) => {
  const blog = await Blogs.findById(req.params.id);
  res.render('edit', { blog });
};