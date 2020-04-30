var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client/dist'));
app.use(express.static(path.join(__dirname, './client/dist')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

var PORT =  4000;

app.listen(PORT, () => {
    console.log(`Server is ready listening on port ${PORT} `);
});