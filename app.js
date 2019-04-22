const express = require('express');
//const pug = require('pug');
const app = express();
const port = 3006;

app.set('views', './views')
app.set('view engine', 'pug');

app.listen(port);




app.get('/', (req, res) => {
  res.render('index');
});
