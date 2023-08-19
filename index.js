const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

const apiRoutes = require('./server/routes/apiRoutes');

app.use(bodyParser.urlencoded({
    limit: '50mb', extended: true
}));

app.use(bodyParser.json({
    limit: '50mb', extended: true
}));

app.use('/api', apiRoutes);

app.get("/", (req, res) => {
    res.send("Hola mi server en Express");
});

app.listen(port, () => {
    console.log("My port: " + port);
});