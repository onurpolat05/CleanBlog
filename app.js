import express from 'express';
import path from 'path';
import ejs from 'ejs';
const app = express();

//TEMPLATE ENGİNE
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} basladı`);
});