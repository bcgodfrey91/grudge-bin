const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.jackals = [{name: 'Pete', reason: 'Scumbag', fogiven: false, id: Date.now()}]

router.get('/', (request, response) => {
  response.send({ jackals: app.locals.jackals })
})

router.get('/:id', (request, response) => {
  const { id } = request.params
  const jackal = app.locals.jackals.find(j => j.id == id)
  if (jackal) { return response.send({ jackal }); }
  else { return response.sendStatus(404); }
})

router.post('/', (request, response) => {
  app.locals.jackals.push({ id: Date.now(), name: request.body.name, reason: request.body.reason, forgiven: false })
  response.status(201).send('Post received')
})


module.exports = router
