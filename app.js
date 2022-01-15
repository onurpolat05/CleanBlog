const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');
const blogController = require('./controllers/blogControllers.js');
const pageController = require('./controllers/pageControllers');

const app = express();

mongoose.connect('mongodb+srv://onur:rFfTCjncv9EYTTAM@cluster0.hfk0b.mongodb.net/clean-blog?retryWrites=true&w=majority')
.then(()=>{
console.log('DB CONNET')
}).catch((err)=>{
  console.log(err)
})

//TEMPLATE ENGİNE
app.set('view engine', 'ejs');
//MİDDLEWARES

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.use(express.static('public'));
//ROUTES

app.get('/', blogController.getAllBlogs);
app.get('/blogs/:id', blogController.getBlog);
app.put('/blogs/:id', blogController.updateBlog);
app.delete('/blogs/:id', blogController.deleteBlog);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/blogs/edit/:id', pageController.getEditPage);



app.post('/blogs', blogController.createBlog);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Sunucu ${port} basladı`);
});
