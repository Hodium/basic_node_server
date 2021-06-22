const express = require("express");
const cors = require("cors");

const path = 'public';
const path2 = 'backoffice';

const app = express();

app.use('/', express.static(path));
app.use('/backoffice', express.static(path2));

app.use(cors({ origin: '*' }));

app.get('/test', function (req, res) {
  res.send("1000!");
});

app.get('/anotherTest', function (req, res) {
  res.send("2000!");
});

// set port, listen for requests
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;