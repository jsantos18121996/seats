const express = require('express');
const SeatsService = require('../services/SeatsService');
const SeatsAvailiabilityResponseTransfer = require('../transfer/SeatsAvailiabilityResponseTransfer');
const router = express.Router();

router.post('/seats/search', async (req, res) => {

    const request = req.body;
    console.log('request in ROUTES /seats/search', request);

    const seatsService = new SeatsService();

    try {
        const response = await seatsService.getSeats(request);
        const data = SeatsAvailiabilityResponseTransfer(response);

        res.send({
            ok: true,
            status: 200,
            message: "Sillas obtenidas exitosamente",
            seats: data
        })
    } catch (error) {
        res.send({
            ok: false,
            status: 200,
            message: error,
            seats: []
        })
    }
});

router.post('/seats/book', async (req, res) => {
    console.log('req ', req.body);
    try {
        res.send({
            ok:true,
            status: 200,
            message: "Asiento seleccionado con éxito!"
        })
    } catch (error) {
        res.send({
            ok: false,
            status: 200,
            message: error
        })
    }
});

module.exports = router;