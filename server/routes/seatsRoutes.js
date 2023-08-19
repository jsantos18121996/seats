const express = require('express');
const router = express.Router();

router.get('/seats/search', async (req, res) => {
    try {
        res.send({
            ok: true,
            status: 200,
            message: "Sillas obtenidas exitosamente"
        })
    } catch (error) {
        res.send({
            ok: false,
            status: 200,
            message: error
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