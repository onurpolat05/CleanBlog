const mongoose =require('mongoose');

const Schema = mongoose.Schema;

// create schema

const BlogSchame = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model('Blog', BlogSchame);

module.exports = Blog;
