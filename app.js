const express = require('express');
const RateLimit = require('express-rate-limit');
const app = express();

const port = process.env.PORT || 3000;

const user = new Object();
user.id = "ja2S-hs81-ksn3-iQI9";
user.name = "Jon Snow";
user.email = "jon@wall.com";
user.age = 21;
const users = [user, user, user];

function doesFail() {
  return (Math.floor(Math.random() * 5) === 0);
}

app.use(new RateLimit({
  windowMs: 10*1000, // 1 minute
  max: 5, // limit each IP to 100 requests per windowMs
  delayMs: 0 // disable delaying - full speed until the max limit is reached
}));

app.get('/', (req, res) => res.send('Users Service is up and working'));

// "/user" routes
app.get('/user', function (req, res) {
  if (doesFail()) {
    res.status(503).send()
  } else {
    res.status(200).json(users);
  }
});
app.post('/user', function (req, res) {
  if (doesFail()) {
    res.status(503).send()
  } else {
    res.status(201).json(user);
  }
});

// "/user/:userId" routes
app.get('/user/:userId', function (req, res) {
  if (doesFail()) {
    res.status(503).send()
  } else {
    res.status(200).json(user);
  }
});
app.put('/user/:userId', function (req, res) {
  if (doesFail()) {
    res.status(503).send()
  } else {
    res.status(200).json(user);
  }
});
app.delete('/user/:userId', function (req, res) {
  if (doesFail()) {
    res.status(503).send()
  } else {
    res.status(200).json(user);
  }
});

app.listen(port, () => console.log(`App running on ${port}`));