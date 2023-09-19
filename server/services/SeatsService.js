const axios = require('axios');
const CircularJSON = require('circular-json');
const Service = require('./Service');
const {
  search
} = require('../../config/env').variables.servicesEndpoint;
const seatsResponse = require('../services/data/seatsRS2.json');

class SeatsService extends Service {

    async getSeats(request) {

        let mockeado = false

        if (mockeado) {
            try {
              return seatsResponse;
            } catch (error) {
                console.log('ocurrio un error en el service ', seatsResponse);
                return error;
            }
        } else {
            let URI = `${search}`; 
            console.log('request ', request, URI);
            try {
              const response = await axios.post(URI, request);
              console.log('response ', CircularJSON.stringify(response.data));
              return JSON.parse(CircularJSON.stringify(response.data));
            } catch (error) {
              return {
                error: { message: error.message },
                transactionStatusCode : 1003,
                pricedOffer : null
              }
            }
        }  
    }
}

module.exports = SeatsService;