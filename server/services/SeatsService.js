const seatsResponse = require('../services/data/seatsRS.json');

class SeatsService {
    async getSeats(request) {
        //let URI = `${ancillaryOffersCopa}`; 
        console.log('request SeatsService', request);
        /*let URI = `${ancillaryOffersCopa}`; 
        this.log(CircularJSON.stringify(request), URI);
        try {
          const response = await axios.post(URI, request);
          this.log('getSeats RS: ' + CircularJSON.stringify(response.data));
          return JSON.parse(CircularJSON.stringify(response.data));
        } catch (error) {
          return {
            error: { message: error.message },
            transactionStatusCode : 1003,
            pricedOffer : null
          }
        }*/
        try {
            return seatsResponse;
        } catch (error) {
            console.log('ocurrio un error en el service ', seatsResponse);
            return error;
        }
    }
}

module.exports = SeatsService;

