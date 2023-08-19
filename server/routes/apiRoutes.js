const express = require('express');
const router = express.Router();

const seatsRoutes = require('./seatsRoutes');

router.use((req, res, next) => {
    next();
});

router.use(seatsRoutes);

module.exports = router;