const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const api = require('./api.js')(app);

app.listen(8080, ()=>{
  console.log('[Server] listening on port 8080');
});

// https://pro-self-studier.tistory.com/128
