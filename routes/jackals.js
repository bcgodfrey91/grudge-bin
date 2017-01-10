const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.jackals = []

router.get('/', (request, response) => {
  response.send('yoooooo')
})


module.exports = router
