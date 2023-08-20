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

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log("My port: " + PORT);
});