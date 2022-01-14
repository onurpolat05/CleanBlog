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
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', async(req, res) => {
  await Blog.create(req.body);

  res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} basladı`);
});