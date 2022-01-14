import express from 'express';
import mongoose from 'mongoose';

import path from 'path';
import ejs from 'ejs';
import Blog from './models/Blogs.js'
const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db');

//TEMPLATE ENGİNE
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', async(req, res) => {
  const blogs = await Blog.find({});
  res.render('index',{blogs});
});
app.get('/blogs/:id', async (req, res) => {
  
  const blog= await Blog.findById(req.params.id)
  res.render('post', {blog})
});

app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', async(req, res) => {
  res.render('add');
});
app.post('/blogs', async(req, res) => {
  await Blog.create(req.body);

  res.redirect('/');
});

const port = 4000;

app.listen(port, () => {
  console.log(`Sunucu ${port} basladı`);
});