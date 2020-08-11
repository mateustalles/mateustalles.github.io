const express = require('express');

const CEPController = require('./controllers/CEPController');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', (req, res, next) => CEPController.getAddress(req, res, next));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
