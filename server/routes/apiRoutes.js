const express = require('express');
const router = express.Router();
const cors = require('cors');

const seatsRoutes = require('./seatsRoutes');

const allowedOrigins = require('../../config/env').allowedOrigins;

router.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(msg, false);
        }
        return callback(null, true);
    }
}));

router.use((req, res, next) => {
    next();
});

router.use(seatsRoutes);

module.exports = router;