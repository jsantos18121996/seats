const express = require('express');
const SeatsService = require('../services/SeatsService');
const SeatsAvailiabilityResponseTransfer = require('../transfer/SeatsAvailiabilityResponseTransfer');
const SeatsAvailiabilityRequestTransfer = require('../transfer/SeatsAvailiabilityRequestTransfer');
const SeatsAvailiabilityResponseTransferNew = require('../transfer/SeatsAvailiabilityResponseTransferNew');
const router = express.Router();

router.post('/seats/search', async (req, res) => {

    let request = req.body;
    console.log('request in ROUTES /seats/search', request);
    request = SeatsAvailiabilityRequestTransfer(request);
    console.log('request in ROUTES 2 /seats/search', request);

    const seatsService = new SeatsService({
        sessionID: null,
        IPAddress: null
    });

    try {
        const response = await seatsService.getSeats(request);
        console.log('response in ROUTES ', response);
        const data = SeatsAvailiabilityResponseTransferNew(response);

        res.send({
            ok: true,
            status: 200,
            message: "Successfully",
            data: data
        })
    } catch (error) {
        res.send({
            ok: false,
            status: 200,
            message: error,
            data: []
        })
    }
});

router.post('/seats/book', async (req, res) => {
    console.log('req ', req.body);
    try {
        res.send({
            ok: true,
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

router.get('/seats/search/:id', async (req, res) => {
    console.log('req.params', req.params);
    const seatsService = new SeatsService({
        sessionID: null,
        IPAddress: null
    });

    try {
        const response = await seatsService.getSeatsByPlantId(req.params.id);

        res.send({
            ok: true,
            status: 200,
            message: "Successfully",
            data: response.data
        })
    } catch (error) {
        res.send({
            ok: false,
            status: 200,
            message: error,
            data: []
        })
    }

})

router.post('/terrains/search', async (req, res) => {
    let request = req.body;
    console.log('request in ROUTES /seats/search', request);

    const seatsService = new SeatsService({
        sessionID: null,
        IPAddress: null
    });

    try {
        const response = await seatsService.getTerrainsByPeriod(request);
        console.log('response in ROUTES ', response);

        res.send({
            ok: true,
            status: 200,
            message: "Successfully",
            data: response.data
        })
    } catch (error) {
        res.send({
            ok: false,
            status: 200,
            message: error,
            data: []
        })
    }
})
module.exports = router;