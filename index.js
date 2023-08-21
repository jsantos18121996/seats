const express = require("express");
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const apiRoutes = require('./server/routes/apiRoutes');

app.use(bodyParser.urlencoded({
    limit: '50mb', extended: true
}));

app.use(bodyParser.json({
    limit: '50mb', extended: true
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
  });

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log("My port: " + PORT);
});