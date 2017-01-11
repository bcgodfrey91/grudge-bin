const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const jackals = require('./routes/jackals')
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/jackals', jackals)
app.set('port', process.env.PORT || 9000);
app.use(express.static(path.join(__dirname, '/jackals')))
app.locals.title = 'Grudge List'

app.listen(app.get('port'), () => {
  console.log(`Hello. ${app.locals.title} is running on ${app.get('port')}.`);
})

module.exports = app;
