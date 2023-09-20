const axios = require('axios');
const CircularJSON = require('circular-json');
const Service = require('./Service');
const {
  search
} = require('../../config/env').variables.servicesEndpoint;
const seatsResponse = require('../services/data/seatsRS2.json');
const seatsByPlantByIdResponse = require('../services/data/seatsByPlantId.json');
const terrainsByPeriodResponse = require('../services/data/terrainsByPeriod.json');


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
          transactionStatusCode: 1003,
          pricedOffer: null
        }
      }
    }
  }

  async getSeatsByPlantId(id) {
    let mockeado = true;
    console.log('plantById -> ', id);
    if (mockeado) {
      try {
        return seatsByPlantByIdResponse;
        /*return {//para probar lo que muestra la tabla visual cuando no encuentra resultados
          data : []
        }*/
      } catch (error) {
        console.log('ocurrio un error en el service ', error);
        return {
          error: { message: error.message },
          transactionStatusCode: 1003,
          data: []
        };
      }
    } else {
      let URI = `${search}/id/${id}`;
      console.log('request ', request, URI);
      try {
        const response = await axios.get(URI);
        console.log('response ', CircularJSON.stringify(response.data));
        return JSON.parse(CircularJSON.stringify(response.data));
      } catch (error) {
        return {
          error: { message: error.message },
          transactionStatusCode: 1003,
          data: []
        }
      }
    }
  }

  async getTerrainsByPeriod(request) {

    let mockeado = true

    if (mockeado) {
      try {
        return terrainsByPeriodResponse;
      } catch (error) {
        console.log('ocurrio un error en el service ', error);
        return error;
      }
    } else {
      const URI = `${search}/terrains`;
      console.log('request ', request, URI);
      try {
        const response = await axios.post(URI, request);
        console.log('response ', CircularJSON.stringify(response.data));
        return JSON.parse(CircularJSON.stringify(response.data));
      } catch (error) {
        return {
          error: { message: error.message },
          transactionStatusCode: 1003,
          terrains: []
        }
      }
    }
  }

}

module.exports = SeatsService;