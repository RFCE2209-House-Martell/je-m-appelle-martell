const express = require('express');
const path = require('path');
const app = express();
const overviewRoute = require('./routes/overview.js');
const qaRoute = require('./routes/qa.js');
const ratingsRoute = require('./routes/ratings.js');
const relatedRoute = require('./routes/related.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));

app.listen(3000);
console.log('Listening on port 3000');